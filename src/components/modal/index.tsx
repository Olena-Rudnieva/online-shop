"use client";

import { ReactNode, useEffect } from "react";
import CloseIcon from "../../../public/icons/cross.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 max-w-[400px] w-full relative">
        <button
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <CloseIcon className="cursor-pointer w-[20px] h-[20px]" />
        </button>

        {children}
      </div>
    </div>
  );
};
