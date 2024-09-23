"use client";

import { FeaturedProducts, ProductDetails } from "@/components";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useProductQuery } from "@/api/queries";
import { productsData } from "@/utils";

export default function SelectedProduct() {
  const { t } = useTranslation();
  const { id } = useParams();

  const { data: product, isLoading } = useProductQuery(Number(id));

  if (!product) {
    return <p>{t("product_details.not_found")}</p>;
  }

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <ProductDetails product={product} />
      <FeaturedProducts products={productsData} />
    </div>
  );
}
