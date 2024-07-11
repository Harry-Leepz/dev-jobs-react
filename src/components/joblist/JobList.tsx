import JobListItem from "./JobListItem";
import Spinner from "../shared/Spinner";

import { useActiveIdContext } from "../../hooks/useContextProviders";

import { TJobItem } from "../../lib/types";

type JobListProps = {
  jobItems: TJobItem[];
  isLoading: boolean;
};

export default function JobList({ jobItems, isLoading }: JobListProps) {
  const { activeId } = useActiveIdContext();

  return (
    <ul className='job-list'>
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}
