import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IconBack from "../IconBack";

const HeaderBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const navigate = useNavigate();
  const onClick = () => navigate(-1);
  return (
    <Container>
      {!isHome && (
        <button onClick={onClick}>
          <IconBack />
        </button>
      )}
      <h1>{isHome ? "전체차량" : "차량상세"}</h1>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  height: 60px;
  position: relative;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};

  button {
    width: 24px;
    height: 24px;
    text-align: center;
    position: absolute;
    left: 20px;
    top: 18px;
    border: 0;
    background-color: transparent;
  }

  h1 {
    flex: 1;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 21px;
    text-align: center;
    color: ${({ theme }) => theme.color.black};
  }
`;

export default HeaderBar;
