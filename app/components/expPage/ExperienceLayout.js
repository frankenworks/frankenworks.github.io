import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";

import ExperienceSelector from "./ExperienceSelector";
import ExpHighSchool from "./expPages/expHighSchool";
import PageNotFound from "../common/PageNotFound";
import ExpNotFound from "./expPages/ExpNotFound";
import ExpCollege from "./expPages/ExpCollege";

const StyledExpLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-row-gap: 2rem;
  height: 80vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function ExperienceLayout() {
  return (
    <StyledExpLayout>
      <ExperienceSelector />
      <Routes>
        <Route index element={<Navigate replace to="/experience/pr-4" />} />
        <Route path="/ed-1" element={<ExpHighSchool />} />
        <Route path="/ed-2" element={<ExpCollege />} />
        <Route path="/wk-1" element={<ExpHighSchool />} />
        <Route path="/pr-1" element={<ExpHighSchool />} />
        <Route path="/pr-2" element={<ExpHighSchool />} />
        <Route path="/pr-3" element={<ExpHighSchool />} />
        <Route path="/pr-4" element={<ExpHighSchool />} />
        <Route path="/*" element={<ExpNotFound />} />
      </Routes>
    </StyledExpLayout>
  );
}

export default ExperienceLayout;
