import { useQuery } from "@tanstack/react-query";

import { BASE_API_URL } from "../lib/constants";
import { TJobItem } from "../lib/types";
import { handleError } from "../lib/utils";

type fetchJobsApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: TJobItem[];
};

/*
  The useFetchJobs hook is responsible for fetching job items from the API.
  It takes a searchText parameter and returns jobItems and isLoading.
*/

const fetchJobs = async (searchText: string): Promise<fetchJobsApiResponse> => {
  if (searchText.trim() === "") {
    return { public: false, sorted: false, jobItems: [] };
  }
  const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.description) || "Something went wrong";
  }
  const data = await response.json();
  return data;
};

export default function useFetchJobs(searchText: string) {
  const { data, isInitialLoading } = useQuery(
    ["jobs", searchText],
    () => (searchText ? fetchJobs(searchText) : null),
    {
      staleTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText), // only fetch when id is truthy
      onError: handleError,
    }
  );

  return { jobItems: data?.jobItems, isLoading: isInitialLoading } as const;
}
