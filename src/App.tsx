import { useState } from "react";
import LandingPage from "./Views/LandingPage/LandingPage";
import Dashboard from "./Views/Dashboard/Dashboard";
import RegisterPage from "./Views/RegisterPage/RegisterPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [activeSection, setActiveSection] = useState("Public Profile");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/register"
          element={
            <RegisterPage
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
