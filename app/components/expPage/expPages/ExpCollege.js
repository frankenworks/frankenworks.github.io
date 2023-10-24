import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UPLogo from "../../../../public/logo/UPlogo.png";

// components
import Heading from "../../styles/Heading";
import StyledHeader from "../../styles/StyledHeader";
import StyledDiv from "../../styles/StyledDiv";
import StyledTitle from "../../styles/StyledTitle";
import StyledP from "../../styles/StyledP";

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
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

function ExpCollege() {
  return (
    <StyledDiv>
      <StyledHeader>
        <img height="80rem" src={UPLogo} alt="UP Logo" />
        <StyledHeader>
          <StyledTitle>
            <div>
              <Heading as="h2">BS Mechanical Engineering</Heading>
            </div>
            <div>
              <Heading as="h3">University of the Philippines - Diliman</Heading>
            </div>
          </StyledTitle>
        </StyledHeader>
      </StyledHeader>
      <StyledP>
        UP is among the top universities in the country and has consistently ranked among the top 400 universities in the{" "}
        <StyledLink to="https://www.topuniversities.com/universities/university-philippines" target="_blank">
          QS World University Ranking
        </StyledLink>
        . My coursework was very diversified and I was exposed to many fields related to internal combustion engines, heating ventilation and air conditioning, control systems, electrical engineering, machine design and power plant engineering. This is mainly because the course is geared towards giving a comprehensive education in preparation for the board exam.
      </StyledP>
      <StyledP>I passed the board exam for Mechanical Engineering in 2018.</StyledP>
    </StyledDiv>
  );
}

export default ExpCollege;
