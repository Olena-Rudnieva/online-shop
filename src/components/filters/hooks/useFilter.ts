import { useCallback, useState } from "react";

type AvailabilityOption = {
  name: string;
  count: number;
};

export const useFilter = () => {
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);
  const [isOpen, setIsOpen] = useState(false);

  const availabilityOptions: AvailabilityOption[] = [
    { name: "In stock", count: 1 },
    { name: "Out of stock", count: 0 },
  ];

  const drawerOpenFn = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const drawerCloseFn = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSelect = (option: string) => {
    if (selectedAvailability.includes(option)) {
      setSelectedAvailability(
        selectedAvailability.filter((item) => item !== option)
      );
    } 
      setSelectedAvailability([...selectedAvailability, option]);
    
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

  return {
    selectedAvailability,
    setSelectedAvailability,
    availabilityOptions,
    priceRange,
    setPriceRange,
    isOpen,
    drawerOpenFn,
    drawerCloseFn,
    handleSelect,
    resetSelection,
    handlePriceChange,
  };
};