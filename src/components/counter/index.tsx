"use client";

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
  return (
    <div className="flex border-gray-500 text-[18px] text-customDarkGray mt-[6px]  mb-[15px]">
      <button
        onClick={handleDecrement}
        className="px-2 border-l border-t border-b border-gray-500 w-[45px] h-[47px]"
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-[50px] h-[47px] text-center bg-transparent border-t border-b border-gray-500"
      />
      <button
        onClick={handleIncrement}
        className="px-2 border-t border-b border-r border-gray-500 w-[45px] h-[47px]"
      >
        +
      </button>
    </div>
  );
};
