import { PropsWithChildren } from "react";
import { LeftBarDesktop, LeftBarMobile } from "./ui";
export const LeftBar = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex mx-auto w-full bg-bg min-h-screen overflow-hidden">
      <LeftBarDesktop />

      <LeftBarMobile />

      <main className="w-full text-white lg:ml-[16.66%]">{children}</main>
    </div>
  );
};
