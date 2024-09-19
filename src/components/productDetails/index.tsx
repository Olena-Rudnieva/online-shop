"use client";

import { Product } from "@/api";
import { useTranslation } from "react-i18next";
import { Carousel } from "../carousel";
import { Counter } from "../counter";
import { useCount } from "./hooks";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { t } = useTranslation();

  const {
    quantity,
    activeImage,
    handleIncrement,
    handleDecrement,
    handleImageClick,
  } = useCount(product.media);

  return (
    <div className="px-[30px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[36px] flex gap-[50px] w-full max-w-[1200px]">
      <div className="flex flex-col items-center">
        <img
          src={activeImage}
          alt={`${product.title} large`}
          className="w-[605px] h-[605px] object-contain"
        />
        <Carousel
          items={product.media.map((image) => ({ id: image, media: image }))}
          renderSlide={(item) => (
            <img
              src={item.media}
              alt={`${product.title} thumbnail`}
              onClick={() => handleImageClick(item.media)}
              className={`w-[100px] h-[100px] object-contain cursor-pointer border ${
                activeImage === item.media ? "border-black" : "border-gray-300"
              }`}
            />
          )}
        />
      </div>

      <div className="flex flex-col w-[345px]">
        <p className="text-customGray text-[10px] leading-[12px] tracking-[1.3px] uppercase">
          {t("product_details.store_name")}
        </p>
        <h2 className="text-foreground text-[40px] leading-[52px] tracking-[0.6px] mb-[15px]">
          {product.title}
        </h2>
        <p className="text-[16px] text-customGray leading-[24px] tracking-[0.6px] ">
          ₴{product.price} {t("home.currency")}
        </p>
        <p className="text-[12px] text-customGray leading-[20px] tracking-[0.7px] mb-[15px]">
          {t("product_details.taxes")}
        </p>
        <p className="text-[13px] text-customGray leading-[20px] tracking-[0.4px]">
          {t("product_details.quantity_text")} ({quantity} {""}
          {t("product_details.in_cart")})
        </p>
        <Counter
          quantity={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
        <div className="mb-[20px]">
          <button className="py-[12px] border border-gray-500 w-full text-[15px] leading-[18px] mb-[8px] hover:border-black transition-transform hover:scale-[101%]">
            {t("product_details.button_add")}
          </button>
          <button className="py-[12px] border border-gray-500  bg-customDarkGray w-full text-[15px] text-white leading-[18px] transition-transform transform hover:scale-[101%]">
            {t("product_details.button_buy")}
          </button>
        </div>
        <div className="overflow-y-auto max-h-[400px]">
          <p
            className="text-[16px] text-customGray leading-[28px] tracking-[0.6px]"
            dangerouslySetInnerHTML={{
              __html:
                product.description || "product_details.default_description",
            }}
          />
        </div>
      </div>
    </div>
  );
};
