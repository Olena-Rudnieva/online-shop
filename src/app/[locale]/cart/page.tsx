"use client";

import { useCart } from "@/context";
import { CartData } from "@/components";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return <CartData cart={cart} removeFromCart={removeFromCart} />;
}
