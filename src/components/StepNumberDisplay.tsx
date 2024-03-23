import React from "react";
import { layout, numbers, pathNamesPerNumber } from "../constants";

import "../styles/StepNumberDisplay.css";
import { useLocation } from "react-router";
import { useScreenSizeUpdate } from "../hooks/useScreenSizeUpdate";

const StepNumberDisplay: React.FC = () => {
  const location = useLocation();
  const screenSize = useScreenSizeUpdate();

  return (
    <section className="std-section">
      {numbers.map((number: number, index: number) =>
        screenSize <= layout.mobile ? (
          <span
            className={`hollow-num ${
              location.pathname === pathNamesPerNumber[number].path &&
              "filled-num"
            }`}
            key={`${number}-${index}`}
          >
            {number}
          </span>
        ) : (
          <div className="std-container" key={`${number}-${index}`}>
            <span
              className={`hollow-num ${
                location.pathname === pathNamesPerNumber[number].path &&
                "filled-num"
              }`}
            >
              {number}
            </span>
            <div className="std-step-description-container">
              <p className="std-step-title">STEP {number}</p>
              <p className="std-step-description">
                {pathNamesPerNumber[number].planTitle}
              </p>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default StepNumberDisplay;
