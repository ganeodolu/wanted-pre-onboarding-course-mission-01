import { PALLETTE } from "@/lib/constants/constants";
import { Segment } from "@/lib/interfaces";
import React from "react";
import styled from "styled-components";

interface Props {
  type: "button";
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  border: number;
  borderRadius: string;
  children: string;
  marginRight: string;
  dataSegment: Segment;
  onClickButton: any;
}

const Button = (props: Props) => {
  const {
    type,
    onClickButton,
    width,
    height,
    backgroundColor,
    color,
    border,
    borderRadius,
    marginRight,
    dataSegment,
    children
  } = props;

  const styles = {
    width,
    height,
    backgroundColor,
    color,
    border,
    borderRadius,
    marginRight
  };

  return (
    <>
      <ButtonBox
        type={type}
        data-segment={dataSegment}
        {...styles}
        onClick={onClickButton}
      >
        {children}
      </ButtonBox>
    </>
  );
};

Button.defaultProps = {
  width: "62px",
  height: "27px",
  backgroundColor: PALLETTE.GREY,
  color: PALLETTE.BLACK,
  border: 0,
  type: "button",
  borderRadius: "62px",
  onClickButton: null,
  marginRight: "8px"
};

const ButtonBox = styled.button<
  Pick<
    Props,
    | "backgroundColor"
    | "width"
    | "height"
    | "border"
    | "color"
    | "borderRadius"
    | "marginRight"
  >
>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${(props) => props.width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  margin-right: ${({ marginRight }) => marginRight};
`;

export default Button;
