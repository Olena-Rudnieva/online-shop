"use client";

import Link from "next/link";
import Image from "next/image";
import { Drawer, HeaderNavigation } from "./components";
import MobileMenu from "../../../public/icons/menu.svg";
import { useCallback, useEffect, useState } from "react";
import { useCart } from "@/context";
import { IoBagOutline, IoBagHandleOutline } from "react-icons/io5";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const drawerOpenFn = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const drawerCloseFn = useCallback(() => {
    setIsOpen(false);
  }, []);

  const isCartEmpty = cart.length === 0;
  const cartItemCount = cart.length;

  const cartIconSrc = isCartEmpty
    ? "/icons/cart.svg"
    : "/icons/cartWithProduct.svg";

  // const cartIconSrc = isCartEmpty ? <IoBagOutline /> : <IoBagHandleOutline />;

  return (
    <header className="relative w-full flex justify-center">
      <div className="px-[30px] md:px-[32px] lg:px-[50px] py-[10px] lg:py-[20px]  w-full flex justify-between items-center max-w-[1200px]">
        <HeaderNavigation sx="md:flex hidden" />
        <MobileMenu
          className="h-[20px] w-[20px] cursor-pointer md:hidden"
          onClick={drawerOpenFn}
        />

        <Link href="/">
          <p className="text-[24px] text-customGray tracking-[0.6px]">Logo</p>
        </Link>
        <div className="relative">
          <Link href="/cart">
            <img src={cartIconSrc} alt="Cart Icon" width={44} height={44} />
          </Link>
          {/* <Image src={cartIconSrc} alt="Cart Icon" width={44} height={44} /> */}
          {/* {cartIconSrc} */}
          {cartItemCount > 0 && (
            <span className="absolute bottom-[8px] right-[6px] bg-customDarkGray text-white text-[8px] rounded-full w-[16px] h-[16px] flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
      <Drawer isOpen={isOpen} onClose={drawerCloseFn} />
      <div className="absolute left-0 bottom-0 w-screen">
        <hr className="border-t border-gray-200" />
      </div>
    </header>
  );
};
