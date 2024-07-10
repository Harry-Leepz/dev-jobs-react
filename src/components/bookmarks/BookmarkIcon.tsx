import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../../hooks/useContextProviders";

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, toggleBookmarkHandler } = useBookmarksContext();

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
