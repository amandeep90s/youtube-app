'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { trpc } from '@/trpc/client';
import { ErrorBoundary } from 'react-error-boundary';

import { DEFAULT_LIMIT } from '@/lib/contants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { InfiniteScroll } from '@/components/app/infinite-scroll';

const VideoSectionSuspense = () => {
  const [videos, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    { limit: DEFAULT_LIMIT },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );

  return (
    <div>
      {/* {JSON.stringify(videos)} */}
      <div className="border-y">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[510px] pl-6">Video</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Comments</TableHead>
              <TableHead className="pr-6 text-right">Likes</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {videos.pages
              .flatMap((page) => page.data)
              .map((video) => (
                <TableRow key={video.id}>
                  <TableCell className="pl-6">
                    <Link
                      href={`/studio/videos/${video.id}`}
                      className="hover:underline"
                    >
                      {video.title}
                    </Link>
                  </TableCell>
                  <TableCell>Visibility</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell className="text-right">Views</TableCell>
                  <TableCell className="text-right">Comments</TableCell>
                  <TableCell className="pr-6 text-right">Likes</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      <InfiniteScroll
        isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};

export const VideoSection = () => {
  return (
    <Suspense fallback={<div>Loading videos...</div>}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <VideoSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};
