import { UserCircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const AuthButton = () => {
  return (
    <Button
      variant={'outline'}
      className={cn(
        'cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-blue-600 shadow-none hover:border-blue-500/20 hover:text-blue-500'
      )}
    >
      <UserCircleIcon />
      Sign in
    </Button>
  );
};
