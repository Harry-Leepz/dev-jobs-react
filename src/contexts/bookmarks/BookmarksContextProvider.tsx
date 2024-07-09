import { createContext, useState } from "react";

type BookmarksContextProviderProps = {
  children: React.ReactNode;
};

type BookmarksContext = {
  bookmarkedIds: number[];
  toggleBookmarkHandler: (id: number) => void;
};

export const BookmarksContext = createContext<BookmarksContext | null>(null);

export default function BookmarksContextProvider({
  children,
}: BookmarksContextProviderProps) {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);
  console.log(bookmarkedIds);

  const toggleBookmarkHandler = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider value={{ bookmarkedIds, toggleBookmarkHandler }}>
      {children}
    </BookmarksContext.Provider>
  );
}