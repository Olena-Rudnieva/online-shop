"use client";

import { useCart } from "@/context";
import { useTranslation } from "react-i18next";

export default function Payments() {
  const { cart } = useCart();
  const { t } = useTranslation();

  return (
    <div className="px-[15px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[36px] flex flex-col w-full mx-auto max-w-[1200px]">
      <h1 className="text-[40px] text-customDarkGray leading-[52px] tracking-[0.6px] mb-[20px]">
        {t("payments.title")}
      </h1>
      {cart.map((item) => (
        <p key={item.product.id}>{item.product.title}</p>
      ))}
    </div>
  );
}
