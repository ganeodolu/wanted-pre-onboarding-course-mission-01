import { atom } from "recoil";
import { CarParams } from "../interfaces";

export const filterState = atom<CarParams>({
  key: "filterState",
  default: {
    fuelType: "",
    segment: ""
  }
});
