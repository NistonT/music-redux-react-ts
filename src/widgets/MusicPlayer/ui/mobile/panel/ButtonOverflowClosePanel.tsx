import { closePanelMobile } from "@/features/leftBar/store/slice";
import { useDispatch } from "react-redux";

export const ButtonOverflowClosePanel = () => {
  const dispatch = useDispatch();

  const closePanel = () => {
    dispatch(closePanelMobile());
  };

  return (
    <>
      <button className="w-8/10 h-20 absolute top-0 z-10" onClick={closePanel} />
      <button className="w-full h-30 absolute -top-30 z-10" onClick={closePanel} />
    </>
  );
};
