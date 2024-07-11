import { useContext } from "react";

import { BookmarksContext } from "../contexts/bookmarks/BookmarksContextProvider";
import { ActiveIdContext } from "../contexts/activeId/ActiveIdContextProvider";
import { SearchContext } from "../contexts/search/SearchTextContextProvider";
import { JobDataContext } from "../contexts/jobData/JobDataContextProvider";

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

/*
  The useSearchTextContext hook is responsible for getting the search text context.
  It returns the search text context.
*/

export const useSearchTextContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchTextContext must be used within a SearchTextContextProvider"
    );
  }
  return context;
};

/*
  The useJobDataContext hook is responsible for getting the job data context.
  It returns the job data context.
*/

export const useJobDataContext = () => {
  const context = useContext(JobDataContext);
  if (!context) {
    throw new Error(
      "useJobDataContext must be used within a JobDataContextProvider"
    );
  }
  return context;
};
