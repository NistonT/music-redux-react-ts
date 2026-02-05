import { PropsWithChildren } from "react";
import { Navigators } from "./ui";
export const LeftBar = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex mx-auto w-full bg-bg">
      <div className="w-2/12 p-4">
        <div className="mt-8">
          <Navigators />
        </div>
      </div>
      <div className="w-10/12 text-white">{children}</div>
    </div>
  );
};
