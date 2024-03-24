import React from "react";
import { Routes, Route } from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import { ReactComponent as BgSidebarMobile } from "../assets/images/bg-sidebar-mobile.svg";
import { useScreenSizeUpdate } from "../hooks/useScreenSizeUpdate";

import "../styles/App.css";
import { layout } from "../constants";
import SelectYourPlan from "./SelectYourPlan";
import AddOns from "./AddOns";
import Finish from "./Finish";
import Thanks from "./Thanks";

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
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </section>
  );
};

export default App;
