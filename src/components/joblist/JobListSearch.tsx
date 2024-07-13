import JobList from "./JobList";

import { useJobDataContext } from "../../hooks/useContextProviders";

export default function JobListSearch() {
  const { jobItemsSliced, isLoading } = useJobDataContext();
  return <JobList jobItems={jobItemsSliced} isLoading={isLoading} />;
}
