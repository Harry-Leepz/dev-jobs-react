import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BookmarksContextProvider from "./contexts/bookmarks/BookmarksContextProvider.tsx";
import ActiveIdContextProvider from "./contexts/activeId/ActiveIdContextProvider.tsx";
import SearchTextContextProvider from "./contexts/search/SearchTextContextProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ActiveIdContextProvider>
        <BookmarksContextProvider>
          <SearchTextContextProvider>
            <App />
          </SearchTextContextProvider>
        </BookmarksContextProvider>
      </ActiveIdContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
