import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${props =>
    props.as === "h1" &&
    css`
      font-size: 8rem;
      font-weight: 700;
      @media (max-width: 75em) {
        font-size: 7rem;
      }
      @media (max-width: 59em) {
        font-size: 5rem;
      }
    `}

  ${props =>
    props.as === "h2" &&
    css`
      padding-top: 0.5rem;
      font-size: 2rem;
      font-weight: 600;
      @media (max-width: 75em) {
        // font-size: 1.75rem;
      }
      @media (max-width: 59em) {
        font-size: 1.5rem;
      }
      @media (max-width: 44em) {
        font-size: 1.5rem;
      }
      @media (max-width: 34em) {
        font-size: 1.5rem;
      }
    `}

  ${props =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      @media (max-width: 59em) {
        font-size: 1.25rem;
      }
    `}

  ${props =>
    props.as === "h4" &&
    css`
      font-size: 4rem;
      font-weight: 600;
      text-align: center;
    `}

  ${props =>
    props.as === "h5" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  line-height: 1.4;
  align-self: center;
`;

export default Heading;
