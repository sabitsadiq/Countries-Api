import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Navbar from "./components/Navbar";
import SingleCountryInfo from "./components/SingleCountryInfo";
function App() {
  return (
    <div div className="main-wrapper">
      <Navbar />
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Country />}></Route>
            <Route path="/:name" element={<SingleCountryInfo />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
