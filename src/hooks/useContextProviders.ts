import { useContext } from "react";

import { BookmarksContext } from "../contexts/bookmarks/BookmarksContextProvider";
import { ActiveIdContext } from "../contexts/activeId/ActiveIdContextProvider";

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

/*
  The useActiveIdContext hook is responsible for getting the activeId context.
  It returns the activeId context.
*/

export const useActiveIdContext = () => {
  const context = useContext(ActiveIdContext);
  if (!context) {
    throw new Error(
      "useActiveId must be used within a ActiveIdContextProvider"
    );
  }
  return context;
};
