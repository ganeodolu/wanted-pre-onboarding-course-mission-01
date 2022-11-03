import CarList from "@/Components/CarList/CarList";
import Button from "@/Components/Common/Button";
import { SEGMENT } from "@/lib/constants/constants";
import React from "react";

const MainPage = () => {
  return (
    <>
      <p>MainPage</p>
      <nav>
        <Button>전체</Button>
        <Button>{SEGMENT.E}</Button>
        <Button>{SEGMENT.D}</Button>
        <Button>{SEGMENT.C}</Button>
        <Button>{SEGMENT.SUV}</Button>
      </nav>
      <CarList />
    </>
  );
};

export default MainPage;
