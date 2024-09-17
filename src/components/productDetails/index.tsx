"use client";

import { Product } from "@/api";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { t } = useTranslation();

  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="relative px-[30px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[36px] flex gap-[50px] w-full max-w-[1200px]">
      <div className="absolute left-0 top-0 w-screen">
        <hr className="border-t border-gray-200" />
      </div>

      <div>
        <img
          src={product.media[0]}
          alt={product.title}
          className="w-[715px] h-[715px] object-contain"
        />
      </div>

      <div className="flex flex-col w-[345px]">
        <p className=" text-customGray text-[10px] leading-[12px] tracking-[1.3px] uppercase">
          {t("product_details.store_name")}
        </p>
        <h2 className=" text-foreground text-[40px] leading-[52px] tracking-[0.6px] mb-[15px]">
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
        <div className="flex border-gray-500 text-[18px] text-customDarkGray mt-[6px]  mb-[15px]">
          <button
            onClick={handleDecrement}
            className="px-2 border-l border-t border-b border-gray-500 w-[45px] h-[47px]"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-[50px] h-[47px] text-center bg-transparent border-t border-b border-gray-500"
          />
          <button
            onClick={handleIncrement}
            className="px-2 border-t border-b border-r border-gray-500 w-[45px] h-[47px]"
          >
            +
          </button>
        </div>
        <div className="mb-[20px]">
          <button className="py-[12px] border border-gray-500 w-full text-[15px] leading-[18px] mb-[8px] hover:border-black transition-transform hover:scale-[101%]">
            {t("product_details.button_add")}
          </button>
          <button className=" py-[12px] border border-gray-500  bg-customDarkGray w-full text-[15px] text-white leading-[18px] transition-transform transform hover:scale-[101%]">
            {t("product_details.button_buy")}
          </button>
        </div>
        <p className="text-[16px] text-customGray leading-[28px] tracking-[0.6px]">
          {product.description || "product_details.default_description"}
        </p>
      </div>
      <div className="absolute left-0 bottom-0 w-screen">
        <hr className="border-t border-gray-200" />
      </div>
    </div>
  );
};
