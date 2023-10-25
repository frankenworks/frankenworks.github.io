import React, { useEffect } from "react";
import styled from "styled-components";

import Heading from "../styles/Heading";
import SkillsHexagon from "./SkillsHexagon";

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows 1fr 1fr;
  gap: 5rem;
  align-items: center;
  height: 90vh;

  @media(max-height: 40em) {
    height: auto;
  }

  @media (max-width: 75em) {
    grid-template-columns: 1fr;
    grid-template-rows 1fr;

    @media(max-height: 61em) {
      height: auto;
    }
  }

  @media (max-width: 59em) {
    // height: auto;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  @media (max-width: 75em) {
    align-self: center;
  }
  @media (max-width: 34em) {
    padding: 1rem;
  }
`;

const StyledDiv2 = styled.div`
  display: flex;

  flex-direction: column;
  gap: 0.25rem;
  @media (max-width: 75em) {
    align-self: center;
  }
  @media (max-width: 34em) {
    padding: 1rem;
  }
`;

const StyledP = styled.p`
  margin: 0;
  @media (max-width: 75em) {
    max-width: 40rem;
  }
  @media (max-width: 59em) {
    max-width: 30rem;
    font-size: 1rem;
  }
`;

const StyledElem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 2rem;
`;

const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: 59em) {
    font-size: 1.5rem;
  }
`;

function SkillsLayout() {
  return (
    <StyledList>
      <StyledDiv>
        <Heading as="h2">Skills</Heading>
        <StyledDiv>
          <StyledHeading>System Design</StyledHeading>
          <StyledElem>
            <StyledP>Contributed in designing for various systems from data capture to report generation</StyledP>
            <StyledP>Designed and implemented an attendance tracking system using QR codes</StyledP>
          </StyledElem>
          <StyledHeading>Data Analysis</StyledHeading>
          <StyledElem>
            <StyledP>Experienced in data analysis tools like pivot tables and power query</StyledP>
            <StyledP>Analyzed and generated reports from data related to accounting</StyledP>
            <StyledP></StyledP>
          </StyledElem>
          <StyledHeading>Programming</StyledHeading>
          <StyledElem>
            <StyledP>Experienced in development workflow and project deployment</StyledP>
            <StyledP>Experienced in client communication and understanding requirements</StyledP>
          </StyledElem>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv>
        <Heading as="h2">Programming Languages</Heading>
        <SkillsHexagon />
      </StyledDiv>
      <StyledDiv>
        <Heading as="h2">Other Skill Sets</Heading>
        <StyledDiv>
          <StyledHeading>Machine Design</StyledHeading>
          <StyledElem>
            <StyledP>Experienced in CAD designing for various projects</StyledP>
            <StyledP>Designed wheelchair modifications for a palsy patient in 2017</StyledP>
          </StyledElem>
          <StyledHeading>Japanese Speaking</StyledHeading>
          <StyledElem>
            <StyledP>Born in Japan and can converse casually</StyledP>
            <StyledP>Passed the JLPT N3 level in 2019</StyledP>
          </StyledElem>
        </StyledDiv>
      </StyledDiv>
    </StyledList>
  );
}

export default SkillsLayout;
