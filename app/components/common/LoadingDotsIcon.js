import React, { useEffect } from "react";
import styled from "styled-components";

const StyledEmpty = styled.div`
  background-color: #000;
  height: 100vh;
`;

function LoadingDotsIcon() {
  return (
    <StyledEmpty>
      <div></div>
    </StyledEmpty>
  );
}

export default LoadingDotsIcon;
