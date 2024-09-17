"use client";

import { SubsribeSection } from "@/components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { productsData } from "@/utils";
import { Product } from "@/api";

// const product = {
//   id: 1,
//   title: "product_details.title",
//   price: "product_details.price",
//   media: "home.items.media_one",
//   quantity: "product_details.quantity",
//   description: "product_details.description",
// };

export default function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (id) {
      const foundProduct = productsData.find((item) => item.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  if (!product) {
    return <p>{t("product_details.not_found")}</p>;
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className="relative px-[30px] md:px-[32px] lg:px-[50px] py-[20px] lg:py-[36px] flex gap-[50px] w-full max-w-[1200px]">
        <div className="absolute left-0 top-0 w-screen">
          <hr className="border-t border-gray-200" />
        </div>

        <div>
          <img
            src={t(product.media)}
            alt={t(product.title)}
            className="w-[715px] h-[715px]"
          />
        </div>

        <div className="flex flex-col w-[345px]">
          <p className=" text-customGray text-[10px] leading-[12px] tracking-[1.3px] uppercase">
            {t("product_details.store_name")}
          </p>
          <h2 className=" text-foreground text-[40px] leading-[52px] tracking-[0.6px] mb-[15px]">
            {t(product.title)}
          </h2>
          <p className="text-[16px] text-customGray leading-[24px] tracking-[0.6px] ">
            ₴{t(product.price)} {t("home.currency")}
          </p>
          <p className="text-[12px] text-customGray leading-[20px] tracking-[0.7px] mb-[15px]">
            {t("product_details.taxes")}
          </p>
          <p className="text-[13px] text-customGray leading-[20px] tracking-[0.4px]">
            {t("product_details.quantity_text")} ({quantity}
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
            <button
              //   onClick={handleSubmit}
              className="py-[12px] border border-gray-500 w-full text-[15px] leading-[18px] mb-[8px] hover:border-black transition-transform hover:scale-[101%]"
            >
              {t("product_details.button_add")}
            </button>
            <button
              //   onClick={handleSubmit}
              className=" py-[12px] border border-gray-500  bg-customDarkGray w-full text-[15px] text-white leading-[18px] transition-transform transform hover:scale-[101%]"
            >
              {t("product_details.button_buy")}
            </button>
          </div>
          <p className="text-[16px] text-customGray leading-[28px] tracking-[0.6px]">
            {t(product.description || "product_details.default_description")}
          </p>
        </div>
        <div className="absolute left-0 bottom-0 w-screen">
          <hr className="border-t border-gray-200" />
        </div>
      </div>

      <SubsribeSection />
    </div>
  );
}
