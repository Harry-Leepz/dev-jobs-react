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

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText);
  const { jobItems, isLoading } = useFetchJobs(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);

  const jobItemsSliced = jobItems?.slice(0, 7) || [];
  const totalNumberOfresults = jobItems?.length || 0;

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onPageChangeHandler = (directon: "next" | "previous") => {
    if (directon === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (directon === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm
          searchText={searchText}
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
        />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount results={totalNumberOfresults} />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <PaginationControls
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
