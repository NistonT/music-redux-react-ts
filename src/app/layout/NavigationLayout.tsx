import { useLeftBar } from "@/entities/leftBar/hook/useLeftBar";
import { ButtonIconCustom } from "@/shared/ui";
import { LeftBar } from "@/widgets";
import { ArrowRight } from "lucide-react";
import { PropsWithChildren } from "react";
export const NavigationLayout = ({ children }: PropsWithChildren) => {
  const { leftBar, handleOpenLeftBar } = useLeftBar();

  return (
    <>
      {leftBar ? (
        <div className="flex w-full">
          <LeftBar />
          <div className="w-5/6">{children}</div>
        </div>
      ) : (
        <div>
          <ButtonIconCustom onClick={handleOpenLeftBar} type={"button"} className="absolute left-0 top-0 text-main-pink">
            <ArrowRight />
          </ButtonIconCustom>
          {children}
        </div>
      )}
    </>
  );
};
