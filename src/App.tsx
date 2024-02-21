import LandingPage from "./Views/LandingPage/LandingPage";
import Dashboard from "./Views/Dashboard/Dashboard";
import RegisterPage from "./Views/RegisterPage/RegisterPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/:username" element={<Dashboard />}></Route>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
