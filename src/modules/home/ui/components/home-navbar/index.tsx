import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthButton } from '@/modules/auth/ui/components/auth-button';
import { SearchInput } from '@/modules/home/ui/components/home-navbar/search-input';

import { cn } from '@/lib/utils';
import { SidebarTrigger } from '@/components/ui/sidebar';

export const HomeNavbar = () => {
  return (
    <div
      className={cn('fixed top-0 right-0 left-0 z-50 flex h-16 items-center bg-white px-2 pr-5')}
    >
      <div className={cn('flex w-full items-center gap-4')}>
        {/* Menu and logo */}
        <div className={cn('flex shrink-0 items-center')}>
          <SidebarTrigger />
          <Link href="/" className={cn('flex items-center gap-1 px-4')}>
            <Image
              src="/logo.svg"
              alt="Youtube"
              height={32}
              width={32}
              className={cn('h-14 w-14')}
            />
            <p className={cn('text-xl font-semibold tracking-tight')}>Youtube</p>
          </Link>
        </div>

        {/* Search bar */}
        <div className={cn('mx-auto flex max-w-2xl flex-1 justify-center')}>
          <SearchInput />
        </div>

        <div className={cn('flex shrink-0 items-center gap-4')}>
          <AuthButton />
        </div>
      </div>
    </div>
  );
};
