import React, { useCallback } from "react";
import InfoDisplayLayout from "../components/InfoDisplayLayout";
import StepNumberDisplay from "../components/StepNumberDisplay";
import { addOnOptions, IAddOnOption, layout } from "../constants";
import { useScreenSizeUpdate } from "../hooks/useScreenSizeUpdate";
import { ReactComponent as BgSidebarDesktop } from "../assets/images/bg-sidebar-desktop.svg";
import { useNavigate } from "react-router-dom";
import { AOCard } from "../components/Cards";

const AddOns: React.FC = () => {
  const screenSize = useScreenSizeUpdate();
  const navigate = useNavigate();

  const handleGoBackButton = useCallback(() => {
    navigate("/select-your-plan");
  }, [navigate]);

  const handleNextButton = useCallback(() => {
    navigate("/finish");
  }, [navigate]);
  return (
    <>
      <section className="ao-section">
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
          <div className="ao-pane">
            <h2 className="ao-title">Pick add-ons</h2>
            <p className="ao-title-description">
              Add-ons help enhance your gaming experience.
            </p>
            <section className="ao-cards">
              {addOnOptions.map(
                (addOnOption: IAddOnOption, optionIndex: number) => (
                  <AOCard
                    price={addOnOption.price}
                    description={addOnOption.description}
                    title={addOnOption.title}
                    key={`${addOnOption.title}-${optionIndex}`}
                  />
                )
              )}
            </section>

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
        <footer className="ao-footer">
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

export default AddOns;
