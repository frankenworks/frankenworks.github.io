import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import Heading from "../styles/Heading";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";

const StyledHeader = styled.header`
  background-color: var(--color-grey-900);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-800);

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 75em) {
    padding: 0.6rem 2.4rem;
  }
  @media (max-width: 34em) {
    flex-direction: column;
    padding: 0.6rem 1rem;
    text-align: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
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
    text-decoration: none;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderLinks />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
