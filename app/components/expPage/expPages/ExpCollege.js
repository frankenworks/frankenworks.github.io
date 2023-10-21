import React, { useEffect } from "react";
import styled from "styled-components";

import Heading from "../../styles/Heading";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledHeader = styled.header`
  display: flex;
  gap: 2rem;
`;

function ExpCollege() {
  return (
    <StyledDiv>
      <StyledHeader>
        <img height="80rem" src={require("../../../../public/logo/UPlogo.png").default} alt="UP Logo" />
        <Heading as="h2">UP Diliman</Heading>
      </StyledHeader>
      <p>UP Diliman is among the top 4</p>
      <p>I passed the board exam for Mechanical Engineering in 2018.</p>
    </StyledDiv>
  );
}

export default ExpCollege;
