'use client';

import { trpc } from '@/trpc/client';

import { DEFAULT_LIMIT } from '@/lib/contants';

export const VideoSection = () => {
  const [videos] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );

  return <div>{JSON.stringify(videos)}</div>;
};
