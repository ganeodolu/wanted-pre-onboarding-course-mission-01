import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useChangeFuelSegmentEnumToKorean,
  useCalculateDate,
  useChangeAmountToLocalString
} from "@/lib/hooks";
import styled from "styled-components";
import { Car } from "@/lib/@types";
import ItemTag from "../ItemTag";

interface Props {
  carData: Car;
}

const CarItem = ({ carData }: Props) => {
  const { day, calculateDate } = useCalculateDate();
  const { amountLocalString, changeLocalString } =
    useChangeAmountToLocalString();
  const { fuel, segment, changeFuelToKorean, changeSegmentToKorean } =
    useChangeFuelSegmentEnumToKorean();

  useEffect(() => {
    if (carData) {
      calculateDate(carData.createdAt);
      changeLocalString(carData.amount);
      changeFuelToKorean(carData.attribute.fuelType);
      changeSegmentToKorean(carData.attribute.segment);
    }
  }, [carData]);

  return (
    <Container>
      <Link to={`/detail/${carData.id}`}>
        <div className="textWrapper">
          <p className="brand">{carData.attribute.brand}</p>
          <p className="name">{carData.attribute.name}</p>
          <p className="type">
            {segment} / {fuel}
          </p>
          <p className="amount">월 {amountLocalString} 원 부터</p>
        </div>
        <div>
          <img
            src={carData.attribute.imageUrl}
            alt={carData.attribute.name}
            width={152}
            height={80}
          />
        </div>
        {day < 1 && <ItemTag className="newItemTag" />}
      </Link>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
  height: 120px;

  &:last-child {
    border-bottom: 0;
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .textWrapper {
    p {
      color: ${({ theme }) => theme.color.black};
    }
    .brand,
    .name {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: 17px;
    }
    .type {
      margin-top: 8px;
    }
    .type,
    .amount {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.XSmall};
      line-height: 15px;
    }
  }

  .newItemTag {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export default CarItem;
