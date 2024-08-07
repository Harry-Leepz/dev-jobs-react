import { useEffect, useState } from "react";

/*
  The useDebounce hook is responsible for debouncing a value.
  It returns the debounced value.
  Parameters:
  value: The value to debounce.
  delay: The delay in milliseconds.
*/

export default function useDebounce<T>(value: T, delay = 1000): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
