import { SearchIcon } from 'lucide-react';

import React from 'react';

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
            'w-full pl-4 pr-12 py-2 rounded-l-full border focus-outline-none focus:border-blue-500'
          )}
        />
      </div>
      <button
        type="submit"
        className={cn(
          'px-5 py-2 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        <SearchIcon />
      </button>
    </form>
  );
};
