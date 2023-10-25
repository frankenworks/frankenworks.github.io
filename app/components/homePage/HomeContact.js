import React, { useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VCARD from "../../../public/assets/VCARD.png";

import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Heading from "../styles/Heading";

const StyledContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-row-gap: 2rem;
  height: 80vh;

  @media (max-height: 40em) {
    height: auto;
  }

  @media (max-width: 44em) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const StyledPictureArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  border: 1px solid white;

  @media (max-width: 44em) {
    padding: 2rem;
  }
`;

const StyledImg = styled.img`
  width: 40%;
  max-width: 40rem;
`;

const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem 5rem;
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    gap: 1rem;
    align-self: center;
    align-items: center;
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

const StyledParagraph = styled.p`
  align-self: center;
  margin: 0;
`;

const HomeContact = forwardRef((props, ref) => {
  return (
    <StyledContactLayout ref={ref}>
      <StyledTextArea>
        <Heading as="h4">Contact Me</Heading>
        <div>
          <Heading as="h2">Email</Heading>
          <StyledParagraph>peralejok@gmail.com</StyledParagraph>
          <StyledParagraph>kip@innovative.com.ph</StyledParagraph>
        </div>
        <div>
          <Heading as="h2">Phone</Heading>
          <StyledParagraph>+63 998 989 4055</StyledParagraph>
        </div>
        <div>
          <Heading as="h2">Other Links</Heading>
          <StyledLink to="https://www.linkedin.com/in/kenji-peralejo/" target="_blank">
            <FaLinkedinIn />
            <StyledParagraph>LinkedIn</StyledParagraph>
          </StyledLink>
          <StyledLink to="https://github.com/frankenworks" target="_blank">
            <FaGithub />
            <StyledParagraph>Github</StyledParagraph>
          </StyledLink>
          <StyledLink to="https://www.facebook.com/kenjifrancis.peralejo/" target="_blank">
            <FaFacebook />
            <StyledParagraph>Facebook</StyledParagraph>
          </StyledLink>
        </div>
      </StyledTextArea>
      <StyledPictureArea>
        <StyledImg src={VCARD} alt="QR Code Contact Details" />
        <Heading as="h2">Or scan this QR Code!</Heading>
      </StyledPictureArea>
    </StyledContactLayout>
  );
});

export default HomeContact;
