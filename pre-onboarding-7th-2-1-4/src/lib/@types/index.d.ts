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

const SEGMENT = {
  ALL: "전체",
  E: "대형",
  D: "중형",
  C: "소형",
  SUV: "SUV"
} as const;

const FUELTYPE = {
  ALL: "전체",
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드"
} as const;

export type Segment = keyof typeof SEGMENT;

export type SegmentValue = typeof SEGMENT[Segment];

export type FuelType = keyof typeof FUELTYPE;

export type FuelTypeValue = typeof FUELTYPE[FuelType];

export interface CarParams {
  fuelType?: FuelType;
  segment: Segment;
}
