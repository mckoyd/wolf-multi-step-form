import React from 'react';
import { numbers, pathNamesPerNumber } from '../constants';

import '../styles/StepNumberDisplay.css';
import { useLocation } from 'react-router';

const StepNumberDisplay: React.FC = () => {
  const location = useLocation();

  return (
    <section className="std-section">
      {numbers.map((number: number, index: number) => (
        <span
          className={`hollow-num ${
            location.pathname === pathNamesPerNumber[number] && 'filled-num'
          }`}
          key={`${number}-${index}`}
        >
          {number}
        </span>
      ))}
    </section>
  );
};

export default StepNumberDisplay;
