import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import CloseIcon from "../../../../../public/icons/cross.svg";
import { HeaderNavigation } from "../headerNavigation";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filter?: boolean;
}

export const Drawer = ({ isOpen, onClose, filter }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOrientationChange = () => {
      onClose();
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex justify-end transform ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } transition-all duration-500`}
    >
      <div
        className={`bg-white h-full w-[300px] shadow-md transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={drawerRef}
      >
        <div className="p-[24px] h-full flex flex-col justify-between">
          <div>
            <div className="flex flex-col gap-[60px]">
              <div className="w-full flex justify-end">
                <CloseIcon
                  className="cursor-pointer w-[20px] h-[20px]"
                  onClick={onClose}
                />
              </div>

              {filter ? (
                <div className="flex flex-col gap-[30px]">
                  <p>{t("catalog.filter_sort")}:</p>
                  <div className="flex flex-col gap-[20px] text-[14px]">
                    <p>{t("catalog.availability")}</p>
                    <p>{t("catalog.price")}</p>
                  </div>
                </div>
              ) : (
                <div>
                  <HeaderNavigation
                    sx="flex-col justify-start !items-start"
                    onClose={onClose}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
