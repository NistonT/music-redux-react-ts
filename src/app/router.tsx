import { AuthorsPage, LibraryPage, MainPage, SearchPage } from "@/pages";
import { pageRouter } from "@/shared/constants/page-router";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const AuthorIdPage = lazy(() => import("@/pages/AuthorIdPage"));

export const Router = () => {
  return (
    <Routes>
      <Route path={pageRouter.Home} element={<MainPage />} />
      <Route path={pageRouter.Search} element={<SearchPage />} />
      <Route path={pageRouter.Library} element={<LibraryPage />} />
      <Route path={pageRouter.Authors} element={<AuthorsPage />} />
      <Route
        path={pageRouter.Author}
        element={
          <Suspense fallback={<div>Загрузка автора</div>}>
            <AuthorIdPage />
          </Suspense>
        }
      />
    </Routes>
  );
};
