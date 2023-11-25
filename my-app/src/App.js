import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Excel,
  RuleDefining,
  TeamAdjustments,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="excel" element={<Excel />} />
      <Route path="prototype" element={<RuleDefining />} />
      <Route path="team-adjustments" element={<TeamAdjustments />} />
    </Routes>
  );
}

export default App;
