import { History } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  setActive: () => void;
};

export const ItemSearchHistory = ({ children, setActive }: Props) => {
  return (
    <div className="bg-bg flex px-2 items-center border-2 border-transparent hover:border-white py-1" onClick={setActive}>
      <History />
      <div className="text-xl font-mono px-2">{children}</div>
    </div>
  );
};
