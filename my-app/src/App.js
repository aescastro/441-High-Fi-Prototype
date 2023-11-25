import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Excel,
  Prototype,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="excel" element={<Excel />} />
      <Route path="prototype" element={<Prototype />} />
    </Routes>
  );
}

export default App;
