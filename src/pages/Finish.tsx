import React, { useCallback, useEffect } from "react";
import InfoDisplayLayout from "../components/InfoDisplayLayout";
import StepNumberDisplay from "../components/StepNumberDisplay";
import { layout } from "../constants";
import { useScreenSizeUpdate } from "../hooks/useScreenSizeUpdate";
import { ReactComponent as BgSidebarDesktop } from "../assets/images/bg-sidebar-desktop.svg";
import { useNavigate } from "react-router-dom";

import "../styles/Finish.css";
import { useRecoilState } from "recoil";
import { selecetedPlanOptionState } from "../state/planOptionData";
import { addOnState } from "../state/addOnState";

const Finish: React.FC = () => {
  const screenSize = useScreenSizeUpdate();
  const navigate = useNavigate();

  const [planOption, setPlanOption] = useRecoilState(selecetedPlanOptionState);
  const [addOns, setAddOns] = useRecoilState(addOnState);

  const handleGoBackButton = useCallback(() => {
    navigate("/add-ons");
    setAddOns([] as { title: string; price: number }[]);
  }, [navigate]);

  const handleConfirmButton = useCallback(() => {
    navigate("/thanks");
  }, [navigate]);

  const handleChangePlanButton = useCallback(() => {
    setPlanOption({} as { price: number; title: string; isYearly: boolean });
    setAddOns([] as { title: string; price: number }[]);
    navigate("/select-your-plan");
  }, [navigate]);

  useEffect(() => {
    console.log("planOption: ", planOption);
    console.log("addOns: ", addOns);
  }, [planOption, addOns]);
  return (
    <>
      <section className="finish-section">
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
          <div className="finish-pane">
            <h2 className="finish-title">Finishing up</h2>
            <p className="finish-title-description">
              Double-check everything looks OK before confirming.
            </p>
            <div className="summary-container">
              <div className="plan-container">
                <div className="plan-details">
                  <p className="finish-plan-title">
                    {planOption.title} (
                    {planOption.isYearly ? "Yearly" : "Monthly"})
                  </p>
                  <button
                    type="button"
                    onClick={handleChangePlanButton}
                    className="finish-change-btn"
                  >
                    <span className="finish-change-btn-text">Change</span>
                  </button>
                </div>
                <p className="finish-plan-price">
                  ${planOption.price}/{planOption.isYearly ? "yr" : "mo"}
                </p>
              </div>
              <hr className="finish-divider" />
              <div className="finish-add-ons-container">
                {addOns.map((addOn, index) => {
                  return (
                    <div className="add-on-row" key={`${addOn.title}-${index}`}>
                      <span className="finish-add-on-title">{addOn.title}</span>
                      <span className="finish-add-on-price">
                        +${addOn.price}/{planOption.isYearly ? "yr" : "mo"}
                      </span>
                    </div>
                  );
                })}
                <div className="total-row">
                  <span className="total-row-title">
                    Total (per {planOption.isYearly ? "year" : "month"})
                  </span>
                  <span className="total-price">
                    +$
                    {planOption.price +
                      addOns.reduce(
                        (totalAddOnPrice, addOn) =>
                          totalAddOnPrice + addOn.price,
                        0
                      )}
                    /{planOption.isYearly ? "yr" : "mo"}
                  </span>
                </div>
              </div>
            </div>

            {screenSize > layout.mobile && (
              <footer className="syp-footer">
                <button className="go-back-button" onClick={handleGoBackButton}>
                  Go Back
                </button>
                <button className="next-button" onClick={handleConfirmButton}>
                  Confirm
                </button>
              </footer>
            )}
          </div>
        </InfoDisplayLayout>
      </section>
      {screenSize <= layout.mobile && (
        <footer className="ao-footer">
          <button className="go-back-button" onClick={handleGoBackButton}>
            Go Back
          </button>
          <button className="next-button" onClick={handleConfirmButton}>
            Confirm
          </button>
        </footer>
      )}
    </>
  );
};

export default Finish;
