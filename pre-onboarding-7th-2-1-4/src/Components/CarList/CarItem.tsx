import { FUELTYPE, SEGMENT } from "@/lib/constants/constants";
import { Car } from "@/lib/interfaces";
import React from "react";

type Props = {
  car: Car;
};

const CarItem = (props: Props) => {
  const { attribute, amount } = props.car;
  const { brand, name, segment, fuelType, imageUrl } = attribute;

  return (
    <>
      <div>{brand}</div>
      <div>{name}</div>
      <div />
      <div>
        {SEGMENT[segment]} / {FUELTYPE[fuelType]}
      </div>
      <div>월 {amount.toLocaleString()} 원부터</div>
      <div>
        <img src={imageUrl} width={152} height={80} />
      </div>
    </>
  );
};

export default CarItem;
