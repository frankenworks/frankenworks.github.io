import React, { useEffect } from "react";

// components
import { PiDatabase } from "react-icons/pi";
import Heading from "../../styles/Heading";
import StyledHeader from "../../styles/StyledHeader";
import StyledDiv from "../../styles/StyledDiv";
import StyledTitle from "../../styles/StyledTitle";
import StyledP from "../../styles/StyledP";

function ExpInvestors() {
  return (
    <StyledDiv>
      <StyledHeader>
        <PiDatabase size="8rem" />
        <StyledTitle>
          <div>
            <Heading as="h2">Consultant</Heading>
          </div>
          <div>
            <Heading as="h3">Innovative Investors and Financing Company</Heading>
          </div>
        </StyledTitle>
      </StyledHeader>
      <StyledP>I was mentored in data science where I was taught to use data analysis tools such as Microsoft Excel, as well as system design for database management systems(DBMS). I helped design and implement various systems for the company, such as a QR attendance system and a rental and leasing tracking system. My programming background also occassionally becomes useful for data cleanup and process automation using Python scripts.</StyledP>
    </StyledDiv>
  );
}

export default ExpInvestors;
