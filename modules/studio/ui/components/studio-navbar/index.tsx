import Image from 'next/image';
import Link from 'next/link';
import { AuthButton } from '@/modules/auth/ui/components/auth-button';
import { StudioUploadModal } from '@/modules/studio/ui/components/studio-upload-modal';

import { cn } from '@/lib/utils';
import { SidebarTrigger } from '@/components/ui/sidebar';

export const StudioNavbar = () => {
  return (
    <div
      className={cn(
        'fixed top-0 right-0 left-0 z-50 flex h-16 items-center border-b bg-white px-2 pr-5 shadow-md'
      )}
    >
      <div className={cn('flex w-full items-center gap-4')}>
        {/* Menu and logo */}
        <div className={cn('flex shrink-0 items-center')}>
          <SidebarTrigger />
          <Link href="/studio" className={cn('flex items-center gap-1 px-4')}>
            <Image
              src="/logo.svg"
              alt="Youtube"
              height={32}
              width={32}
              className={cn('h-12 w-12')}
            />
            <p className={cn('text-xl font-semibold tracking-tight')}>Studio</p>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        <div className={cn('flex shrink-0 items-center gap-4')}>
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </div>
  );
};
