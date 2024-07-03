import { useQuery } from "@tanstack/react-query";

import { BASE_API_URL } from "../lib/constants";

/*
  The useFetchJobDetails hook is responsible for fetching job details from the API.
  It takes an id parameter and returns jobDetails and loading.
*/

const fetchJobDetails = async (id: number) => {
  if (!id) return;
  const response = await fetch(`${BASE_API_URL}/${id}`);
  const data = await response.json();
  return data.jobItem;
};

export default function useFetchJobDetails(id: number | null) {
  const { data, isLoading } = useQuery(
    ["jobDetails", id],
    () => (id ? fetchJobDetails(id) : null),
    {
      staleTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id), // only fetch when id is truthy
      onError: () => {},
    }
  );
  return { jobDetails: data, isLoading };
}
