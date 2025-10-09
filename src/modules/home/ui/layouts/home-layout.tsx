import React from 'react';
import { HomeNavbar } from '@/modules/home/ui/components/home-navbar';
import { HomeSidebar } from '@/modules/home/ui/components/home-sidebar';

import { cn } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className={cn('w-full')}>
        <HomeNavbar />
        <div className={cn('flex min-h-screen pt-16')}>
          <HomeSidebar />
          <main className={cn('flex-1 overflow-y-auto')}>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
