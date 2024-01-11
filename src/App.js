import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ServiceDetail from "./Components/ServicesDetails";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
