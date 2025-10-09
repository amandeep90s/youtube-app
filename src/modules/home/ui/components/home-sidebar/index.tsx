import { MainSection } from '@/modules/home/ui/components/home-sidebar/main-section';
import { PersonalSection } from '@/modules/home/ui/components/home-sidebar/personal-section';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';

export const HomeSidebar = () => {
  return (
    <Sidebar className={cn('z-40 border-none pt-16')} collapsible={'icon'}>
      <SidebarContent className={cn('bg-background')}>
        <MainSection />
        <Separator />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};
