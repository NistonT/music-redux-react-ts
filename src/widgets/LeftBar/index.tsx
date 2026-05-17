import { PropsWithChildren } from "react";
import { Navigators } from "./ui";
export const LeftBar = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex mx-auto w-full bg-bg">
      <div className="fixed left-0 top-0 w-2/12 h-full p-4 bg-bg z-10">
        <div className="mt-8">
          <Navigators />
        </div>
      </div>
      <div className="w-10/12 text-white ml-[16.66%]">{children}</div>
    </div>
  );
};
