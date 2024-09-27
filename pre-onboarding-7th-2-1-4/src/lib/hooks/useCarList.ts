import { getCars } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Car, Segment } from "../@types";

const useCarList = (category: Segment) => {
  const { data, isLoading, isError } = useQuery<
    Car[],
    AxiosError,
    Car[],
    [string, Segment]
  >(["cars", category], getCars, { onError: (error) => error });

  return { cars: data, isLoading, isError };
};

export default useCarList;
