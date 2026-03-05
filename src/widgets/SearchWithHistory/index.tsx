import { useSearchHistory } from "@/shared/lib/hooks/useSearchHistory";
import { SearchDefault } from "@/shared/ui";
import { History } from "lucide-react";
import { useMemo } from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const SearchWithHistory = ({ value, setValue, placeholder, className }: Props) => {
  const { searchHistory, setSearchHistory, isModalSearchHistory, setModalSearchHistory, addToHistory, containerRef } = useSearchHistory();

  const history = useMemo(
    () =>
      searchHistory.map((h) => (
        <div
          className="bg-bg flex px-2 items-center border-2 border-transparent hover:border-white py-1"
          key={h}
          onClick={() => {
            setValue(h);
            setModalSearchHistory(false);
          }}
        >
          <History />
          <div className="text-xl font-mono px-2">{h}</div>
        </div>
      )),
    [searchHistory, setValue, setModalSearchHistory],
  );

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      <div className="px-2">
        <SearchDefault
          value={value}
          setValue={setValue}
          className={``}
          placeholder={placeholder}
          setSearchHistory={addToHistory}
          setModalSearchHistory={setModalSearchHistory}
        />
      </div>

      {isModalSearchHistory && searchHistory.length > 0 && (
        <div className="absolute z-30 w-full px-4 pb-4">
          <div
            className="w-full max-h-44 overflow-y-scroll"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {history}
          </div>
          {searchHistory.length > 0 && (
            <button
              className="text-xl font-mono px-2 bg-bg w-full border-2 border-transparent hover:border-white"
              onClick={() => setSearchHistory([])}
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
};
