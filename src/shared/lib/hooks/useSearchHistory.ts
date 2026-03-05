import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

export const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isModalSearchHistory, setModalSearchHistory] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const addToHistory = (query: string) => {
    setSearchHistory((prev) => {
      const exists = prev.includes(query);

      const updated = exists ? prev : [...prev, query];

      localStorage.setItem("search-history", JSON.stringify(updated));

      return updated.slice(-10);
    });
  };

  useClickOutside(containerRef, () => setModalSearchHistory(false));

  useEffect(() => {
    const stored = localStorage.getItem("search-history");

    if (stored !== null) {
      try {
        setSearchHistory(JSON.parse(stored));
      } catch {
        localStorage.removeItem("search-history");
      }
    }
  }, []);

  return { searchHistory, setSearchHistory, isModalSearchHistory, setModalSearchHistory, addToHistory, containerRef };
};
