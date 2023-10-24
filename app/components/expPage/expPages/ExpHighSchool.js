import React, { useEffect } from "react";
import styled from "styled-components";
import pshsLogo from "../../../../public/logo/pshs.png";

// components
import Heading from "../../styles/Heading";
import StyledHeader from "../../styles/StyledHeader";
import StyledDiv from "../../styles/StyledDiv";
import StyledTitle from "../../styles/StyledTitle";
import StyledP from "../../styles/StyledP";

const WhiteBG = styled.div`
  background-color: #fff;
`;
const StyledImg = styled.img`
  background-color: #fff;
`;

function ExpHighSchool() {
  return (
    <StyledDiv>
      <StyledHeader>
        <StyledImg height="80rem" src={pshsLogo} alt="PSHS Logo" />
        <StyledTitle>
          <div>
            <Heading as="h2">Philippine Science High School</Heading>
          </div>
          <div>
            <Heading as="h3">Main Campus</Heading>
          </div>
        </StyledTitle>
      </StyledHeader>
      <StyledP>Philippine Science High School is a research-oriented and specialized public high school. Operating under the DOST, only 240 students enter the main campus branch every year out of thousands that apply from all over the country.</StyledP>
      <StyledP>Here, I was introduced to programming, where I learned C++, Java and Python. In my 4th year, I developed an Android application for the interface of an ECG device running on an Arduino microcontroller. The project won 2nd place in an international competition in Taiwan.</StyledP>
    </StyledDiv>
  );
}

export default ExpHighSchool;
