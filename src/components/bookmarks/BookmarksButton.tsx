import { useState } from "react";

import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section>
      <button onClick={onOpenClickHandler} className='bookmarks-btn'>
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover />}
    </section>
  );
}
