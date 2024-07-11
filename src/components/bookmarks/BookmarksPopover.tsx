import { forwardRef } from "react";
import { useBookmarksContext } from "../../hooks/useContextProviders";
import JobList from "../joblist/JobList";

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();

  return (
    <div ref={ref} className='bookmarks-popover'>
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>
  );
});

export default BookmarksPopover;
