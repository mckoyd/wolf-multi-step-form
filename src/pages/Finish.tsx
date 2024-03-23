import React, { useCallback } from "react";
import InfoDisplayLayout from "../components/InfoDisplayLayout";
import StepNumberDisplay from "../components/StepNumberDisplay";
import { layout } from "../constants";
import { useScreenSizeUpdate } from "../hooks/useScreenSizeUpdate";
import { ReactComponent as BgSidebarDesktop } from "../assets/images/bg-sidebar-desktop.svg";
import { useNavigate } from "react-router-dom";

import "../styles/Finish.css";

const Finish: React.FC = () => {
  const screenSize = useScreenSizeUpdate();
  const navigate = useNavigate();

  const handleGoBackButton = useCallback(() => {
    navigate("/add-ons");
  }, []);

  const handleConfirmButton = useCallback(() => {
    navigate;
  }, []);
  return (
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
          <h2 className="finish-title">Pick add-ons</h2>
          <p className="finish-title-description">
            Add-ons help enhance your gaming experience.
          </p>

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
  );
};

export default Finish;
