import { SEARCH_HISTORY } from "@/shared/constants/localstorage";
import { useSearchHistory } from "@/shared/lib/hooks/useSearchHistory";
import { SearchDefault } from "@/shared/ui";
import { useMemo } from "react";
import { ButtonClearSearchHistory, ItemSearchHistory } from "./ui";

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
      searchHistory.map((item) => (
        <ItemSearchHistory
          setActive={() => {
            setValue(item);
            setModalSearchHistory(false);
          }}
        >
          {item}
        </ItemSearchHistory>
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
            <ButtonClearSearchHistory
              clearHistory={() => {
                setSearchHistory([]);
                localStorage.removeItem(SEARCH_HISTORY);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
