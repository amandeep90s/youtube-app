import React from 'react';

import { SidebarProvider } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { HomeNavbar } from '@/modules/home/ui/components/home-navbar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className={cn('w-full')}>
        <HomeNavbar />
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};
