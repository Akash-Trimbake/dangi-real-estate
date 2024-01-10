import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Test from "./components/test";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
