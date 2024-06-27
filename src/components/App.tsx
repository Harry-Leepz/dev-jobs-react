import { useState } from "react";

import useFetchJobs from "../hooks/useFetchJobs";

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

function App() {
  const [searchText, setSearchText] = useState("");
  const { jobItemsSliced, isLoading } = useFetchJobs(searchText);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
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
            <ResultsCount />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
