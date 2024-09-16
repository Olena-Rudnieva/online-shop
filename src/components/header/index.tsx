"use client";

import Link from "next/link";
import Image from "next/image";

import { useCallback, useState } from "react";
import { HeaderNavigation } from "./components";

export const Header = () => {
  return (
    <header className="w-full flex justify-center">
      <div className="px-[30px] md:px-[32px] lg:px-[50px] py-[10px] lg:py-[20px]  w-full flex justify-between items-center max-w-[1200px]">
        <HeaderNavigation sx="lg:flex hidden" />

        <Link href="/">
          <p className="text-[24px] text-customGray tracking-[0.6px]">Logo</p>
        </Link>
        <Image src="/icons/cart.svg" alt="Cart Icon" width={44} height={44} />
      </div>
    </header>
  );
};
