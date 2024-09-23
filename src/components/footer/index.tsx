"use client";

import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative w-full flex justify-center">
      <div className="absolute left-0 top-0 w-screen">
        <hr className="border-t border-gray-200" />
      </div>
      <div className="px-[30px] md:px-[32px] lg:px-[50px] py-[10px] lg:py-[36px]  w-full flex items-center max-w-[1200px]">
        <p className="text-[10px] md:text-[11px] text-customGray leading-[19px] tracking-[0.7px]">
          {t("footer.copyrights")}
          <span className="inline-block mx-2">•</span>
          {t("footer.policy")}
        </p>
      </div>
    </footer>
  );
};
