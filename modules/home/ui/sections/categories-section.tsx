'use client';

import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { trpc } from '@/trpc/client';
import { ErrorBoundary } from 'react-error-boundary';

import { FilterCarousel } from '@/components/app/filter-carousel';

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSectionSuspense = ({
  categoryId,
}: CategoriesSectionProps) => {
  const router = useRouter();
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ id, name }) => ({ value: id, label: name }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set('categoryId', value);
    } else {
      url.searchParams.delete('categoryId');
    }

    router.push(url.toString());
  };

  return <FilterCarousel onSelect={onSelect} data={data} value={categoryId} />;
};

const CategoriesSkeleton = () => {
  return <FilterCarousel isLoading onSelect={() => {}} data={[]} />;
};

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </Suspense>
    </ErrorBoundary>
  );
};
