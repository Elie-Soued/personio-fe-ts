import React from "react";
import LandingPage from "./Views/LandingPage/LandingPage";
import Dashboard from "./Views/Dashboard/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
