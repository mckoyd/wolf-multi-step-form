import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<p>Welcome home</p>} />
      </Routes>
    </main>
  );
};

export default App;
