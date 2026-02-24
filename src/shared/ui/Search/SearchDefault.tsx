import { Search } from "lucide-react";

type Props = {
  className?: string;
};

export const SearchDefault = ({ className }: Props) => {
  return (
    <div
      className={`relative w-full max-w-2xl rounded-full bg-bg border border-bg-active overflow-hidden focus-within:ring-2 focus-within:ring-primary ${className}`}
    >
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5 pointer-events-none" />
      <input type="text" className="w-full h-10 pl-12 pr-4 bg-transparent text-white placeholder:text-white/50 outline-none" />
    </div>
  );
};
