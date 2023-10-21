import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Heading from "../styles/Heading";
import HexagonBG from "../common/HexagonBG";
import { Link } from "react-router-dom";

const StyledIntroLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-row-gap: 2rem;
  height: 80vh;

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
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
`;

const StyledImg = styled.img`
  width: 80%;
  max-width: 40rem;
`;

function HomeIntro({ contactRef }) {
  function goToContact() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <StyledIntroLayout>
      <StyledPictureArea>
        <StyledImg src={require("../../../public/assets/bearHat2015.png").default} alt="kenji with a bear hat" />
      </StyledPictureArea>
      <StyledTextArea>
        <div>
          <Heading as="h1">Hi, I'm Kenji</Heading>
          <Heading as="h2">Software Engineer | Data Scientist</Heading>
          <StyledDescription>Business is all about communication. When everything makes sense, choice: you will be happy or there is unforeseen evil</StyledDescription>
          <StyledButton onClick={goToContact}>
            <Heading as="h2">Contact Me</Heading>
          </StyledButton>
        </div>
      </StyledTextArea>
    </StyledIntroLayout>
  );
}

export default HomeIntro;
