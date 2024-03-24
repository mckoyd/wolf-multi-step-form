import React from "react";
import InfoDisplayLayout from "../components/InfoDisplayLayout";
import StepNumberDisplay from "../components/StepNumberDisplay";
import { layout } from "../constants";
import { useScreenSizeUpdate } from "../hooks/useScreenSizeUpdate";
import { ReactComponent as BgSidebarDesktop } from "../assets/images/bg-sidebar-desktop.svg";
import { ReactComponent as ThankYouIcon } from "../assets/images/icon-thank-you.svg";
import "../styles/Thanks.css";

const Thanks: React.FC = () => {
  const screenSize = useScreenSizeUpdate();
  return (
    <section className="thanks-section">
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
        <div className="thanks-pane">
          <ThankYouIcon className="thank-you-icon" />
          <p className="title">Thank you!</p>
          <p className="thank-you-text">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </InfoDisplayLayout>
    </section>
  );
};

export default Thanks;
