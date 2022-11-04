import { FuelType, FuelTypeValue, Segment, SegmentValue } from "@/lib/@types";
import { useState } from "react";
import { FUELTYPE, SEGMENT } from "../constants/constants";

const useChangeFuelSegmentEnumToKorean = () => {
  const [fuel, setFuel] = useState<FuelTypeValue>("전체");
  const [segment, setSegment] = useState<SegmentValue>("전체");

  const changeFuelToKorean = (fuelTypeKey: FuelType) => {
    setFuel(FUELTYPE[fuelTypeKey]);
  };

  const changeSegmentToKorean = (segmentType: Segment) => {
    setSegment(SEGMENT[segmentType]);
  };
  return { fuel, segment, changeFuelToKorean, changeSegmentToKorean };
};

export default useChangeFuelSegmentEnumToKorean;
