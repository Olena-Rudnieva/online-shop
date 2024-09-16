"use client";

import Link from "next/link";
// import Cart from "/icons/cart.svg";
import MobileMenu from "/icons/menu.svg";
import Image from "next/image";

// import Logo from "../../assets/icons/logo.svg?react";
// import { Drawer, HeaderNavigation } from "..";
// import { Link, useLocation } from "react-router-dom";
// import { useCallback, useState } from "react";
// import MobileMenu from "../../assets/icons/mobile-menu.svg?react";
// import { CallHeaderBlock } from "../CallHeaderBlock";

import { useCallback, useState } from "react";
import { HeaderNavigation } from "./components";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerOpenFn = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const drawerCloseFn = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="px-[30px] md:px-[32px] lg:px-[50px] py-[10px] lg:py-[20px]  w-full flex justify-between items-center max-w-[1200px]">
        <HeaderNavigation sx="lg:flex hidden" />

        {/* <div className="w-[44px] h-[44px] flex justify-center items-center">
          <MobileMenu
            className="h-[20px] w-[20px]  text-customGray cursor-pointer lg:hidden"
            onClick={drawerOpenFn}
          />
        </div> */}
        <Link href="/">
          <p className="text-[24px] text-customGray tracking-[0.6px]">Logo</p>
        </Link>
        <Image src="/icons/cart.svg" alt="Cart Icon" width={44} height={44} />
      </div>

      {/* <Drawer isOpen={isOpen} onClose={drawerCloseFn} mainContent /> */}
    </div>
  );
};
