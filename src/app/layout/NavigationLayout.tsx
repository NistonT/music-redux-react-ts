import { useLeftBar } from "@/entities/leftBar/hook/useLeftBar";
import { ButtonIconCustom } from "@/shared/ui";
import { LeftBar } from "@/widgets";
import { ArrowRight } from "lucide-react";
import { PropsWithChildren } from "react";
export const NavigationLayout = ({ children }: PropsWithChildren) => {
  const { leftBar, handleOpenLeftBar } = useLeftBar();

  return (
    <div className={`${leftBar && "flex w-full"}`}>
      {leftBar ? (
        <LeftBar />
      ) : (
        <ButtonIconCustom onClick={handleOpenLeftBar} type={"button"} className="absolute left-0 top-0 text-main-pink">
          <ArrowRight />
        </ButtonIconCustom>
      )}
      <div className={`${leftBar && "w-5/6"}`}>{children}</div>
    </div>
  );
};
