import { TSortingOption } from "../../lib/types";

type SortingControlsProps = {
  onClick: (newSortByOption: TSortingOption) => void;
  sortBy: string;
};

export default function SortingControls({
  onClick,
  sortBy,
}: SortingControlsProps) {
  return (
    <section className='sorting'>
      <i className='fa-solid fa-arrow-down-short-wide'></i>

      <SortingControlsButton
        onClick={() => onClick("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingControlsButton>

      <SortingControlsButton
        onClick={() => onClick("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingControlsButton>
    </section>
  );
}

// -------------------------------------------------------------------------

type SortingControlsButtonProps = {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
};

function SortingControlsButton({
  onClick,
  isActive,
  children,
}: SortingControlsButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--recent ${
        isActive && "sorting__button--active"
      }`}
    >
      {children}
    </button>
  );
}
