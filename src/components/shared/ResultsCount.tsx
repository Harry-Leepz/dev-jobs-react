import { useJobDataContext } from "../../hooks/useContextProviders";

export default function ResultsCount() {
  const { totalNumberOfresults } = useJobDataContext();
  return (
    <p className='count'>
      <span className='u-bold'>{totalNumberOfresults}</span> results
    </p>
  );
}
