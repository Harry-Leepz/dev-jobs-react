import { useQueries } from "@tanstack/react-query";

import { handleError } from "../lib/utils";
import { fetchJobItem } from "./useFetchJobDetails";

export function useFetchJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((jobitem) => jobitem !== undefined);
  const isLoading = results.some((result) => result.isLoading);

  return { jobItems, isLoading } as const;
}
