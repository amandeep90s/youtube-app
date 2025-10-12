import { headers } from 'next/headers';
import { db } from '@/db';
import { usersTable } from '@/db/schema';
import { WebhookEvent } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { Webhook } from 'svix';

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    return new Response('Error: Please add Clerk webhook signing secret', { status: 500 });
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();

  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', { status: 400 });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (error) {
    console.error('Error: Could not verify webhook:', error);
    return new Response('Error: Verification error', { status: 400 });
  }

  // Successfully verified
  const eventType = evt.type;

  // Create User
  if (eventType === 'user.created') {
    const data = evt.data;

    await db.insert(usersTable).values({
      clerkId: data.id,
      name: `${data.first_name} ${data.last_name}`,
      email: data.email_addresses[0].email_address,
      imageUrl: data.image_url,
    });
  }

  // Update User
  if (eventType === 'user.updated') {
    const data = evt.data;

    await db
      .update(usersTable)
      .set({
        name: `${data.first_name} ${data.last_name}`,
        email: data.email_addresses[0].email_address,
        imageUrl: data.image_url,
        updatedAt: new Date(),
      })
      .where(eq(usersTable.clerkId, data.id));
  }

  // Delete User
  if (eventType === 'user.deleted') {
    if (!evt.data.id) {
      return new Response('Error: Missing user id', { status: 400 });
    }
    await db.delete(usersTable).where(eq(usersTable.clerkId, evt.data.id));
  }

  return new Response('Webhook received', { status: 200 });
}
