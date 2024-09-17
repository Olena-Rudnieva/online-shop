import Link from "next/link";
import { useTranslation } from "react-i18next";

export const HeaderNavigation = ({ sx }: { sx?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex gap-[24px] items-center ${sx}`}>
      <Link
        href="/"
        className="text-customGray  text-[14px] leading-[18px] tracking-[0.6px]"
      >
        {t("navigation.home")}
      </Link>
      <Link
        href="/products"
        className="text-customGray text-[14px] leading-[18px] tracking-[0.6px]"
      >
        {t("navigation.catalog")}
      </Link>
    </div>
  );
};
