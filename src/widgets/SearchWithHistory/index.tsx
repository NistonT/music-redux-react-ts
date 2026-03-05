import { useClickOutside } from "@/shared/lib/hooks/useClickOutside";
import { SearchDefault } from "@/shared/ui";
import { useMemo, useRef, useState } from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const SearchWithHistory = ({ value, setValue, placeholder, className }: Props) => {
  const [searchHistory, setSearchHistory] = useState<string[]>(["ASD", "POP", "asdq", "dqwd"]);
  const [isModalSearchHistory, setModalSearchHistory] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const addToHistory = (query: string) => {
    setSearchHistory((prev) => {
      const exists = prev.includes(query);

      const updated = exists ? prev : [...prev, query];

      return updated.slice(-10);
    });
  };

  useClickOutside(containerRef, () => setModalSearchHistory(false));

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
    [searchHistory, setValue],
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
