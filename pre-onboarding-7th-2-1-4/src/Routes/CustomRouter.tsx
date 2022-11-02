import Layout from "@/Components/Layouts/Layout";
import DetailPage from "@/Pages/DetailPage";
import MainPage from "@/Pages/MainPage";
import NotFoundPage from "@/Pages/NotFoundPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="detail" element={<DetailPage />}>
          <Route path=":id" element={<DetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default CustomRouter;
