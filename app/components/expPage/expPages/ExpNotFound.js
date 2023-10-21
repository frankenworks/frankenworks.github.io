import React, { useEffect } from "react";
import styled from "styled-components";
import Heading from "../../styles/Heading";

const StyledDiv = styled.div`
  align-self: center;
  justify-self: center;
`;

function ExpNotFound() {
  return (
    <StyledDiv>
      <Heading as="h2">Page does not exist!</Heading>
    </StyledDiv>
  );
}

export default ExpNotFound;
