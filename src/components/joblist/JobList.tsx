import JobListItem from "./JobListItem";

import { TJobItem } from "../../lib/types";

type JobListProps = {
  jobItems: TJobItem[];
};

export default function JobList({ jobItems }: JobListProps) {
  return (
    <ul className='job-list'>
      {jobItems.map((jobItem) => (
        <JobListItem key={jobItem.id} jobItem={jobItem} />
      ))}
    </ul>
  );
}
