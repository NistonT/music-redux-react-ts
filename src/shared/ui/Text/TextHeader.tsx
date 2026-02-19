import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const TextHeader = ({ children, className }: Props) => {
  return <h1 className={`text-6xl italic font-extrabold text-white text-shadow-sm cursor-default select-none ${className}`}>{children}</h1>;
};
