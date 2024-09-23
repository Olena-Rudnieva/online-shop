import { useCart } from "@/context";
import { useState, useCallback } from "react";

 

export const useCount = (initialMedia?: string[]) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(initialMedia && initialMedia.length > 0 ? initialMedia[0] : "");
  const { updateQuantityInCart } = useCart();

  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }, []);

  const handleImageClick = useCallback((image: string) => {
    setActiveImage(image);
  }, []);

  const handleIncreaseQuantity = (productId: number) => {
    updateQuantityInCart(productId, 1);
  };

  const handleDecreaseQuantity = (productId: number) => {
    updateQuantityInCart(productId, -1);
  };

  return {
    quantity,
    activeImage,
    handleIncrement,
    handleDecrement,
    handleImageClick,
    handleDecreaseQuantity,
    handleIncreaseQuantity
  };
};