"use client";

import { Product } from "@/api";
import { useTranslation } from "react-i18next";
import Tick from "../../../../../public/icons/tick.svg";
import { Button } from "@/components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AddToCartModalProps {
  product: Product;
  quantity: number;
}

export const AddToCartModal = ({ product, quantity }: AddToCartModalProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleOpenCart = () => {
    router.push("/cart");
  };

  return (
    <div className="p-[20px]">
      <div className="flex gap-[8px] justify-start items-baseline">
        <Tick className="w-[16px] h-[16px]" />
        <h3 className="text-lg font-bold mb-4">
          {t("modal.cart_modal_title")}
        </h3>
      </div>

      <div className="flex gap-4 mb-4">
        <img
          src={product.media[0]}
          alt={product.title}
          className="w-[80px] h-[80px] object-contain"
        />
        <div>
          <h4 className="text-sm font-medium mb-[8px]">{product.title}</h4>
          <p className="text-xs text-gray-500 mb-[8px]">₴{product.price}</p>
          <p className="text-xs text-gray-500">
            {t("modal.quantity")} {quantity}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] mb-[20px]">
        <Button onClick={handleOpenCart} className="w-full hover:border-black">
          {t("modal.view_cart")}
        </Button>
        <Button
          className="bg-customDarkGray text-white w-full hover:bg-customDarkGrayDark"
          onClick={() => {}}
        >
          {t("modal.check_out")}
        </Button>
      </div>
      <Link href="/products">
        <p className="text-[12px] text-customGray tracking-[0.6px] text-center underline underline-offset-4">
          {t("cart.continue_shopping")}
        </p>
      </Link>
    </div>
  );
};
