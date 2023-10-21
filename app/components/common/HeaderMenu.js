import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Heading from "../styles/Heading";

const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    transition: all 0.3s;
    text-decoration: none;
  }

  &:hover {
    color: #ffa500;
  }
  ,
  &:active,
  &.active:link,
  &.active:visited {
    color: orange;
    text-decoration: none;
  }
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <StyledNavLink to="/experience">
        <Heading as="h2">Experience</Heading>
      </StyledNavLink>
      <StyledNavLink to="/skills">
        <Heading as="h2">Skills</Heading>
      </StyledNavLink>
      <StyledNavLink to="/about-me">
        <Heading as="h2">About Me</Heading>
      </StyledNavLink>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
