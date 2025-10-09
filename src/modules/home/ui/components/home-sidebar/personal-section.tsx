'use client';

import Link from 'next/link';
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const items = [
  { title: 'History', url: '/playlists/history', icon: HistoryIcon, auth: true },
  { title: 'Liked Videos', url: '/playlists/liked', icon: ThumbsUpIcon, auth: true },
  { title: 'All Playlists', url: '/playlists', icon: ListVideoIcon, auth: true },
];

export const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild isActive={false} onClick={() => {}}>
                <Link href={item.url} className={cn('flex items-center gap-3')}>
                  <item.icon className="h-4 w-4" />
                  <span className={cn('text-sm')}>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
