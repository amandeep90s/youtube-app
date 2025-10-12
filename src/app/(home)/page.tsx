import { Suspense } from 'react';
import { HydrateClient, trpc } from '@/trpc/server';
import { ErrorBoundary } from 'react-error-boundary';

import Client from './client';

export default async function Home() {
  void trpc.hello.prefetch({ text: 'Amandeep' });

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
