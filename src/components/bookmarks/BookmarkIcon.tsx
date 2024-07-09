import { useContext } from "react";
import { BookmarksContext } from "../../contexts/bookmarks/BookmarksContextProvider";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, toggleBookmarkHandler } = useContext(BookmarksContext);

  const preventDefault = (e: React.MouseEvent) => {
    toggleBookmarkHandler(id);
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <button onClick={preventDefault} className='bookmark-btn'>
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) && "filled"}`}
      />
    </button>
  );
}
