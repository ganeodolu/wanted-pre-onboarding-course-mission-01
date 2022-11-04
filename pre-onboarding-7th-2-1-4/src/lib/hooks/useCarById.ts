import { AxiosError } from "axios";
import { getCars } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Car, Segment } from "../@types";

const useCar = (id: number) => {
  const { isLoading, isError, data, error } = useQuery<
    Car[],
    AxiosError,
    Car | undefined,
    [string, Segment]
  >(["cars", "ALL"], getCars, {
    select: (list) => list.find((item) => item.id === id),
    onError: (error) => error
  });

  return { isLoading, isError, car: data, error };
};

export default useCar;
