import { LeftBar } from "@/widgets";
import { PropsWithChildren } from "react";
export const NavigationLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <LeftBar />
      <div>{children}</div>
    </>
  );
};
