import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const ButtonSwiper = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-bg text-white text-4xl px-6 py-2 rounded-2xl hover:bg-white cursor-pointer select-none hover:text-bg transition-colors duration-300"
    >
      {children}
    </button>
  );
};
