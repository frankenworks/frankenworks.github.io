import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";

const StyledHexContainer = styled.div`
  position: relative;
  align-self: center;
  padding-top: 2rem;
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
  @media (max-width: 34em) {
    margin-top: -14px;
    margin-left: 26px;
  }

  &:first-child {
    margin-top: 0;
  }

  &:nth-child(even) {
    margin-left: 1px;
  }
`;

const StyledHexagon = styled.div`
  position: relative;
  border: none;
  width: 100px;
  height: 110px;
  background: #111;
  margin: 1px;
  z-index: 2;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 2s;
  @media (max-width: 34em) {
    width: 50px;
    height: 55px;
  }

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
  @media (max-width: 34em) {
    height: 4rem;
    top: 7px;
    left: 7px;
  }
`;

const StyledImgH = styled.img`
  position: absolute;
  display: flex;
  top: 25px;
  left: 25px;
  z-index: 2;
  @media (max-width: 34em) {
    height: 3rem;
    top: 14px;
    left: 12px;
  }
`;

const StyledImgP = styled.img`
  position: absolute;
  display: flex;
  top: 22px;
  left: 20px;
  z-index: 2;
  @media (max-width: 34em) {
    height: 3rem;
    top: 12px;
    left: 10px;
  }
`;
const StyledImgJ = styled.img`
  position: absolute;
  display: flex;
  top: 24px;
  left: 23px;
  z-index: 2;
  @media (max-width: 34em) {
    height: 2.5rem;
    top: 14px;
    left: 13px;
  }
`;

const StyledTooltip = styled(Tooltip)`
  z-index: 3;
  font-weight: bold;
  border: 1px solid white;
`;

function SkillsHexagon({ filterField, options }) {
  return (
    <StyledHexContainer>
      <StyledHexRow>
        <StyledHexagon data-tooltip-id="cpp-tooltip" data-tooltip-content="C++">
          <StyledImgC height="80rem" src={require("../../../public/logo/cpp.svg")} alt="cpp logo" />
        </StyledHexagon>
        <StyledTooltip noArrow={true} id="cpp-tooltip" style={{ backgroundColor: "#000", color: "#fff" }} />
        <StyledHexagon data-tooltip-id="cs-tooltip" data-tooltip-content="C#">
          <StyledImgC height="80rem" src={require("../../../public/logo/c--4.svg")} alt="csharp logo" />
        </StyledHexagon>
        <StyledTooltip noArrow={true} id="cs-tooltip" style={{ backgroundColor: "#000", color: "#fff" }} />
        <StyledHexagon data-tooltip-id="python-tooltip" data-tooltip-content="Python">
          <StyledImgP height="60rem" src={require("../../../public/logo/python-5.svg")} alt="python logo" />
        </StyledHexagon>
        <StyledTooltip noArrow={true} id="python-tooltip" style={{ backgroundColor: "#000", color: "#fff" }} />
      </StyledHexRow>
      <StyledHexRow>
        <StyledHexagon data-tooltip-id="html-tooltip" data-tooltip-content="HTML">
          <StyledImgH height="60rem" src={require("../../../public/logo/html-1.svg")} alt="html5 logo" />
        </StyledHexagon>
        <StyledTooltip noArrow={true} id="html-tooltip" style={{ backgroundColor: "#000", color: "#fff" }} />
        <StyledHexagon data-tooltip-id="css-tooltip" data-tooltip-content="CSS">
          <StyledImgH height="60rem" src={require("../../../public/logo/css-3.svg")} alt="css logo" />
        </StyledHexagon>
        <StyledTooltip noArrow={true} id="css-tooltip" style={{ backgroundColor: "#000", color: "#fff" }} />
        <StyledHexagon data-tooltip-id="js-tooltip" data-tooltip-content="Javascript">
          <StyledImgJ height="55rem" src={require("../../../public/logo/logo-javascript.svg")} alt="javascript logo" />
        </StyledHexagon>
        <StyledTooltip noArrow={true} id="js-tooltip" style={{ backgroundColor: "#000", color: "#fff" }} />
        <StyledHexagon data-tooltip-id="react-tooltip" data-tooltip-content="React">
          <StyledImgC height="80rem" src={require("../../../public/logo/react-2.svg")} alt="react logo" />
        </StyledHexagon>
        <StyledTooltip noArrow={true} id="react-tooltip" style={{ backgroundColor: "#000", color: "#fff" }} />
      </StyledHexRow>
    </StyledHexContainer>
  );
}

export default SkillsHexagon;
