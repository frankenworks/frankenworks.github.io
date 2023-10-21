import React, { useEffect, forwardRef } from "react";
import styled from "styled-components";

import Heading from "../styles/Heading";

const StyledContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-row-gap: 2rem;
  height: 80vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPictureArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  border: 1px solid white;
  // background-color: #777;
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

const HomeContact = forwardRef((props, ref) => {
  return (
    <StyledContactLayout ref={ref}>
      <StyledTextArea>
        <Heading as="h4">Contact Me</Heading>
        <div>
          <Heading as="h2">Email</Heading>
          <Heading as="h2">Phone</Heading>
          <Heading as="h2">Other Links</Heading>
        </div>
      </StyledTextArea>
      <StyledPictureArea>
        <StyledImg src={require("../../../public/assets/VCARD.png").default} alt="QR Code Contact Details" />
        <Heading as="h2">Or scan this QR Code!</Heading>
      </StyledPictureArea>
    </StyledContactLayout>
  );
});

export default HomeContact;
