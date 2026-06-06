import type { RootState } from "@/app/store/store";
import { toggleLeftBarMobile } from "@/features/leftBar/store/slice";
import { ArrowRight, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Navigators } from "./Navigators";

export const LeftBarMobile = () => {
  const isLeftBarMobileSelector = useSelector((state: RootState) => state.leftBar.isLeftBarMobile);

  const dispatch = useDispatch();

  const toggleLeftBar = () => {
    dispatch(toggleLeftBarMobile());
  };

  return (
    <>
      {isLeftBarMobileSelector && (
        <aside className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-bg z-50 p-6 shadow-lg overflow-y-auto">
          <div className="mt-4">
            <Navigators />
          </div>

          <div className="absolute right-4 top-4">
            <button type="button" className="text-white" onClick={toggleLeftBar}>
              <X className="w-10 h-10" />
            </button>
          </div>
        </aside>
      )}

      {!isLeftBarMobileSelector && (
        <div className="fixed left-4 top-4 z-50">
          <button type="button" className="text-white" onClick={toggleLeftBar}>
            <ArrowRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </>
  );
};
