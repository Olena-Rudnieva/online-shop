"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  ListboxButton,
  Listbox,
  ListboxOption,
  ListboxOptions,
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

  const handlePriceChange = (index: number, value: string) => {
    const newPrice = [...priceRange];
    newPrice[index] = Number(value);
    setPriceRange([
      Math.max(0, newPrice[0]),
      Math.max(newPrice[0], newPrice[1]),
    ]);
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
              <span> {t("catalog.availability")}</span>
              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
            </ListboxButton>

            {open && (
              <ListboxOptions className="absolute mt-2 w-[350px] bg-white border shadow-lg p-4 space-y-2 z-10">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>
                    {selectedAvailability.length} {t("catalog.selected")}
                  </span>
                  <button onClick={resetSelection} className="text-blue-500">
                    {t("catalog.reset")}
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

      <Listbox>
        {({ open }) => (
          <div className="relative">
            <ListboxButton className=" w-full flex gap-[4px] text-[14px] text-customGray leading-[21px] tracking-[0.4px] justify-between items-center">
              <span>{t("catalog.price")}</span>
              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
            </ListboxButton>

            {open && (
              <ListboxOptions className="absolute mt-2 w-[350px] bg-white border shadow-lg p-4 space-y-2 z-10">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>
                    {t("catalog.highest_price")}
                    {priceRange[1]}
                  </span>
                  <button
                    onClick={() => setPriceRange([0, 10])}
                    className="text-blue-500"
                  >
                    {t("catalog.reset")}
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
  );
};
