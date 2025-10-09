'use client';

import Link from 'next/link';
import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const items = [
  { title: 'Home', url: '/', icon: HomeIcon },
  { title: 'Subscriptions', url: '/feed/subscriptions', icon: PlaySquareIcon, auth: true },
  { title: 'Trending', url: '/feed/trending', icon: FlameIcon },
];

export const MainSection = () => {
  return (
    <SidebarGroup>
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
