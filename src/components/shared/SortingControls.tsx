import { useJobDataContext } from "../../hooks/useContextProviders";

export default function SortingControls() {
  const { sortBy, onSortByChangeHandler } = useJobDataContext();

  return (
    <section className='sorting'>
      <i className='fa-solid fa-arrow-down-short-wide'></i>

      <SortingControlsButton
        onClick={() => onSortByChangeHandler("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingControlsButton>

      <SortingControlsButton
        onClick={() => onSortByChangeHandler("recent")}
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
