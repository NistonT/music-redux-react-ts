import { PropsWithChildren } from "react";

export const TextHeader = ({ children }: PropsWithChildren) => {
  return <h1 className="text-6xl italic font-extrabold text-white text-shadow-sm cursor-default select-none">{children}</h1>;
};
