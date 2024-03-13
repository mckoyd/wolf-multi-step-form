import React from "react";
import { Routes, Route } from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import { ReactComponent as BgSidebarMobile } from "../assets/images/bg-sidebar-mobile.svg";
import { useScreenSizeUpdate } from "../hooks/useScreenSizeUpdate";

import "../styles/App.css";
import { layout } from "../constants";
import SelectYourPlan from "./SelectYourPlan";

const App: React.FC = () => {
  const screenSize = useScreenSizeUpdate();

  return (
    <section className="app-section">
      {screenSize <= layout.mobile && (
        <BgSidebarMobile className="bg-sidebar-mobile" />
      )}
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/select-your-plan" element={<SelectYourPlan />} />
        <Route path="/add-ons" element={<h2>Add-ons</h2>} />
        <Route path="/finish" element={<h2>Finish</h2>} />
      </Routes>
    </section>
  );
};

export default App;
