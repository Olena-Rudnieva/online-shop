'use client';

import { useTranslation } from 'react-i18next';

interface CounterProps {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

export const Counter = ({
  quantity,
  handleDecrement,
  handleIncrement,
}: CounterProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex border-gray-500 text-[14px] md:text-[18px] text-customDarkGray mt-[6px]  mb-[15px]">
      <button
        onClick={handleDecrement}
        className="px-2 border-l border-t border-b border-gray-500 w-[35px] h-[37px] md:w-[45px] md:h-[47px]"
      >
        {t('counter.-')}
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-[40px] h-[37px] md:w-[50px] md:h-[47px] text-center bg-transparent border-t border-b border-gray-500"
      />
      <button
        onClick={handleIncrement}
        className="px-2 border-t border-b border-r border-gray-500 w-[35px] h-[37px] md:w-[45px] md:h-[47px]"
      >
        {t('counter.+')}
      </button>
    </div>
  );
};
