import { LeftBar } from "@/widgets";
import { PropsWithChildren } from "react";

export const LeftBarLayout = ({ children }: PropsWithChildren) => {
  return <LeftBar>{children}</LeftBar>;
};
