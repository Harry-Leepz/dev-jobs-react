type ResultsCountProps = {
  results: number;
};

export default function ResultsCount({ results }: ResultsCountProps) {
  return (
    <p className='count'>
      <span className='u-bold'>{results}</span> results
    </p>
  );
}
