import { createContext, useState } from "react";

import useDebounce from "../../hooks/useDebounce";

type SearchContextType<T> = {
  searchText: T;
  debouncedSearchText: T;
  onSearchTextChange: (newSearchText: string) => void;
};

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContext = createContext<SearchContextType<string> | null>(
  null
);

export default function SearchTextContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText);

  const onSearchTextChange = (newSearchText: string) => {
    setSearchText(newSearchText);
  };

  return (
    <SearchContext.Provider
      value={{ searchText, debouncedSearchText, onSearchTextChange }}
    >
      {children}
    </SearchContext.Provider>
  );
}
