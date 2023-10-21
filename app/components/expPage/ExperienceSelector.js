import React, { useEffect } from "react";
import styled from "styled-components";

import Heading from "../styles/Heading";
import { NavLink } from "react-router-dom";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelector = styled.div`
  display: flex;
  flex-direction: column;
`;

function ExperienceSelector() {
  return (
    <StyledBody>
      <Heading as="h2">Education</Heading>
      <StyledSelector>
        <NavLink to="/experience/ed-1">
          <button>PSHS</button>
        </NavLink>
        <NavLink to="/experience/ed-2">
          <button>UP Diliman</button>
        </NavLink>
      </StyledSelector>
      <Heading as="h2">Experience</Heading>
      <StyledSelector>
        <NavLink to="/experience/wk-1">
          <button>UP Diliman</button>
        </NavLink>
      </StyledSelector>
      <Heading as="h2">Projects</Heading>
      <StyledSelector>
        <NavLink to="/experience/pr-1">
          <button>UP Diliman</button>
        </NavLink>
        <NavLink to="/experience/pr-2">
          <button>UP Diliman</button>
        </NavLink>
      </StyledSelector>
    </StyledBody>
  );
}

export default ExperienceSelector;
