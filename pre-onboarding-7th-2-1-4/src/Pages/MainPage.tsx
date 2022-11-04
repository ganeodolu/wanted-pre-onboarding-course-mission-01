import CarItemList from "@/Components/CarItemList";
import Category from "@/Components/Category";
import { Segment } from "@/lib/@types";
import useCarList from "@/lib/hooks/useCarList";
import React, { useState } from "react";

const MainPage = () => {
  const [currentCategory, setCurrentCategory] = useState<Segment>("ALL");
  const { isLoading, cars } = useCarList(currentCategory);

  return (
    <>
      <Category
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <CarItemList isLoading={isLoading} carItemData={cars} />
    </>
  );
};

export default MainPage;
