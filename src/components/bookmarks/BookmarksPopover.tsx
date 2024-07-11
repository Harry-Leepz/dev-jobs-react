import { forwardRef } from "react";
import { useBookmarksContext } from "../../hooks/useContextProviders";
import JobList from "../joblist/JobList";
import { createPortal } from "react-dom";

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();

  return createPortal(
    <div ref={ref} className='bookmarks-popover'>
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
