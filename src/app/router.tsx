import { MainPage } from "@/pages/MainPage";
import { pageRouter } from "@/shared/constants/page-router";
import { Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route path={pageRouter.Home} element={<MainPage />} />
    </Routes>
  );
};
