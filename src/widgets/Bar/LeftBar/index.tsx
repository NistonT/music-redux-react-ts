import { Logo } from "@/shared/ui";
import { NavigatorLeftBar } from "./ui";

export const LeftBar = () => {
  return (
    <div className="bg-bg w-1/6 border-r-4 border-main-pink">
      <div>
        <Logo />
      </div>

      <div>
        <NavigatorLeftBar />
      </div>
    </div>
  );
};
