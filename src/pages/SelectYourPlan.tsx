import React, { useCallback, useState } from 'react';
import StepNumberDisplay from '../components/StepNumberDisplay';
import InfoDisplayLayout from '../components/InfoDisplayLayout';
import { ReactComponent as ArcadeIcon } from '../assets/images/icon-arcade.svg';

import '../styles/SelectYourPlan.css';
import { IPlanOption, planOptions } from '../constants';
import { SYPCard } from '../components/Cards';
import { useNavigate } from 'react-router-dom';

function SelectYourPlan() {
  const navigate = useNavigate();

  const [displayYearly, setDisplayYearly] = useState<boolean>(false);

  const handleNextButton = useCallback(() => {
    navigate('/add-ons');
  }, []);
  const handleGoBackButton = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handlePlanTypeToggle = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setDisplayYearly(event.currentTarget.checked);
    },
    [],
  );
  return (
    <>
      <section className="syp-section">
        <StepNumberDisplay />
        <InfoDisplayLayout>
          <h2 className="syp-title">Select your plan</h2>
          <p className="syp-description">
            You have the option of monthly or yearly billing.
          </p>
          <section className="syp-cards">
            {planOptions.map(({ Icon, title, price }: IPlanOption) => (
              <SYPCard
                Icon={Icon}
                title={title}
                price={displayYearly ? price * 10 : price}
                rate={displayYearly ? 'yr' : 'mo'}
                displayYearly={displayYearly}
                key={`${title}-${displayYearly ? price * 10 : price}`}
              />
            ))}
            <div className="plan-type-toggle">
              <p className="plan-type">Monthly</p>
              <input
                type="checkbox"
                className="toggle"
                id="toggle"
                onChange={handlePlanTypeToggle}
              />
              <label htmlFor="toggle" className="toggle-label">
                Toggle
              </label>
              <p className="plan-type">Yearly</p>
            </div>
          </section>
        </InfoDisplayLayout>
      </section>
      <footer className="syp-footer">
        <button className="go-back-button" onClick={handleGoBackButton}>
          Go Back
        </button>
        <button className="next-button" onClick={handleNextButton}>
          Next Step
        </button>
      </footer>
    </>
  );
}

export default SelectYourPlan;
