import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  onClick,
  className = "",
  children,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-[12px] border border-gray-500 text-[15px] leading-[18px] transition-transform transform hover:scale-[102%] ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
