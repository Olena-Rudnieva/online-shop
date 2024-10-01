'use client';

import { FilterContext } from '@/context';
import { ReactNode, useState } from 'react';

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  return (
    <FilterContext.Provider
      value={{
        minPrice,
        maxPrice,
        setMinPrice,
        setMaxPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
