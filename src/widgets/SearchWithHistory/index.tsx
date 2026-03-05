import { useSearchHistory } from "@/shared/lib/hooks/useSearchHistory";
import { SearchDefault } from "@/shared/ui";
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
          key={h}
          onClick={() => {
            setValue(h);
            setModalSearchHistory(false);
          }}
        >
          {h}
        </div>
      )),
    [searchHistory, setValue, setModalSearchHistory],
  );

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <div>
        <SearchDefault
          value={value}
          setValue={setValue}
          className={`absolute`}
          placeholder={placeholder}
          setSearchHistory={addToHistory}
          setModalSearchHistory={setModalSearchHistory}
        />
      </div>

      {isModalSearchHistory && searchHistory.length > 0 && (
        <div className="absolute z-30">
          <div>{history}</div>
          {searchHistory.length > 0 && <button onClick={() => setSearchHistory([])}>Clear</button>}
        </div>
      )}
    </div>
  );
};
