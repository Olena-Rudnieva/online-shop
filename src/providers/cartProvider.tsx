"use client";

import { Product } from "@/api";
import { LOCAL_STORAGE_KEYS } from "@/constant";
import { CartContext, CartItem } from "@/context";
import { ReactNode, useEffect, useState } from "react";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem(LOCAL_STORAGE_KEYS.CART);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
      setIsLoading(false);
    }
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantityInCart: item.quantityInCart + quantity,
              }
            : item
        );
      } else {
        return [...prevCart, { product, quantityInCart: quantity }];
      }
    });
  };

  const updateQuantityInCart = (productId: number, amount: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantityInCart: Math.max(1, item.quantityInCart + amount),
            }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.CART, JSON.stringify(cart));
      return;
    }

    localStorage.removeItem(LOCAL_STORAGE_KEYS.CART);
  }, [cart]);

  if (isLoading) {
    return null;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantityInCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
