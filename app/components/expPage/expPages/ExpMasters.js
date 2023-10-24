import React, { useEffect } from "react";
import UPLogo from "../../../../public/logo/UPlogo.png";

// components
import Heading from "../../styles/Heading";
import StyledHeader from "../../styles/StyledHeader";
import StyledDiv from "../../styles/StyledDiv";
import StyledTitle from "../../styles/StyledTitle";
import StyledP from "../../styles/StyledP";

function ExpMasters() {
  return (
    <StyledDiv>
      <StyledHeader>
        <img height="80rem" src={UPLogo} alt="UP Logo" />
        <StyledHeader>
          <StyledTitle>
            <div>
              <Heading as="h2">MS Computer Science</Heading>
            </div>
            <div>
              <Heading as="h3">University of the Philippines - Diliman</Heading>
            </div>
          </StyledTitle>
        </StyledHeader>
      </StyledHeader>
      <StyledP>In 2019 I decided to enroll in a Masters Course for Computer Science. The pandemic had caused a delay in completing my studies, but by the end of 2022 I had completed all of my coursework except for the thesis requirement. I am still on leave status with the university, however I put it on hold as I wanted to focus more on my work in software development and data science.</StyledP>
    </StyledDiv>
  );
}

export default ExpMasters;
