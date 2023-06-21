import logo from './logo.svg';
import './App.css';
import HraCalculator from "./component/HraCalculator";
import { Route, Routes } from "react-router-dom";
import AdvanceTax from "./component/AdvanceTax";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advancetax" element={<AdvanceTax />} />
        <Route path="/hra" element={<HraCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
