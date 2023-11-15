import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./components/styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocumentMeta from "react-document-meta";

// Pages
import AppLayout from "./components/common/AppLayout";
import HomeLayout from "./components/homepage/HomeLayout";
const AboutLayout = React.lazy(() => import("./components/aboutPage/AboutLayout"));
const ExperienceLayout = React.lazy(() => import("./components/expPage/ExperienceLayout"));
const SkillsLayout = React.lazy(() => import("./components/historyPage/SkillsLayout"));
import PageNotFound from "./components/common/PageNotFound";
import LoadingDotsIcon from "./components/common/LoadingDotsIcon";

function App() {
  const meta = {
    title: "Kenji Peralejo",
    description: "I am Kenji Peralejo, and I build and design systems",
    canonical: "https://frankenworks.github.io/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "kenji,peralejo,senior,software,engineer,data,scientist,communication,japanese,filipino"
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<LoadingDotsIcon />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/experience/*" element={<ExperienceLayout />} />
              <Route path="/skills" element={<SkillsLayout />} />
              <Route path="/about-me" element={<AboutLayout />} />
            </Route>
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </DocumentMeta>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
