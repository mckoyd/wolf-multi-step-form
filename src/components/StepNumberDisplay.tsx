import React from "react";
import { numbers } from "../constants";

const StepNumberDisplay: React.FC = () => {
  return (
    <section className="std-section">
      {numbers.map((number: number, index: number) => (
        <span className="hollow-num" key={`${number}-${index}`}>
          {number}
        </span>
      ))}
    </section>
  );
};

export default StepNumberDisplay;
