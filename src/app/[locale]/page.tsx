"use client";

import { FeaturedProducts, Hero, SubsribeSection } from "@/components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col">
      <Hero />
      <FeaturedProducts />
      <SubsribeSection />
    </main>
  );
}
