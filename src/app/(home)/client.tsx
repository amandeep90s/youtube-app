'use client';

import { trpc } from '@/trpc/client';

const Client = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: 'Amandeep' });

  return <div>Client says {data.greeting}</div>;
};

export default Client;
