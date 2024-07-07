import { useState } from "react";

import useFetchJobs from "../hooks/useFetchJobs";
import useDebounce from "../hooks/useDebounce";

import Background from "./layout/Background";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header, { HeaderTop } from "./layout/Header";
import BookmarksButton from "./bookmarks/BookmarksButton";
import Logo from "./shared/Logo";
import SearchForm from "./shared/SearchForm";
import JobItemContent from "./joblist/JobItemContent";
import Sidebar, { SidebarTop } from "./shared/Sidebar";
import JobList from "./joblist/JobList";
import PaginationControls from "./shared/PaginationControls";
import ResultsCount from "./shared/ResultsCount";
import SortingControls from "./shared/SortingControls";
import { Toaster } from "react-hot-toast";

import { RESULTS_PER_PAGE } from "../lib/constants";
import { TSortingOption, TPageDirection } from "../lib/types";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText);
  const { jobItems, isLoading } = useFetchJobs(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<TSortingOption>("relevant");

  const jobItemsSorted = jobItems?.sort((a, b) => {
    if (sortBy === "relevant") {
      return b.relevanceScore - a.relevanceScore;
    } else {
      return a.daysAgo - b.daysAgo;
    }
  });
  const jobItemsSliced =
    jobItemsSorted?.slice(
      currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
      currentPage * RESULTS_PER_PAGE
    ) || [];
  const totalNumberOfresults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberOfresults / RESULTS_PER_PAGE;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

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
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm searchText={searchText} onChangeHandler={onChangeHandler} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount results={totalNumberOfresults} />
            <SortingControls sortBy={sortBy} onClick={onSortByChangeHandler} />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <PaginationControls
            totalNumberOfPages={totalNumberOfPages}
            onClick={onPageChangeHandler}
            currentPage={currentPage}
          />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />

      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
}

export default App;
