import type { TInputType } from "@/shared/types";
import { ReactNode } from "react";

type Props = {
  type: TInputType;
  placeholder?: string;
  className?: string;
  icon?: ReactNode;
};

export const InputCustom = ({ type = "text", placeholder, className, icon }: Props) => {
  return (
    <div className="flex items-center text-white bg-bg-input py-1.5 px-2 gap-2 rounded-lg box-border w-full">
      {icon}
      <input type={type} placeholder={placeholder} className={`${className}`} />
    </div>
  );
};
