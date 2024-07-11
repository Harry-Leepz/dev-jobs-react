import JobListItem from "./JobListItem";
import Spinner from "../shared/Spinner";

import {
  useActiveIdContext,
  useJobDataContext,
} from "../../hooks/useContextProviders";

export default function JobList() {
  const { activeId } = useActiveIdContext();
  const { jobItemsSliced, isLoading } = useJobDataContext();

  return (
    <ul className='job-list'>
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItemsSliced.map((jobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}
