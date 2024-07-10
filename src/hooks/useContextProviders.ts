import { useContext } from "react";
import { BookmarksContext } from "../contexts/bookmarks/BookmarksContextProvider";

/*
  The useBookmarksContext hook is responsible for getting the bookmarks context.
  It returns the bookmarks context.
*/

export function useBookmarksContext() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error(
      "useBookmarksContext must be used within a BookmarksContextProvider"
    );
  }
  return context;
}
