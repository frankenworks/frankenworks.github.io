import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledHexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #000;
  z-index: 2;
  animation: animate 4s linear infinite;
  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
`;

const StyledHexRow = styled.div`
  display: inline-flex;
  margin-top: -28px;
  margin-left: 52px;

  &:first-child {
    margin-top: 0;
  }

  &:nth-child(even) {
    margin-left: 1px;
  }
`;

const StyledHexagon = styled.button`
  position: relative;
  border: none;
  width: 100px;
  height: 110px;
  background: #111;
  margin: 1px;
  z-index: 2;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 2s;

  &:hover:not(:disabled) {
    transition: 0s;
    background-color: #0f0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    background: rgb(255, 255, 255, 0.02);
    z-index: 1000;
  }

  &:after {
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    right: 4px;
    background-color: #111;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: 1;
  }
`;

const StyledImgC = styled.img`
  position: absolute;
  display: flex;
  top: 15px;
  left: 15px;
  z-index: 2;
`;

const StyledImgH = styled.img`
  position: absolute;
  display: flex;
  top: 25px;
  left: 25px;
  z-index: 2;
`;

const StyledImgP = styled.img`
  position: absolute;
  display: flex;
  top: 22px;
  left: 20px;
  z-index: 2;
`;
const StyledImgJ = styled.img`
  position: absolute;
  display: flex;
  top: 24px;
  left: 23px;
  z-index: 2;
`;

const StyledImg = styled.img`
  position: absolute;
  display: flex;
  top: 22px;
  left: 20px;
  z-index: 2;
`;

function HexagonBG({ filterField, options }) {
  return (
    <StyledHexContainer>
      <StyledHexRow>
        <StyledHexagon>
          <StyledImgC height="80rem" src={require("../../../public/logo/cpp.svg")} alt="cpp logo" />
        </StyledHexagon>
        <StyledHexagon>
          <StyledImgC height="80rem" src={require("../../../public/logo/c--4.svg")} alt="csharp logo" />
        </StyledHexagon>
        <StyledHexagon>
          <StyledImgP height="60rem" src={require("../../../public/logo/python-5.svg")} alt="python logo" />
        </StyledHexagon>
      </StyledHexRow>
      <StyledHexRow>
        <StyledHexagon>
          <StyledImgH height="60rem" src={require("../../../public/logo/html-1.svg")} alt="html5 logo" />
        </StyledHexagon>
        <StyledHexagon>
          <StyledImgH height="60rem" src={require("../../../public/logo/css-3.svg")} alt="css logo" />
        </StyledHexagon>
        <StyledHexagon>
          <StyledImgJ height="55rem" src={require("../../../public/logo/logo-javascript.svg")} alt="javascript logo" />
        </StyledHexagon>
        <StyledHexagon>
          <StyledImgC height="80rem" src={require("../../../public/logo/react-2.svg")} alt="react logo" />
        </StyledHexagon>
      </StyledHexRow>
    </StyledHexContainer>
  );
}

export default HexagonBG;
