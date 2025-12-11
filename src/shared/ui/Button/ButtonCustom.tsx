import type { TButtonType } from "@/shared/types";
import { ReactNode } from "react";

type Props = {
  type: TButtonType;
  children: ReactNode;
  className?: string;
};

export const ButtonCustom = ({ type, children, className }: Props) => {
  return (
    <button type={type} className={`text-lg font-medium px-6 py-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
};
