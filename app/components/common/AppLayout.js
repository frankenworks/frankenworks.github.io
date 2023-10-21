import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./Header";
import Footer from "./Footer";
import HexagonBG from "./HexagonBG";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: space-between;
  overflow-y: scroll;
`;

const Main = styled.main`
  background-color: black;
  padding: 4rem 4.8rem 6.4rem;
  // height: 100vh;
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
