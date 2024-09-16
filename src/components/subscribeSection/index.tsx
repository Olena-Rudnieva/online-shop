"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const SubsribeSection = () => {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { t } = useTranslation();

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!email) {
      setIsFocused(false);
    }
  };

  return (
    <div className="relative w-full flex justify-center">
      <div className="px-[30px] md:px-[32px] lg:px-[50px] pt-[20px] lg:pt-[36px] pb-[30px] lg:pb-[50px] flex flex-col justify-centerc items-center  w-full max-w-[1200px]">
        <h2 className="text-foreground text-[18px] leading-[23px] tracking-[0.6px] mb-[20px] text-center">
          {t("home.subscribe")}
        </h2>
        <div className="relative flex items-center w-full max-w-[400px]">
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
        <div className="absolute left-0 bottom-0 w-screen">
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
};
