import { PropsWithChildren } from "react";

export const ButtonSwiper = ({ children }: PropsWithChildren) => {
  return (
    <button type="button" className="bg-bg text-white text-4xl px-6 py-2 rounded-2xl hover:bg-white hover:text-bg transition-colors duration-300">
      {children}
    </button>
  );
};
