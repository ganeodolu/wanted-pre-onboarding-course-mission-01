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
  startDate: Date;
  createdDate: Date;
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

export type FuelType = "gasoline" | "hybrid" | "ev" | "";

export type Segment = "C" | "D" | "E" | "SUV" | "";

export interface CarParams {
  fuelType: FuelType;
  segment: Segment;
}
