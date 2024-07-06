import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
  onClick: (direction: "next" | "previous") => void;
  currentPage: number;
  totalNumberOfPages: number;
};

export default function PaginationControls({
  totalNumberOfPages,
  onClick,
  currentPage,
}: PaginationControlsProps) {
  return (
    <section className='pagination'>
      {currentPage > 1 && (
        <PaginationControlButton
          direction='previous'
          onClick={onClick}
          currentPage={currentPage}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationControlButton
          direction='next'
          onClick={onClick}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

// ------------------------------------------------------------

type PaginationControlButtonProps = {
  direction: "next" | "previous";
  onClick: (direction: "next" | "previous") => void;
  currentPage: number;
};

function PaginationControlButton({
  direction,
  onClick,
  currentPage,
}: PaginationControlButtonProps) {
  return (
    <button
      onClick={() => onClick(direction)}
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
