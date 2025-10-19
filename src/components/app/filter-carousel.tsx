'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({ data, value, isLoading, onSelect }: FilterCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      {/* Left fade */}
      <div
        className={cn(
          'pointer-events-none absolute top-0 bottom-0 left-12 z-10 w-12 bg-gradient-to-br from-white to-transparent',
          current === 1 && 'hidden'
        )}
      />
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          dragFree: true,
        }}
        className="flex w-full items-center px-12"
      >
        <CarouselContent className="-ml-3">
          {/* Skeleton */}
          {isLoading &&
            Array.from({ length: 14 }).map((_, index) => (
              <CarouselItem key={index} className={cn('basis-auto pl-3')}>
                <Skeleton className={cn('h-full w-[100px] px-3 py-1 text-sm font-semibold')}>
                  &nbsp;
                </Skeleton>
              </CarouselItem>
            ))}
          {!isLoading && (
            <>
              <CarouselItem className={cn('basis-auto pl-3')} onClick={() => onSelect(null)}>
                <Badge
                  variant={!value ? 'default' : 'secondary'}
                  className={cn('cursor-pointer rounded-lg px-3 py-1 whitespace-nowrap')}
                >
                  All
                </Badge>
              </CarouselItem>
              {data.map((item) => (
                <CarouselItem
                  key={item.value}
                  className={cn('basis-auto pl-3')}
                  onClick={() => onSelect(item.value)}
                >
                  <Badge
                    variant={item.value === value ? 'default' : 'secondary'}
                    className={cn('cursor-pointer rounded-lg px-3 py-1 whitespace-nowrap')}
                  >
                    {item.label}
                  </Badge>
                </CarouselItem>
              ))}
            </>
          )}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>

      {/* Right fade */}
      <div
        className={cn(
          'pointer-events-none absolute top-0 right-12 bottom-0 z-10 w-12 bg-gradient-to-l from-white to-transparent',
          current === count && 'hidden'
        )}
      />
    </div>
  );
};
