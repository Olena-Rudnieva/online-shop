'use client';

import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ListboxButton, Listbox, ListboxOptions } from '@headlessui/react';
import FilterIcon from '../../../public/icons/filter.svg';
import { Drawer } from '../header/components';
import { useFilter } from './hooks';
import { FiltersListBox } from './components';
import { useFilterContext } from '@/context';

export const Filters = () => {
  const { isOpen, drawerOpenFn, drawerCloseFn } = useFilter();
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useFilterContext();

  const { t } = useTranslation();

  return (
    <div className="w-full flex gap-[20px] justify-start">
      <div className=" hidden md:flex gap-[20px]">
        <p className="text-[14px] text-customGray leading-[21px] tracking-[0.4px] mb-[20px] md:mb-[30px]">
          {t('catalog.filter')}
        </p>

        <FiltersListBox
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>

      <div
        className="md:hidden flex gap-[10px] cursor-pointer "
        onClick={drawerOpenFn}
      >
        <FilterIcon className="h-[20px] w-[20px]" />
        <p className="text-[15px] text-customGray leading-[18px] mb-[20px] hover:underline">
          {t('catalog.filter_sort')}
        </p>
      </div>
      <Drawer isOpen={isOpen} onClose={drawerCloseFn} filter />
    </div>
  );
};
