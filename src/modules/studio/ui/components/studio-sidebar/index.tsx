'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { StudioSidebarHeader } from '@/modules/studio/ui/components/studio-sidebar/studio-sidebar-header';
import { LogOutIcon, VideoIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export const StudioSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className={cn('z-40 pt-16')} collapsible={'icon'}>
      <SidebarContent className={cn('bg-background')}>
        <SidebarGroup>
          <SidebarMenu>
            <StudioSidebarHeader />

            <SidebarMenuItem>
              <SidebarMenuButton isActive={pathname === '/studio'} tooltip="Content" asChild>
                <Link href="/studio">
                  <VideoIcon className="size-5" />
                  <span className="text-sm">Content</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <Separator />

            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Exit Studio" asChild>
                <Link href="/">
                  <LogOutIcon className="size-5" />
                  <span className="text-sm">Exit Studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
