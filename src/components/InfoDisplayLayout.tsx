import React from 'react';

import '../styles/InfoDisplayLayout.css';

interface IInfoDisplayLayout {
  children: string | JSX.Element | JSX.Element[];
}

const InfoDisplayLayout: React.FC<IInfoDisplayLayout> = ({ children }) => <section className="info-display-container">{children}</section>;

export default InfoDisplayLayout;
