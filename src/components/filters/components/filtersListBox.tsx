import { useTranslation } from 'react-i18next';
import { ListboxButton, Listbox, ListboxOptions } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface FiltersListBoxProps {
  minPrice: number | null;
  maxPrice: number | null;
  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
  onClose?: () => void;
}

export const FiltersListBox = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  onClose,
}: FiltersListBoxProps) => {
  const { t } = useTranslation();
  const handleReset = () => {
    setMinPrice(0);
    setMaxPrice(0);
    if (onClose) onClose();
  };

  return (
    <Listbox>
      {({ open }) => (
        <div className="relative">
          <ListboxButton className=" w-full flex gap-[4px] text-[14px] text-customGray leading-[21px] tracking-[0.4px] justify-between items-center">
            <span>{t('catalog.price')}</span>
            <ChevronDownIcon className="w-5 h-5 text-gray-400" />
          </ListboxButton>

          {open && (
            <ListboxOptions className="absolute mt-2 w-[250px] md:w-[250px] bg-white border shadow-lg p-4 space-y-2 z-10">
              <div className="flex justify-end text-sm text-gray-500 mb-2">
                <button onClick={handleReset} className="text-blue-500">
                  {t('catalog.reset')}
                </button>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col">
                  <label className="text-gray-700 text-sm">From</label>
                  <input
                    type="number"
                    value={minPrice || 0}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="border border-gray-300 p-2 text-sm rounded-md w-[100px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 text-sm">To</label>
                  <input
                    type="number"
                    value={maxPrice || ''}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="border border-gray-300 p-2 text-sm rounded-md w-[100px]"
                  />
                </div>
              </div>
            </ListboxOptions>
          )}
        </div>
      )}
    </Listbox>
  );
};
