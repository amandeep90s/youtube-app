import React from 'react';
import { SearchIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export const SearchInput = () => {
  return (
    <form className={cn('flex w-full max-w-xl')}>
      <div className={cn('relative w-full')}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder={'Search...'}
          className={cn(
            'w-full rounded-l-full border py-2 pr-12 pl-4 focus:outline-none'
          )}
        />
      </div>
      <button
        type="submit"
        className={cn(
          'rounded-r-full border border-l-0 bg-gray-100 px-5 py-2 hover:bg-gray-200',
          'disabled:cursor-not-allowed disabled:opacity-50'
        )}
      >
        <SearchIcon className={cn('size-5')} />
      </button>
    </form>
  );
};
