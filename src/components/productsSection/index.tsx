"use client";

import { ProductCard } from "../productCard";
import { Filters } from "../filters";
import { Product } from "@/api";
import { useTranslation } from "react-i18next";

interface ProductsSectionProps {
  products: Product[] | undefined;
}

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  const { t } = useTranslation();

  if (!products) {
    return <div>No products available</div>;
  }

  return (
    <div className="relative w-full flex justify-center ">
      <div className="px-[15px] md:px-[32px] lg:px-[50px] pt-[20px] lg:pt-[25px] pb-[20px] lg:pb-[36px] w-full max-w-[1200px]">
        <div className="absolute left-0 top-0 w-screen">
          <hr className="border-t border-gray-200" />
        </div>
        <h2 className="text-foreground text-[40px] leading-[52px] tracking-[0.6px] mb-[60px]">
          {t("home.products_title")}
        </h2>
        <Filters />
        <div className="flex flex-col justify-center items-center md:flex-row lg:gap-[8px] gap-[8px]">
          {products &&
            products.length > 0 &&
            products.map((card) => <ProductCard card={card} key={card.id} />)}
        </div>
        <div className="absolute left-0 bottom-0 w-screen">
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
};
