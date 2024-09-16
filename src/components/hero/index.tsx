"use client";

import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col">
      <div className="relative max-w-[1440px] min-h-[35rem] bg-no-repeat bg-center bg-cover bg-bgImage w-full h-full flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-overlay z-10"></div>
        <h1 className="relative z-20 text-white text-[48px] leading-[68px] tracking-[0.6px] mb-[10px]">
          {t("home.hero_title")}
        </h1>
        <p className="relative z-20 text-customWhite text-[18px] leading-[32px] tracking-[0.6px]">
          {t("home.hero_text")}
        </p>
      </div>
    </div>
  );
};
