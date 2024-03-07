import React from "react";
import "../styles/PersonalInfo.css";
import StepNumberDisplay from "../components/StepNumberDisplay";

const PersonalInfo: React.FC = () => {
  return (
    <section className="pi-section">
      <StepNumberDisplay />
    </section>
  );
};

export default PersonalInfo;
