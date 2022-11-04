import styled from "styled-components";
import { Car } from "@/lib/@types";
import CarItem from "../CarItem";

interface Props {
  isLoading: boolean;
  carItemData?: Car[];
}

const CarItemList = ({ carItemData, isLoading }: Props) => {
  if (isLoading) {
    return (
      <CardItemListWrapper>
        <p className="message">불러오는 중</p>
      </CardItemListWrapper>
    );
  }
  if (!carItemData || carItemData.length === 0) {
    return (
      <CardItemListWrapper>
        <p className="message">차량이 없습니다.</p>
      </CardItemListWrapper>
    );
  }
  return (
    <CardItemListWrapper>
      {carItemData.map((carData) => (
        <CarItem key={carData.id} carData={carData} />
      ))}
    </CardItemListWrapper>
  );
};

const CardItemListWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 101px);

  .message {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    vertical-align: middle;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 21px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export default CarItemList;
