import { CarParams } from "@/lib/interfaces";
import API from "./main";

export const getCars = async ({ fuelType, segment }: CarParams) => {
  try {
    const response = await API.get("/cars", {
      params: {
        fuelType,
        segment
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
