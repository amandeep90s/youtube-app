import React from 'react';
import { StudioNavbar } from '@/modules/studio/ui/components/studio-navbar';
import { StudioSidebar } from '@/modules/studio/ui/components/studio-sidebar';

import { cn } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';

interface StudioLayoutProps {
  children: React.ReactNode;
}

export const StudioLayout = ({ children }: StudioLayoutProps) => {
  return (
    <SidebarProvider>
      <div className={cn('w-full')}>
        <StudioNavbar />
        <div className={cn('flex min-h-screen pt-16')}>
          <StudioSidebar />
          <main className={cn('flex-1 overflow-y-auto')}>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
