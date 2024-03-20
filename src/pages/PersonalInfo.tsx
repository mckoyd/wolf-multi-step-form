import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import StepNumberDisplay from '../components/StepNumberDisplay';
import InfoDisplayLayout from '../components/InfoDisplayLayout';
import FormInput from '../components/FormInput';
import {
  emailAddressState,
  nameState,
  phoneNumberState,
} from '../state/personalInfoFormData';

import '../styles/PersonalInfo.css';
import { useNavigate } from 'react-router';

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();

  const [showNameErrorBorder, setShowNameErrorBorder] = useState<boolean>(false);
  const [showEmailAddressErrorBorder, setEmailAddressErrorBorder] = useState<boolean>(false);
  const [showPhoneNumberErrorBorder, setPhoneNumberErrorBorder] = useState<boolean>(false);

  const [PIName, setPIName] = useRecoilState(nameState);
  const [PIEmailAddress, setPIEmailAddress] = useRecoilState(emailAddressState);
  const [PIPhoneNumber, setPIPhoneNumber] = useRecoilState(phoneNumberState);

  const handleNameChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPIName(e.currentTarget.value);
    },
    [],
  );

  const handleEmailAddressChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPIEmailAddress(e.currentTarget.value);
    },
    [],
  );

  const handlePhoneNumberChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPIPhoneNumber(e.currentTarget.value);
    },
    [],
  );

  const handleNextButton = useCallback(() => {
    if (PIName === '') {
      setShowNameErrorBorder(true);
      return;
    }
    if (PIEmailAddress === '') {
      setEmailAddressErrorBorder(true);
      return;
    }
    if (PIPhoneNumber === '') {
      setPhoneNumberErrorBorder(true);
      return;
    }

    navigate('/select-your-plan');
  }, [PIName, PIEmailAddress, PIPhoneNumber]);

  useEffect(() => {
    if (PIName !== '') setShowNameErrorBorder(false);
    if (PIEmailAddress !== '') setEmailAddressErrorBorder(false);
    if (PIPhoneNumber !== '') setPhoneNumberErrorBorder(false);
  }, [PIName, PIEmailAddress, PIPhoneNumber]);

  return (
    <>
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
            showErrorBorder={showNameErrorBorder}
          />
          <FormInput
            formLabelText="Email Address"
            placeholderText="e.g. stephenking@lorem.com"
            handler={handleEmailAddressChange}
            showErrorBorder={showEmailAddressErrorBorder}
          />
          <FormInput
            formLabelText="Phone Number"
            placeholderText="e.g. +1 234 567 890"
            handler={handlePhoneNumberChange}
            showErrorBorder={showPhoneNumberErrorBorder}
          />
        </InfoDisplayLayout>
      </section>
      <footer className="pi-footer">
        <button className="next-button" onClick={handleNextButton}>
          Next Step
        </button>
      </footer>
    </>
  );
};

export default PersonalInfo;
