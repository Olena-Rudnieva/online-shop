"use client";

import { Product } from "@/api";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  card: Product;
}

export const ProductCard = ({ card }: ProductCardProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <img
        src={t(card.media)}
        alt={t(card.title)}
        className="w-[269px] h-[269px] mb-[20px]"
      />
      <h3 className="text-[13px] text-customGray leading-[17px] tracking-[0.6px]">
        {t(card.title)}
      </h3>
      <p className="text-[16px] text-customGray leading-[24px] tracking-[0.6px] mb-[66px]">
        ₴{t(card.price)} UAH
      </p>
    </div>
  );
};
