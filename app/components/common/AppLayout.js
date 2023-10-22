import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  // gap: auto;
  // flex-grow: 1;
  // grid-template-rows: auto 1fr auto;
  // grid-template-columns: 1fr;
  // height: 100vh;
  justify-content: space-between;
  // overflow-y: scroll;
`;

const Main = styled.main`
  background-color: black;
  padding: 4rem 4.8rem 6.4rem;
  @media (max-width: 34em) {
    padding: 2rem 1rem;
  }
`;

const StyledOutlet = styled(Outlet)`
  z-index: 0;
`;

function AppLayout() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
