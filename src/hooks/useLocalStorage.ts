import { useEffect, useState } from "react";

/*
  The useLocalStorage hook is responsible for persisting a value to local storage.
  It returns the value and a function to update the value.
  Parameters:
  key: The key to use in local storage.
  initialValue: The initial value.
*/

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)!) || JSON.stringify(initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
