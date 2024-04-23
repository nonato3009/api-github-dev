import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <><Routes>
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}
