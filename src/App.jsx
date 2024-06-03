import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Experiences from "./pages/Experiences";
import Footer from "./pages/Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="">

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer/>

        {/* <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<> <About/> <Skills /> </>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
