import { PALLETTE } from "@/lib/constants/constants";
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
      <ButtonBox type={type} {...styles} onClick={onClickButton}>
        {children}
      </ButtonBox>
    </>
  );
};

Button.defaultProps = {
  width: "62px",
  height: "27px",
  backgroundColor: PALLETTE.BLACK,
  color: PALLETTE.WHITE,
  border: 0,
  type: "button",
  borderRadius: "62px",
  onClickButton: null,
  marginRight: "8px"
};

const ButtonBox = styled.button<
  Pick<
    Props,
    "backgroundColor" | "width" | "height" | "border" | "color" | "borderRadius" | "marginRight"
  >
>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${(props) => props.width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  margin-right:  ${({ marginRight }) => marginRight};
`;

export default Button;
