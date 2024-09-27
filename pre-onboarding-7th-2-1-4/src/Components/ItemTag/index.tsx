import styled, { css } from "styled-components";

interface Props {
  className?: string;
}
const ItemTag = ({ className }: Props) => {
  return <Container className={className}>신규</Container>;
};

const Container = styled.span`
  padding: 3px 14px;
  border-radius: 42px;
  font-weight: 700;
  line-height: 15px;
  user-select: none;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.XSmall};
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
  `};
`;

export default ItemTag;
