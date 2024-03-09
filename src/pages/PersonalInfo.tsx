import React, { useCallback } from "react";
import "../styles/PersonalInfo.css";
import StepNumberDisplay from "../components/StepNumberDisplay";
import InfoDisplayLayout from "../components/InfoDisplayLayout";
import FormInput from "../components/FormInput";
import { useSetRecoilState } from "recoil";
import {
  emailAddressState,
  nameState,
  phoneNumberState,
} from "../state/personalInfoFormData";

const PersonalInfo: React.FC = () => {
  const setPIName = useSetRecoilState(nameState);
  const setPIEmailAddress = useSetRecoilState(emailAddressState);
  const setPIPhoneNumber = useSetRecoilState(phoneNumberState);

  const handleNameChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPIName(e.currentTarget.value);
    },
    []
  );

  const handleEmailAddressChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPIEmailAddress(e.currentTarget.value);
    },
    []
  );

  const handlePhoneNumberChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPIPhoneNumber(e.currentTarget.value);
    },
    []
  );

  return (
    <section className="pi-section">
      <StepNumberDisplay />
      <InfoDisplayLayout>
        <h2 className="pi-title">Personal info</h2>
        <p className="pi-description">
          Please provide your name, email address, and phone number.
        </p>
        <FormInput
          formLabelText="Name"
          placeholderText="e.g. Stephen King"
          handler={handleNameChange}
        />
        <FormInput
          formLabelText="Email Address"
          placeholderText="e.g. stephenking@lorem.com"
          handler={handleEmailAddressChange}
        />
        <FormInput
          formLabelText="Phone Number"
          placeholderText="e.g. +1 234 567 890"
          handler={handlePhoneNumberChange}
        />
      </InfoDisplayLayout>
    </section>
  );
};

export default PersonalInfo;
