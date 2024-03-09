import React from "react";
import "../styles/PersonalInfo.css";
import StepNumberDisplay from "../components/StepNumberDisplay";
import InfoDisplayLayout from "../components/InfoDisplayLayout";
import FormInput from "../components/FormInput";

const PersonalInfo: React.FC = () => {
  return (
    <section className="pi-section">
      <StepNumberDisplay />
      <InfoDisplayLayout>
        <h2 className="pi-title">Personal info</h2>
        <p className="pi-description">
          Please provide your name, email address, and phone number.
        </p>
        <FormInput formLabelText="Name" placeholderText="e.g. Stephen King" />
        <FormInput
          formLabelText="Email Address"
          placeholderText="e.g. stephenking@lorem.com"
        />
        <FormInput
          formLabelText="Phone Number"
          placeholderText="e.g. +1 234 567 890"
        />
      </InfoDisplayLayout>
    </section>
  );
};

export default PersonalInfo;
