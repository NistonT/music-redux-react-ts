import { PropsWithChildren } from "react";
export const LeftBar = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>LeftBar</div>
      <div>{children}</div>
    </div>
  );
};
