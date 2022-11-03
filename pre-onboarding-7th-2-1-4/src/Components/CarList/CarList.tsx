import { getCars } from "@/lib/api/cars";
import { Car, FuelType, Segment } from "@/lib/interfaces";
import { filterState } from "@/lib/states/filterState";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import CarItem from "./CarItem";

const CarList = () => {
  const [data, setData] = useState<Car[]>();
  const [filter, setFilter] = useRecoilState(filterState)
  console.log(filter);
  // const { data, isSuccess, isLoading, isError } = useQuery<Car[], Error>(
  //   ["cars"],
  //   () =>
  //     getCars({
  //       fuelType,
  //       segment
  //     })
  // );

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  // if (isError) {
  //   return <span>Error</span>;
  // }

  useEffect(() => {
    const test = async () => {
      const car = await getCars({
        fuelType: filter.fuelType,
        segment: filter.segment
      });
      console.log(car.payload);
      setData(car.payload);
    };
    test();
  }, []);

  return (
    <>
      {data?.length &&
        data.map((car: Car) => {
          const { id } = car;

          return <CarItem car={car} key={id} />;
        })}
    </>
  );
};

export default CarList;
