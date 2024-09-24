"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CartSummary, CartTable } from "./components";
import { CartType } from "@/api";

interface CartDataProps {
  cart: CartType[];
  removeFromCart: (productId: number) => void;
}

export const CartData = ({ cart, removeFromCart }: CartDataProps) => {
  const { t } = useTranslation();
  return (
    <div className="px-[15px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[36px] flex flex-col w-full mx-auto max-w-[1200px]">
      <div className="flex justify-between items-center mb-[40px]">
        <h1 className="text-[40px] text-customDarkGray leading-[52px] tracking-[0.6px] mb-[20px]">
          {t("cart.cart_title")}
        </h1>
        <Link href="/products">
          <p className="text-[12px] text-customGray tracking-[0.6px] text-center underline underline-offset-4">
            {t("cart.continue_shopping")}
          </p>
        </Link>
      </div>
      {!cart.length ? (
        <p className="text-[20px] text-customGray leading-[24px] tracking-[0.6px]">
          {t("cart.cart_empty")}
        </p>
      ) : (
        <>
          <CartTable cart={cart} removeFromCart={removeFromCart} />
          <CartSummary cart={cart} />
        </>
      )}
    </div>
  );
};
