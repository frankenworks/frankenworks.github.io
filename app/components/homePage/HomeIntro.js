import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import bearPic from "../../../public/assets/bearHat2015.jpg";

import Heading from "../styles/Heading";

const StyledIntroLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-row-gap: 2rem;
  height: 90vh;

  @media (max-height: 40em) {
    height: auto;
  }

  @media (max-width: 44em) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    height: auto;
  }
`;

const StyledPictureArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTextArea = styled.div`
  display: flex;
  margin-bottom: 15rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10rem 2rem;
  @media (max-width: 59em) {
    align-items: center;
    margin-bottom: 5rem;
  }
  @media (max-width: 44em) {
    padding: 2rem 2rem;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 9px;
  background-color: #000;
  transition: all 0.3s;

  &:hover,
  &:visited,
  &:active {
    border: 1px solid #ffa500;
    color: #ffa500;
  }
`;

const StyledDescription = styled.p`
  max-width: 30rem;
  @media (max-width: 59em) {
    font-size: 1rem;
    max-width: 18rem;
  }
`;

const StyledImg = styled.img`
  width: 80%;
  max-width: 40rem;

  -webkit-filter: brightness(120%) saturate(120%);
  -moz-filter: brightness(120%) saturate(120%);
  filter: brightness(120%) saturate(120%);

  @media (max-width: 44em) {
    max-width: 20rem;
  }
`;

function HomeIntro({ contactRef }) {
  function goToContact() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <StyledIntroLayout>
      <StyledPictureArea>
        <StyledImg src={bearPic} loading="lazy" alt="kenji with a bear hat" />
      </StyledPictureArea>
      <StyledTextArea>
        <div>
          <Heading as="h1">Hi, I'm Kenji</Heading>
          <Heading as="h2">Software Engineer | Data Scientist</Heading>
          <StyledDescription>Good design is achieved not when there is nothing left to add, but when there is nothing left to remove</StyledDescription>
          <StyledButton onClick={goToContact}>
            <Heading as="h2">Contact Me</Heading>
          </StyledButton>
        </div>
      </StyledTextArea>
    </StyledIntroLayout>
  );
}

export default HomeIntro;
