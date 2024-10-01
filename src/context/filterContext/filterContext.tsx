import { createContext } from 'react';

export interface FilterContextType {
  minPrice: number | null;
  maxPrice: number | null;
  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);
