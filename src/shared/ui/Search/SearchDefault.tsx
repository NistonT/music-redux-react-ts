import { Search } from "lucide-react";

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  className?: string;
  setSearchHistory: (value: string) => void;
  onClick?: () => void;
  setModalSearchHistory: (value: boolean) => void;
};

export const SearchDefault = ({ className, value, setValue, placeholder, setSearchHistory, onClick, setModalSearchHistory }: Props) => {
  return (
    <div
      className={`relative w-full rounded-full bg-bg border border-bg-active overflow-hidden focus-within:ring-2 focus-within:ring-primary ${className}`}
    >
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5 pointer-events-none" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type="text"
        className="w-full h-10 pl-12 pr-4 bg-transparent text-white placeholder:text-white/50 outline-none"
        onBlur={(e) => {
          const trimmedValue = e.target.value.trim();

          if (trimmedValue) {
            setSearchHistory(trimmedValue);
          }
        }}
        onClick={onClick}
        onFocus={() => setModalSearchHistory(true)}
      />
    </div>
  );
};
