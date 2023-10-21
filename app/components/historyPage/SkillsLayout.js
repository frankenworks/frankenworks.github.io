import React, { useEffect } from "react";
import styled from "styled-components";

import Heading from "../styles/Heading";
import HexagonBG from "../common/HexagonBG";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  height: 80vh;
`;

const StyledElem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function SkillsLayout() {
  return (
    <StyledList>
      <StyledElem>
        <Heading as="h2">Programming Languages</Heading>
        <HexagonBG />
        <Heading as="h2">Other Skills</Heading>
        <HexagonBG />
      </StyledElem>
    </StyledList>
  );
}

export default SkillsLayout;
