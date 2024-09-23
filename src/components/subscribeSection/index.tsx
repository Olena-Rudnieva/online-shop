"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useSubscribe } from "./hooks";

export const SubsribeSection = () => {
  const {
    email,
    setEmail,
    isFocused,
    handleSubscribe,
    handleFocus,
    handleBlur,
  } = useSubscribe();
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex justify-center">
      <div className="px-[15px] md:px-[32px] lg:px-[50px] pt-[20px] lg:pt-[36px] pb-[30px] lg:pb-[50px] flex flex-col justify-centerc items-center  w-full max-w-[1200px]">
        <h2 className="text-foreground text-[16px] md:text-[18px] leading-[23px] tracking-[0.6px] mb-[20px] text-center">
          {t("home.subscribe")}
        </h2>
        <div className="relative flex items-center w-[220px] md:w-[300px] lg:w-[400px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full pt-[15px] pl-[15px] pb-[15px] pr-[50px] bg-transparent border border-gray-500 text-[16px] leading-[20px] text-customDarkGray focus:outline-none focus:border-black focus:border-2  transition-all"
          />

          <label
            className={`absolute left-[16px] top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ${
              isFocused || email
                ? "text-[10px] top-[4px] -translate-y-[-1px]"
                : "text-[14px]"
            }`}
          >
            Email
          </label>

          <button
            onClick={handleSubscribe}
            className="absolute right-[10px] bg-transparent border-none cursor-pointer"
          >
            <Image
              src="/icons/arrowLeft.svg"
              alt="Subscribe"
              width={15}
              height={24}
              className="hover:scale-105 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
