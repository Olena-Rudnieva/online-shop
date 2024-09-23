import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/api";

export interface CartItem {
  product: Product;
  quantityInCart: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantityInCart: (productId: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
