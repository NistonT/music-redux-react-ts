import { SEARCH_HISTORY } from "@/shared/constants/localstorage";
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

      localStorage.setItem(SEARCH_HISTORY, JSON.stringify(updated));

      return updated.slice(-10);
    });
  };

  useClickOutside(containerRef, () => setModalSearchHistory(false));

  useEffect(() => {
    const stored = localStorage.getItem(SEARCH_HISTORY);

    if (stored !== null) {
      try {
        setSearchHistory(JSON.parse(stored));
      } catch {
        localStorage.removeItem(SEARCH_HISTORY);
      }
    }
  }, []);

  return { searchHistory, setSearchHistory, isModalSearchHistory, setModalSearchHistory, addToHistory, containerRef };
};
