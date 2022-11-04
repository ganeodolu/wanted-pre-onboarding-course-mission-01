import { Segment } from "@/lib/@types";
import axios from "axios";

const API = axios.create({
  baseURL: " https://preonboarding.platdev.net/api/"
});

export const getCars = async ({
  queryKey
}: {
  queryKey: [string, Segment];
}) => {
  try {
    const segment = queryKey[1] === "ALL" ? "" : queryKey[1];
    const response = await API.get("/cars", {
      params: {
        fuelType: "",
        segment
      }
    });
    return response.data.payload;
  } catch (error) {
    console.log(error);
  }
};
