import { useQuery } from "@tanstack/react-query";

import { BASE_API_URL } from "../lib/constants";
import { TJobDetails } from "../lib/types";
import { handleError } from "../lib/utils";

type JobDetailsApiresponse = {
  public: boolean;
  jobItem: TJobDetails;
};

/*
  The useFetchJobDetails hook is responsible for fetching job details from the API.
  It takes an id parameter and returns jobDetails and loading.
*/

export const fetchJobItem = async (
  id: number
): Promise<JobDetailsApiresponse> => {
  const response = await fetch(`${BASE_API_URL}/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.description);
  }
  const data = await response.json();
  return data;
};

export default function useFetchJobDetails(id: number | null) {
  const { data, isInitialLoading } = useQuery(
    ["job-item", id],
    () => (id ? fetchJobItem(id) : null),
    {
      staleTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id), // only fetch when id is truthy
      onError: handleError,
    }
  );
  const jobDetails = data?.jobItem;
  const isLoading = isInitialLoading;
  return { jobDetails, isLoading };
}
