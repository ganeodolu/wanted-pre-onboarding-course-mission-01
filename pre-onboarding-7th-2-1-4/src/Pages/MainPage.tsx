import CarList from "@/Components/CarList/CarList";
import Button from "@/Components/Common/Button";
import { SEGMENT } from "@/lib/constants/constants";
import { Segment } from "@/lib/interfaces";
import { filterState } from "@/lib/states/filterState";
import React from "react";
import { useRecoilState } from "recoil";

const MainPage = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.tagName !== "BUTTON") return;
    setFilter({
      ...filter,
      segment: target.dataset.segment as Segment
    });
  };
  return (
    <>
      <nav onClick={handleFilter}>
        <Button dataSegment={""}>{SEGMENT.ALL}</Button>
        <Button dataSegment={"E"}>{SEGMENT.E}</Button>
        <Button dataSegment={"D"}>{SEGMENT.D}</Button>
        <Button dataSegment={"C"}>{SEGMENT.C}</Button>
        <Button dataSegment={"SUV"}>{SEGMENT.SUV}</Button>
      </nav>
      <CarList />
    </>
  );
};

export default MainPage;
