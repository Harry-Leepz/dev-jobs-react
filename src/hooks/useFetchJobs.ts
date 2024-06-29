import { useState, useEffect } from "react";

import { BASE_API_URL } from "../lib/constants";
import { TJobItem } from "../lib/types";

/*
  The useFetchJobs hook is responsible for fetching job items from the API.
  It takes a searchText parameter and returns jobItems and isLoading.
*/

export default function useFetchJobs(searchText: string) {
  const [jobItems, setJobItems] = useState<TJobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;

    const fetchJobs = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
      const data = await response.json();
      setJobItems(data.jobItems);
      setIsLoading(false);
    };
    fetchJobs();
  }, [searchText]);

  return { jobItemsSliced, isLoading };
}