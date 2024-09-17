"use client";

import { FeaturedProducts, Hero, SubsribeSection } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <FeaturedProducts />
      <SubsribeSection />
    </main>
  );
}
