import { RefObject, useEffect } from "react";

export default function useOnClickOutside(
  refs: RefObject<HTMLElement>[],
  handler: () => void
) {
  useEffect(() => {
    const onClickHandler = (event: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(event.target as Node))) {
        handler();
      }
    };
    document.addEventListener("click", onClickHandler);

    return () => {
      document.removeEventListener("click", onClickHandler);
    };
  }, [refs, handler]);
}
