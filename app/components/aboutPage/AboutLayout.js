import React, { useEffect } from "react";
import styled from "styled-components";
import Heading from "../styles/Heading";
import wheelPic from "../../../public/assets/ferris_wheel-2012.png";

const StyledAboutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-column-gap: 6rem;
  height: 90vh;

  @media (max-height: 40em) {
    height: auto;
  }

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
  }
`;

const StyledArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  // height: 50%;
`;

const StyledText = styled.p`
  max-width: 50rem;
  @media (max-width: 75em) {
    font-size: 1.5rem;
  }
  @media (max-width: 59em) {
    width: 50%;
    font-size: 1rem;
  }
  @media (max-width: 44em) {
    font-size: 0.8rem;
  }
  @media (max-width: 34em) {
    font-size: 0.8rem;
  }
`;

const StyledImg = styled.img`
  width: 80%;
  max-width: 70rem;

  -webkit-filter: brightness(120%) saturate(130%);
  -moz-filter: brightness(120%) saturate(130%);
  filter: brightness(120%) saturate(130%);

  @media (max-width: 59em) {
    max-width: 40rem;
  }
`;

function AboutLayout() {
  return (
    <StyledAboutLayout>
      <StyledArea>
        <Heading as="h1">Who am I?</Heading>
        <Heading as="h2">To thine own self be true...</Heading>
        <StyledText>I have been through many engineering disciplines and have always found myself curious. But I'm really just a guy who loves math and computers.</StyledText>
        <Heading as="h2">Brevity is the soul of wit!</Heading>
        <StyledText>I am a man of few words, but by choice. Communication is very important to me, and if I can get people to understand in less words, the better.</StyledText>
        <Heading as="h2">
          There is no wealth like knowledge,
          <br /> no poverty like ignorance....
        </Heading>
        <StyledText>Every man dies, but not every man really lives. When you die, you're going to regret the things you don't do. When I die, I'm going to regret the things I don't know.</StyledText>
      </StyledArea>
      <StyledArea>
        <StyledImg src={wheelPic} alt="kenji on a ferris wheel" />
      </StyledArea>
    </StyledAboutLayout>
  );
}

export default AboutLayout;
