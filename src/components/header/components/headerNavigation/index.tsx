import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

interface HeaderNavigationProps {
  sx?: string;
  onClose?: () => void;
}

export const HeaderNavigation = ({ sx, onClose }: HeaderNavigationProps) => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <div className={`flex gap-[40px] md:gap-[24px] items-center ${sx}`}>
      <Link
        href="/"
        className={`text-customGray text-[18px] md:text-[14px] leading-[20px] tracking-[0.6px] hover:underline underline-offset-4 ${
          pathname === "/" ? "md:underline" : ""
        }`}
        onClick={onClose}
      >
        {t("navigation.home")}
      </Link>
      <Link
        href="/products"
        className={`text-customGray text-[18px] md:text-[14px] leading-[20px] tracking-[0.6px] hover:underline underline-offset-4 ${
          pathname === "/products" ? "md:underline" : ""
        }`}
        onClick={onClose}
      >
        {t("navigation.catalog")}
      </Link>
    </div>
  );
};
