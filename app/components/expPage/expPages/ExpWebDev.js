import React, { useEffect } from "react";

// components
import { BiLogoJavascript } from "react-icons/bi";
import Heading from "../../styles/Heading";
import StyledHeader from "../../styles/StyledHeader";
import StyledDiv from "../../styles/StyledDiv";
import StyledTitle from "../../styles/StyledTitle";
import StyledP from "../../styles/StyledP";

function ExpWebDev() {
  return (
    <StyledDiv>
      <StyledHeader>
        <BiLogoJavascript size="8rem" />
        <StyledTitle>
          <div>
            <Heading as="h2">Web Developer</Heading>
          </div>
          <div>
            <Heading as="h3">Freelance</Heading>
          </div>
        </StyledTitle>
      </StyledHeader>
      <StyledP>Although I had first learned programming in 2009, I never really continued my learning in the field during my undergraduate studies. I self-studied web development in my spare time and learned HTML, CSS, Javascript and React. I did a few projects for static webpages, including this site.</StyledP>
    </StyledDiv>
  );
}

export default ExpWebDev;
