'use client';

import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import {
  ListboxButton,
  Listbox,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import FilterIcon from '../../../public/icons/filter.svg';
import { Drawer } from '../header/components';
import { useFilter } from './hooks';

export const Filters = () => {
  const {
    selectedAvailability,
    availabilityOptions,
    priceRange,
    isOpen,
    drawerOpenFn,
    drawerCloseFn,
    handleSelect,
    resetSelection,
    handlePriceChange,
    setPriceRange,
  } = useFilter();

  const { t } = useTranslation();

  return (
    <div className="w-full flex gap-[20px] justify-start">
      <div className=" hidden md:flex gap-[20px]">
        <p className="text-[14px] text-customGray leading-[21px] tracking-[0.4px] mb-[20px] md:mb-[30px]">
          {t('catalog.filter')}
        </p>
        <Listbox>
          {({ open }) => (
            <div className="relative">
              <ListboxButton className=" w-full flex gap-[4px] text-[14px] text-customGray leading-[21px] tracking-[0.4px] justify-between items-center">
                <span>{t('catalog.price')}</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </ListboxButton>

              {open && (
                <ListboxOptions className="absolute mt-2 w-[350px] bg-white border shadow-lg p-4 space-y-2 z-10">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>
                      {t('catalog.highest_price')}
                      {priceRange[1]}
                    </span>
                    <button
                      onClick={() => setPriceRange([0, 1000])}
                      className="text-blue-500"
                    >
                      {t('catalog.reset')}
                    </button>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <label className="text-gray-700 text-sm">From</label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(0, e.target.value)}
                        className="border border-gray-300 p-2 text-sm rounded-md w-[100px]"
                        min={0}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-700 text-sm">To</label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(1, e.target.value)}
                        className="border border-gray-300 p-2 text-sm rounded-md w-[100px]"
                        min={priceRange[0]}
                      />
                    </div>
                  </div>
                </ListboxOptions>
              )}
            </div>
          )}
        </Listbox>
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
