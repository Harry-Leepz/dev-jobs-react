import { useState, useRef } from "react";

import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useOnClickOutside([popoverRef, buttonRef], () => setIsOpen(false));

  const onOpenClickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section>
      <button
        ref={buttonRef}
        onClick={onOpenClickHandler}
        className='bookmarks-btn'
      >
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}
