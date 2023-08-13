import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BusesListing from "./Component/Container/BusesListing";
import BusDetails from "./Component/Container/BusDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BusesListing />} />
          <Route path="/:propId" element={<BusDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
