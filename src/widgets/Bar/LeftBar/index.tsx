import { useLeftBar } from "@/entities/leftBar/hook/useLeftBar";
import { ButtonIconCustom, Logo } from "@/shared/ui";
import { ArrowLeft } from "lucide-react";
import { NavigatorLeftBar } from "./ui";

export const LeftBar = () => {
  const { handleCloseLeftBar } = useLeftBar();

  return (
    <div className="bg-bg w-1/6 border-r-4 border-main-pink relative">
      <div>
        <Logo />
      </div>

      <div>
        <NavigatorLeftBar />
      </div>

      <div className="absolute top-0 right-0">
        <ButtonIconCustom onClick={handleCloseLeftBar} className="text-main-pink" type={"button"}>
          <ArrowLeft />
        </ButtonIconCustom>
      </div>
    </div>
  );
};
