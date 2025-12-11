import { TButtonType } from "@/shared/types";
import { ReactNode } from "react";

type Props = {
  type: TButtonType;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const ButtonIconCustom = ({ type, children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} type={type} className={`text-lg font-medium p-4 rounded-lg ${className}`}>
      {children}
    </button>
  );
};
