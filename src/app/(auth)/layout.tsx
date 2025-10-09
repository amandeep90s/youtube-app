import React from 'react';

import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className={cn('flex min-h-screen items-center justify-center')}>{children}</div>;
}
