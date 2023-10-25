import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";

import ExperienceSelector from "./ExperienceSelector";
import ExpHighSchool from "./expPages/expHighSchool";
import ExpNotFound from "./expPages/ExpNotFound";
import ExpCollege from "./expPages/ExpCollege";
import ExpMasters from "./expPages/ExpMasters";
import ExpInvestors from "./expPages/ExpInvestors";
import ExpWebDev from "./expPages/ExpWebDev";

const StyledExpLayout = styled.div`
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
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

function ExperienceLayout() {
  return (
    <StyledExpLayout>
      <ExperienceSelector />
      <Routes>
        <Route index element={<Navigate replace to="/experience/wk-2" />} />
        <Route path="/ed-1" element={<ExpHighSchool />} />
        <Route path="/ed-2" element={<ExpCollege />} />
        <Route path="/ed-3" element={<ExpMasters />} />
        <Route path="/wk-1" element={<ExpWebDev />} />
        <Route path="/wk-2" element={<ExpInvestors />} />
        <Route path="/*" element={<ExpNotFound />} />
      </Routes>
    </StyledExpLayout>
  );
}

export default ExperienceLayout;
