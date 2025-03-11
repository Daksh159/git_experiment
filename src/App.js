import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CardsSection from "./components/CardsSection";
import ImageGallery from "./components/ImageGallery";
import "./styles/custom.css";

function App() {
  return (
    <Router>
      <div className="page-transition">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <div className="section-padding">
                <CardsSection />
              </div>
            </>
          } />
          <Route path="/about" element={
            <div className="section-padding">
              <About />
            </div>
          } />
          <Route path="/gallery" element={
            <div className="section-padding">
              <ImageGallery />
            </div>
          } />
          <Route path="/contact" element={
            <div className="section-padding">
              <Contact />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;