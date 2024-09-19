import { useState, useCallback } from "react";

export const useCount = (initialMedia: string[]) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(initialMedia[0]);

  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }, []);

  const handleImageClick = useCallback((image: string) => {
    setActiveImage(image);
  }, []);

  return {
    quantity,
    activeImage,
    handleIncrement,
    handleDecrement,
    handleImageClick,
  };
};