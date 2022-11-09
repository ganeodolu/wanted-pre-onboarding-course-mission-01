import { SEGMENT, FUELTYPE } from "../constants/constants";

interface IInsurance {
  name: string;
  description: string;
}

interface IAdditionalProducts {
  name: string;
  amount: number;
}

export interface Car {
  id: number;
  startDate: string;
  createdAt: string;
  attribute: {
    brand: string;
    name: string;
    segment: "C" | "D" | "E" | "SUV";
    fuelType: "gasoline" | "hybrid" | "ev";
    imageUrl: string;
  };
  amount: number;
  insurance?: IInsurance[];
  additionalProducts?: IAdditionalProducts[];
}

export type Segment = keyof typeof SEGMENT;

export type SegmentValue = typeof SEGMENT[Segment];

export type FuelType = keyof typeof FUELTYPE;

export type FuelTypeValue = typeof FUELTYPE[FuelType];

export interface CarParams {
  fuelType?: FuelType;
  segment: Segment;
}
