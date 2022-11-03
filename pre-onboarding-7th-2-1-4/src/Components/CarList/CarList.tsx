import { getCars } from "@/lib/api/cars";
import { Car } from "@/lib/interfaces";
import { filterState } from "@/lib/states/filterState";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRecoilState } from "recoil";
import CarItem from "./CarItem";

const CarList = () => {
  const [filter] = useRecoilState(filterState);
  console.log(filter);
  const { data, isLoading, isError } = useQuery<Car[], Error>(
    ["cars", filter],
    () =>
      getCars({
        fuelType: filter.fuelType,
        segment: filter.segment
      })
  );
  console.log(data);

  if (isLoading) {
    return <span>불러오는 중</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <>
      {data?.length ? (
        data.map((car: Car) => {
          const { id } = car;

          return <CarItem car={car} key={id} />;
        })
      ) : (
        <span>차량이 없습니다.</span>
      )}
    </>
  );
};

export default CarList;
