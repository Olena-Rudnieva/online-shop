"use client";

import { useProductsQuery } from "@/api/queries";
import {
  FeaturedProducts,
  Hero,
  ReviewSection,
  SubsribeSection,
} from "@/components";
import { reviews } from "@/utils";

export default function Home() {
  const { data: products, isLoading } = useProductsQuery();

  return (
    <main className="flex flex-col">
      <Hero />
      <FeaturedProducts products={products} />
      <ReviewSection reviews={reviews} />
    </main>
  );
}
