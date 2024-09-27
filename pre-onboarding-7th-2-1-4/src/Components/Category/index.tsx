import { Segment } from "@/lib/@types";
import { CATEGORY } from "@/lib/constants/constants";
import React from "react";
import styled from "styled-components";
import Tag from "../Tag/Tag";

interface Props {
  currentCategory: Segment;
  setCurrentCategory: React.Dispatch<React.SetStateAction<Segment>>;
}

const Category = ({ currentCategory, setCurrentCategory }: Props) => {
  return (
    <CategoryWrapper>
      {CATEGORY.map((categoryItem, index) => (
        <Tag
          index={index}
          key={`tag${index}`}
          selected={categoryItem === currentCategory}
          onClick={() => setCurrentCategory(categoryItem)}
          tagName={categoryItem}
        />
      ))}
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
  overflow-x: auto;
  overflow-y: hidden;
`;

export default Category;
