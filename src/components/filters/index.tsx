"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

import {
  ListboxButton,
  Listbox,
  ListboxOption,
  ListboxOptions,
  Popover,
} from "@headlessui/react";

type AvailabilityOption = {
  name: string;
  count: number;
};

export const Filters = () => {
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    []
  );
  const availabilityOptions: AvailabilityOption[] = [
    { name: "In stock", count: 1 },
    { name: "Out of stock", count: 0 },
  ];
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);

  const { t } = useTranslation();

  const handleSelect = (option: string) => {
    if (selectedAvailability.includes(option)) {
      setSelectedAvailability(
        selectedAvailability.filter((item) => item !== option)
      );
    } else {
      setSelectedAvailability([...selectedAvailability, option]);
    }
  };

  const resetSelection = () => {
    setSelectedAvailability([]);
  };

  return (
    <div className="w-full flex gap-[20px] justify-start">
      <p className="text-[14px] text-customGray leading-[21px] tracking-[0.4px] mb-[30px]">
        {t("catalog.filter")}
      </p>
      <Listbox>
        {({ open }) => (
          <div className="relative">
            <ListboxButton className=" w-full flex gap-[4px] text-[14px] text-customGray leading-[21px] tracking-[0.4px] justify-between items-center">
              <span>Availability</span>
              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
            </ListboxButton>

            {open && (
              <ListboxOptions className="absolute mt-2 w-[350px] bg-white border shadow-lg p-4 space-y-2 z-10">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{selectedAvailability.length} selected</span>
                  <button onClick={resetSelection} className="text-blue-500">
                    Reset
                  </button>
                </div>

                {availabilityOptions.map((option) => (
                  <ListboxOption
                    key={option.name}
                    value={option.name}
                    as="div"
                    className="cursor-pointer select-none flex justify-between items-center text-sm text-gray-800"
                    onClick={() => handleSelect(option.name)}
                  >
                    <span>{option.name}</span>
                    <span className="text-gray-500">({option.count})</span>

                    {selectedAvailability.includes(option.name) && (
                      <CheckIcon className="w-5 h-5 text-blue-500" />
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </div>
        )}
      </Listbox>
    </div>
  );
};
