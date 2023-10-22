import React, { useEffect, useState } from "react";
import styled from "styled-components";

// This site is Open Source and powered by Github Pages
// Last Updated 2023

const StyledFooter = styled.footer`
  background-color: var(--color-grey-800);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  @media (max-width: 44em) {
    flex-direction: column;
    text-align: center;
  }
`;

function Footer() {
  let [year, setYear] = useState();
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <StyledFooter>
      <div>Copyright &copy; {year} by Kenji Peralejo</div>
      <div>Powered by Github Pages</div>
    </StyledFooter>
  );
}

export default Footer;
