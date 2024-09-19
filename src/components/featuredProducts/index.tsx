"use client";

import { ProductCard } from "../productCard";
import { useTranslation } from "react-i18next";
import { Product } from "@/api";
import { Carousel } from "../carousel";

interface FeaturedProductsProps {
  products: Product[] | undefined;
}

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const { t } = useTranslation();

  if (!products) {
    return <div>No products available</div>;
  }

  return (
    <div className="relative w-full flex justify-center">
      <div className="px-[15px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[44px] flex flex-col w-full max-w-[1200px]">
        <h2 className="text-foreground text-[20px] leading-[32px] tracking-[0.6px] mb-[30px]">
          {t("home.featured_products_title")}
        </h2>
        <div className="flex justify-center items-center md:hidden gap-[8px]">
          {products && products.length > 0 && (
            <ProductCard card={products[0]} key={products[0].id} />
          )}
        </div>
        <div className="hidden md:flex justify-center items-center gap-[8px]">
          {products && products.length > 0 && (
            <Carousel
              items={products}
              renderSlide={(product) => <ProductCard card={product} />}
              className="w-full"
            />
          )}
        </div>
        <div className="absolute left-0 bottom-0 w-screen">
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
};
