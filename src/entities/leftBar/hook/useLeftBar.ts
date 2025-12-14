import type { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { changeBarToggle } from "../store/leftBarSlice";

export const useLeftBar = () => {
  const leftBar = useSelector((state: RootState) => state.leftBar.isBar);

  const dispatch = useDispatch();

  const handleToggleLeftBar = () => {
    dispatch(changeBarToggle({ value: !leftBar }));
  };

  const handleCloseLeftBar = () => {
    dispatch(changeBarToggle({ value: false }));
  };

  const handleOpenLeftBar = () => {
    dispatch(changeBarToggle({ value: true }));
  };

  return { leftBar, handleToggleLeftBar, handleCloseLeftBar, handleOpenLeftBar };
};
