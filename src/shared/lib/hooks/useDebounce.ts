import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 300): string => {
  const [debounce, setDebounce] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return function () {
      clearTimeout(handler);
    };
  }, [value, debounce, delay]);

  return debounce;
};
