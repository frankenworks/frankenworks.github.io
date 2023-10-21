import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";

import Heading from "../styles/Heading";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TbMailOpenedFilled } from "react-icons/tb";

const LinkBar = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
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
    color: #ffa500;
    text-decoration: none;
  }
`;

const StyledTooltip = styled(Tooltip)`
  font-weight: bold;
`;

function HeaderLinks() {
  return (
    <LinkBar>
      <StyledNavLink to="/">
        <Heading as="h2">Kenji Peralejo</Heading>
      </StyledNavLink>
      <StyledLink to="https://www.linkedin.com/in/kenji-peralejo/" target="_blank" data-tooltip-id="linkedin-tooltip" data-tooltip-content="LinkedIn">
        <FaLinkedinIn size="2rem" />
      </StyledLink>
      <StyledTooltip id="linkedin-tooltip" style={{ backgroundColor: "#ffa500", color: "#000" }} />
      <StyledLink to="https://github.com/frankenworks" target="_blank" data-tooltip-id="github-tooltip" data-tooltip-content="Github">
        <FaGithub size="2rem" />
      </StyledLink>
      <StyledTooltip id="github-tooltip" style={{ backgroundColor: "#ffa500", color: "#000" }} />
      <StyledLink to="https://www.facebook.com/kenjifrancis.peralejo/" target="_blank" data-tooltip-id="facebook-tooltip" data-tooltip-content="Facebook">
        <FaFacebook size="2rem" />
      </StyledLink>
      <StyledTooltip id="facebook-tooltip" style={{ backgroundColor: "#ffa500", color: "#000" }} />
    </LinkBar>
  );
}

export default HeaderLinks;
