import { AuthorIdPage, AuthorsPage, LibraryPage, MainPage, SearchPage } from "@/pages";
import { pageRouter } from "@/shared/constants/page-router";
import { Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route path={pageRouter.Home} element={<MainPage />} />
      <Route path={pageRouter.Search} element={<SearchPage />} />
      <Route path={pageRouter.Library} element={<LibraryPage />} />
      <Route path={pageRouter.Authors} element={<AuthorsPage />} />
      <Route path={pageRouter.Author} element={<AuthorIdPage />} />
    </Routes>
  );
};
