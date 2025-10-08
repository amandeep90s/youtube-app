import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { SearchInput } from '@/modules/home/ui/components/home-navbar/search-input';

export const HomeNavbar = () => {
  return (
    <div
      className={cn('fixed top-0 left-0 right-0 bg-white flex items-center px-2 pr-5 h-16 z-50')}
    >
      <div className={cn('flex items-center gap-4 w-full')}>
        {/* Menu and logo */}
        <div className={cn('flex items-center shrink-0')}>
          <SidebarTrigger />
          <Link href="/" className={cn('flex px-4 items-center gap-1')}>
            <Image
              src="/logo.svg"
              alt="Youtube"
              height={32}
              width={32}
              className={cn('w-14 h-14')}
            />
            <p className={cn('tracking-tight font-semibold text-xl')}>Youtube</p>
          </Link>
        </div>

        {/* Search bar */}
        <div className={cn('flex flex-1 justify-center max-w-2xl mx-auto')}>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};
