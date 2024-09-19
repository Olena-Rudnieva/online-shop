"use client";

import Link from "next/link";
import Image from "next/image";
import { Drawer, HeaderNavigation } from "./components";
import MobileMenu from "../../../public/icons/menu.svg";
import { useCallback, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerOpenFn = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const drawerCloseFn = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="w-full flex justify-center">
      <div className="px-[30px] md:px-[32px] lg:px-[50px] py-[10px] lg:py-[20px]  w-full flex justify-between items-center max-w-[1200px]">
        <HeaderNavigation sx="md:flex hidden" />
        <MobileMenu
          className="h-[20px] w-[20px] cursor-pointer md:hidden"
          onClick={drawerOpenFn}
        />

        <Link href="/">
          <p className="text-[24px] text-customGray tracking-[0.6px]">Logo</p>
        </Link>
        <Image src="/icons/cart.svg" alt="Cart Icon" width={44} height={44} />
      </div>
      <Drawer isOpen={isOpen} onClose={drawerCloseFn} />
    </header>
  );
};
