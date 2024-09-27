import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";

const Layout = () => {
  return (
    <Container>
      <HeaderBar />
      <div className="content">
        <Outlet />
      </div>
    </Container>
  );
};

export const Container = styled.div`
  max-width: 460px;
  margin: 0 auto;
  min-height: 100vh;
  .content {
    overflow-x: hidden;
  }
`;

export default Layout;
