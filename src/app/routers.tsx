import { Main } from "@/pages";
import { pageConfig } from "@/shared/config";
import { Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route path={pageConfig.HOME} element={<Main />} />
    </Routes>
  );
};
