import React, { useEffect } from "react";
import styled from "styled-components";

import Heading from "../styles/Heading";

const StyledEmpty = styled.div`
  background-color: #000;
  height: 100vh;
`;

function PageNotFound() {
  return (
    <StyledEmpty>
      <Heading as="h1">Page Not Found</Heading>
    </StyledEmpty>
  );
}

export default PageNotFound;
