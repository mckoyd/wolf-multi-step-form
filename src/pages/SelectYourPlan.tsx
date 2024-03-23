import React, { useCallback, useState } from "react";
import StepNumberDisplay from "../components/StepNumberDisplay";
import InfoDisplayLayout from "../components/InfoDisplayLayout";
import { ReactComponent as BgSidebarDesktop } from "../assets/images/bg-sidebar-desktop.svg";

import "../styles/SelectYourPlan.css";
import { IPlanOption, layout, planOptions } from "../constants";
import { SYPCard } from "../components/Cards";
import { useNavigate } from "react-router-dom";
import { useScreenSizeUpdate } from "../hooks/useScreenSizeUpdate";

const SelectYourPlan = () => {
  const navigate = useNavigate();
  const screenSize = useScreenSizeUpdate();

  const [displayYearly, setDisplayYearly] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const handleNextButton = useCallback(() => {
    navigate("/add-ons");
  }, []);
  const handleGoBackButton = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handlePlanTypeToggle = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setDisplayYearly(event.currentTarget.checked);
    },
    []
  );

  const handlePlanClick = useCallback((planIndex: number) => {
    setSelectedCard(planIndex);
  }, []);

  return (
    <>
      <section className="syp-section">
        {screenSize <= layout.mobile && <StepNumberDisplay />}
        <InfoDisplayLayout>
          {screenSize > layout.mobile ? (
            <div className="step-display-desktop-layout">
              <StepNumberDisplay />
              <BgSidebarDesktop className="bg-sidebar-desktop" />
            </div>
          ) : (
            <></>
          )}
          <div className="syp-pane">
            <h2 className="syp-title">Select your plan</h2>
            <p className="syp-description">
              You have the option of monthly or yearly billing.
            </p>
            <section className="syp-cards">
              {planOptions.map(
                ({ Icon, title, price }: IPlanOption, index: number) => (
                  <SYPCard
                    Icon={Icon}
                    title={title}
                    price={displayYearly ? price * 10 : price}
                    rate={displayYearly ? "yr" : "mo"}
                    displayYearly={displayYearly}
                    key={`${title}-${displayYearly ? price * 10 : price}`}
                    planIndex={index}
                  />
                )
              )}
            </section>
            <div className="plan-type-toggle">
              <p className={`plan-type ${displayYearly && "inactive"}`}>
                Monthly
              </p>
              <input
                type="checkbox"
                className="toggle"
                id="toggle"
                onChange={handlePlanTypeToggle}
              />
              <label htmlFor="toggle" className="toggle-label">
                Toggle
              </label>
              <p className={`plan-type ${!displayYearly && "inactive"}`}>
                Yearly
              </p>
            </div>
            {screenSize > layout.mobile && (
              <footer className="syp-footer">
                <button className="go-back-button" onClick={handleGoBackButton}>
                  Go Back
                </button>
                <button className="next-button" onClick={handleNextButton}>
                  Next Step
                </button>
              </footer>
            )}
          </div>
        </InfoDisplayLayout>
      </section>
      {screenSize <= layout.mobile && (
        <footer className="syp-footer">
          <button className="go-back-button" onClick={handleGoBackButton}>
            Go Back
          </button>
          <button className="next-button" onClick={handleNextButton}>
            Next Step
          </button>
        </footer>
      )}
    </>
  );
};

export default SelectYourPlan;
