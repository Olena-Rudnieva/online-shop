"use client";

import Link from "next/link";

// import Logo from "../../assets/icons/logo.svg?react";
// import { Drawer, HeaderNavigation } from "..";
// import { Link, useLocation } from "react-router-dom";
// import { useCallback, useState } from "react";
// import MobileMenu from "../../assets/icons/mobile-menu.svg?react";
// import { CallHeaderBlock } from "../CallHeaderBlock";

import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const drawerOpenFn = useCallback(() => {
  //     setIsOpen((prev) => !prev);
  //   }, []);

  //   const drawerCloseFn = useCallback(() => {
  //     setIsOpen(false);
  //   }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        className="py-[20px]"
        // className={`w-full flex justify-between items-center py-[37px]
        //   lg:px-[73px] px-[20px] 2xl:px-0 ${
        //     isApp && "lg:mb-[80px] mb-0px]"
        //   } max-w-[1440px]`}
      >
        <Link href="/">
          <p className="text-[24px] tracking-[0.6px]">Logo+</p>
        </Link>

        {/* <MobileMenu
          className="h-[40px] w-[40px] cursor-pointer lg:hidden"
          onClick={drawerOpenFn}
        /> */}
      </div>

      {/* <Drawer isOpen={isOpen} onClose={drawerCloseFn} mainContent /> */}
    </div>
  );
};
