import { useState, useEffect } from "react";

import { BASE_API_URL } from "../lib/constants";
import { TJobDetails } from "../lib/types";

/*
  The useFetchJobDetails hook is responsible for fetching job details from the API.
  It takes an id parameter and returns jobDetails.
*/

export default function useFetchJobDetails(id: number | null) {
  const [jobDetails, setJobDetails] = useState<TJobDetails | null >(null);

  useEffect(() => {
    if (!id) return;
    const fetchJobDetails = async () => {
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      setJobDetails(data.jobItem);
    };
    fetchJobDetails();
  }, [id]);

  return jobDetails
}