"use client";

import { useProductsQuery } from "@/api/queries";
import { ProductsSection, SubsribeSection } from "@/components";

export default function Products() {
  const { data: products, isLoading } = useProductsQuery();
  return (
    <main className="flex flex-col">
      <ProductsSection products={products} />
    </main>
  );
}
