"use client";

import { FeaturedProducts, Hero, SubsribeSection } from "@/components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <FeaturedProducts />
        <SubsribeSection />
      </main>
    </div>
  );
}
