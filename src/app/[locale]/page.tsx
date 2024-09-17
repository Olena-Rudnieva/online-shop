"use client";

import { useProductsQuery } from "@/api/queries";
import { FeaturedProducts, Hero, SubsribeSection } from "@/components";

export default function Home() {
  const { data: products, isLoading } = useProductsQuery();

  return (
    <main className="flex flex-col">
      <Hero />
      <FeaturedProducts products={products} />
      <SubsribeSection />
    </main>
  );
}
