"use client";

import { useTranslation } from "react-i18next";

export const Filters = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center">
      <div className="px-[30px] md:px-[32px] lg:px-[50px] py-[10px] lg:py-[36px]  w-full flex items-center max-w-[1200px]">
        <p className="text-[11px] text-customGray leading-[19px] tracking-[0.7px] mb-[30px]">
          {t("catalog.filters")}
        </p>
      </div>
    </div>
  );
};
