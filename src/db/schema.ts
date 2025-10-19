import { pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

export const usersTable = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    clerkId: text('clerk_id').notNull().unique(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    imageUrl: text('image_url').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => [uniqueIndex('clerk_id_idx').on(table.clerkId)]
);

export const categoriesTable = pgTable(
  'categories',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull().unique(),
    description: text('description'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => [uniqueIndex('name_idx').on(table.name)]
);
