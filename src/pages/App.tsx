import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";

const App: React.FC = () => {
  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
      </Routes>
    </section>
  );
};

export default App;
