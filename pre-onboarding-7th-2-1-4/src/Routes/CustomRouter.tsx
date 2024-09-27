import Layout from "@/Components/Layout";
import DetailPage from "@/Pages/DetailPage";
import MainPage from "@/Pages/MainPage";
import NotFoundPage from "@/Pages/NotFoundPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default CustomRouter;
