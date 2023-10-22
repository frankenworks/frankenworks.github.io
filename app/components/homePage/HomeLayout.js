import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import HomeIntro from "./HomeIntro";
import HomeContact from "./HomeContact";

const StyledHomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  grid-row-gap: 6.4rem;
`;

function HomeLayout() {
  const contactRef = useRef(null);

  return (
    <StyledHomeLayout>
      <HomeIntro contactRef={contactRef} />
      <HomeContact ref={contactRef} />
    </StyledHomeLayout>
  );
}

export default HomeLayout;
