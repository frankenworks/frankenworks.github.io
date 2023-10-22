import React, { useEffect } from "react";
import styled from "styled-components";

import Heading from "../styles/Heading";
import { NavLink } from "react-router-dom";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelector = styled.div`
  display: grid;
  grid-template-columns: auto;
  align-items: flex-start;
  gap: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    flex-direction: column;
    padding: 0.25rem 1rem;
    border: 1px solid black;
    transition: all 0.3s;
    border-radius: 9px;
    text-decoration: none;
  }

  &:hover {
    border: 1px solid #ffa500;
    color: #ffa500;
  }
  ,
  &:active,
  &.active:link,
  &.active:visited {
    border: 1px solid #ffa500;
    color: #ffa500;
    text-decoration: none;
  }
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%
  gap: 5rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 59em) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

function ExperienceSelector() {
  return (
    <StyledBody>
      <div>
        <Heading as="h5">Experience</Heading>
      </div>
      <StyledNavLink to="/experience/wk-2">
        <div>
          <Heading as="h2">Consultant</Heading>
        </div>
        <StyledDescription>
          <p>Innovative Investors Finance Corporation</p>
          <p>2023</p>
        </StyledDescription>
      </StyledNavLink>
      <StyledSelector>
        <StyledNavLink to="/experience/wk-1">
          <div>
            <Heading as="h2">Web Developer</Heading>
          </div>
          <StyledDescription>
            <p>Freelance</p>
            <p>2022 to 2023</p>
          </StyledDescription>
        </StyledNavLink>
      </StyledSelector>
      <div>
        <Heading as="h5">Education</Heading>
      </div>
      <StyledSelector>
        <StyledNavLink to="/experience/ed-3">
          <div>
            <Heading as="h2">Coursework towards Masters</Heading>
          </div>
          <StyledDescription>
            <p>MS in Computer Science at UP Diliman</p>
            <p>2019 to 2022</p>
          </StyledDescription>
        </StyledNavLink>
        <StyledNavLink to="/experience/ed-2">
          <div>
            <Heading as="h2">Undergraduate</Heading>
          </div>
          <StyledDescription>
            <p>BS Mechanical Engineering at UP Diliman</p>
            <p>2012 to 2018</p>
          </StyledDescription>
        </StyledNavLink>
        <StyledNavLink to="/experience/ed-1">
          <div>
            <Heading as="h2">Secondary</Heading>
          </div>
          <StyledDescription>
            <p>Philippine Science High School - Main Campus</p>
            <p>2009 to 2012</p>
          </StyledDescription>
        </StyledNavLink>
      </StyledSelector>
    </StyledBody>
  );
}

export default ExperienceSelector;
