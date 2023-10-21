import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./components/styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import HomeLayout from "./components/homepage/HomeLayout";
import AboutLayout from "./components/aboutPage/AboutLayout";
import AppLayout from "./components/common/AppLayout";
import ExperienceLayout from "./components/expPage/ExperienceLayout";
import SkillsLayout from "./components/historyPage/SkillsLayout";
import PageNotFound from "./components/common/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/experience/*" element={<ExperienceLayout />} />
            <Route path="/skills" element={<SkillsLayout />} />
            <Route path="/about-me" element={<AboutLayout />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
