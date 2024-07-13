import { createContext, useMemo, useState } from "react";

import { useSearchTextContext } from "../../hooks/useContextProviders";
import useSearchQuery from "../../hooks/useSearchQuery";

import { TJobItem, TPageDirection, TSortingOption } from "../../lib/types";
import { RESULTS_PER_PAGE } from "../../lib/constants";

type JobDataContextType = {
  isLoading: boolean;
  currentPage: number;
  sortBy: TSortingOption;
  jobItemsSliced: TJobItem[];
  totalNumberOfresults: number;
  totalNumberOfPages: number;
  onPageChangeHandler: (direction: TPageDirection) => void;
  onSortByChangeHandler: (newSortByOption: TSortingOption) => void;
};

type JobDataContextProviderProps = {
  children: React.ReactNode;
};

export const JobDataContext = createContext<JobDataContextType | null>(null);

export default function JobDataContextProvider({
  children,
}: JobDataContextProviderProps) {
  const { debouncedSearchText } = useSearchTextContext();
  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<TSortingOption>("relevant");

  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])].sort((a, b) => {
        if (sortBy === "relevant") {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      }),
    [jobItems, sortBy]
  );

  const jobItemsSliced = useMemo(
    () =>
      jobItemsSorted?.slice(
        currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
      ) || [],
    [jobItemsSorted, currentPage]
  );

  const totalNumberOfresults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberOfresults / RESULTS_PER_PAGE;

  const onPageChangeHandler = (directon: TPageDirection) => {
    if (directon === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (directon === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const onSortByChangeHandler = (newSortByOption: TSortingOption) => {
    setCurrentPage(1);
    setSortBy(newSortByOption);
  };
  return (
    <JobDataContext.Provider
      value={{
        currentPage,
        sortBy,
        isLoading,
        jobItemsSliced,
        totalNumberOfresults,
        totalNumberOfPages,
        onPageChangeHandler,
        onSortByChangeHandler,
      }}
    >
      {children}
    </JobDataContext.Provider>
  );
}
