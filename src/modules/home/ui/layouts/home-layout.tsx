import React from 'react';
import { HomeNavbar } from '@/modules/home/ui/components/home-navbar';

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
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};
