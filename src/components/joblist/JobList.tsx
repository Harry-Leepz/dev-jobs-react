import JobListItem from "./JobListItem";
import Spinner from "../shared/Spinner";

import useActiveId from "../../hooks/useActiveId";

import { TJobItem } from "../../lib/types";

type JobListProps = {
  jobItems: TJobItem[];
  isLoading: boolean;
};

export default function JobList({ jobItems, isLoading }: JobListProps) {
  const activeId = useActiveId();

  return (
    <ul className='job-list'>
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={activeId === jobItem.id}
          />
        ))}
    </ul>
  );
}
