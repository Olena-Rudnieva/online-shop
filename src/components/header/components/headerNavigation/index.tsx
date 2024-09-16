// import { useTranslation } from "react-i18next";
import Link from "next/link";
// import { useTranslation } from "react-i18next";

export const HeaderNavigation = ({ sx }: { sx?: string }) => {
  // const { t } = useTranslation("translate");

  return (
    <div className={`flex gap-[24px] items-center ${sx}`}>
      {/* here */}
      <Link
        href="/"
        className="text-customGray  text-[14px] leading-[18px] tracking-[0.6px]"
      >
        {/* {t("navigation.home")} */}
        Home
      </Link>
      <Link
        href="/about"
        className="text-customGray text-[14px] leading-[18px] tracking-[0.6px]"
      >
        {/* {t("navigation.catalog")} */}
        Catalog
      </Link>
    </div>
  );
};
