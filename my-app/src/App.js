import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";


import {
  Home,
  Excel,
  RuleDefining,
  TeamAdjustments,
  ExcelSmall,
  //ExcelMedium,
  ExcelLarge
} from "./pages";

//add <Route path="excel/medium" element = {<ExcelMedium />} /> to App once it is added to mockData

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="excel" element={<Excel />} />
      <Route path="prototype" element={<RuleDefining />} />
      <Route path="team-adjustments" element={<TeamAdjustments />} />
      <Route path="excel/small" element ={<ExcelSmall />} />
      <Route path="excel/large" element = {<ExcelLarge />} /> 
    </Routes>
  );
}

export default App;
