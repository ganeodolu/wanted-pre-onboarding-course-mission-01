import { Segment } from "@/lib/@types";
import { SEGMENT } from "@/lib/constants/constants";
import styled, { css } from "styled-components";

interface Props {
  tagName: Segment;
  index?: number;
  selected?: boolean;
  onClick?: () => void;
}

const Tag = ({ tagName, selected = false, index, onClick }: Props) => {
  return (
    <TagWrapper selected={selected} onClick={onClick} data-index={index}>
      {SEGMENT[tagName]}
    </TagWrapper>
  );
};

const TagWrapper = styled.button<{ selected: boolean }>`
  padding: 5px 17px;
  border-radius: 62px;
  border: none;
  font-family: "Inter";
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 17px;
  flex-shrink: 0;
  cursor: pointer;

  ${({ selected, theme }) => css`
    background-color: ${selected ? theme.color.black : theme.color.gray};
    color: ${selected ? theme.color.white : theme.color.black};
  `}
`;

export default Tag;
