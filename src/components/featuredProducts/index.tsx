"use client";

import { productsData } from "@/utils";
import { ProductCard } from "../productCard";
import { useTranslation } from "react-i18next";

export const FeaturedProducts = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full flex justify-center">
      <div className="px-[30px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[44px] flex flex-col justify-start items-start w-full max-w-[1200px]">
        <h2 className="text-foreground text-[20px] leading-[32px] tracking-[0.6px] mb-[30px]">
          {t("home.featured_products_title")}
        </h2>
        <div className="flex lg:gap-[8px] gap-[8px]">
          {productsData.map((card) => (
            <ProductCard card={card} key={card.id} />
          ))}
        </div>
        <div className="absolute left-0 bottom-0 w-screen">
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
};
