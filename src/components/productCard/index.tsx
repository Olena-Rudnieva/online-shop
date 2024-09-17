"use client";

import { Product } from "@/api";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  card: Product;
}

export const ProductCard = ({ card }: ProductCardProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleProductClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <div onClick={() => handleProductClick(card.id)} className="cursor-pointer">
      <img
        src={t(card.media[0])}
        alt={t(card.title)}
        className="w-[269px] h-[269px] mb-[20px] object-contain"
      />
      <h3 className="text-[13px] text-customGray leading-[17px] tracking-[0.6px] text-center">
        {t(card.title)}
      </h3>
      <p className="text-[16px] text-customGray leading-[24px] tracking-[0.6px] mb-[20px] text-center">
        ₴{t(card.price)} {t("home.currency")}
      </p>
    </div>
  );
};
