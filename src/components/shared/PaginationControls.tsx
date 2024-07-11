import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import { TPageDirection } from "../../lib/types";
import { useJobDataContext } from "../../hooks/useContextProviders";

export default function PaginationControls() {
  const { totalNumberOfPages, currentPage, onPageChangeHandler } =
    useJobDataContext();

  return (
    <section className='pagination'>
      {currentPage > 1 && (
        <PaginationControlButton
          direction='previous'
          onClick={onPageChangeHandler}
          currentPage={currentPage}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationControlButton
          direction='next'
          onClick={onPageChangeHandler}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

// ------------------------------------------------------------

type PaginationControlButtonProps = {
  direction: TPageDirection;
  onClick: (direction: TPageDirection) => void;
  currentPage: number;
};

function PaginationControlButton({
  direction,
  onClick,
  currentPage,
}: PaginationControlButtonProps) {
  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    direction: TPageDirection
  ) => {
    // remove blur effect once clicked
    onClick(direction);
    event.currentTarget.blur();
  };

  return (
    <button
      onClick={(e) => onClickHandler(e, direction)}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon /> Page {currentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          Page {currentPage + 1} <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
