import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Updates from "./Pages/Updates";
import Privacy from "./Pages/Privacy";
import Review from "./Pages/Review";
import Reviews from "./Pages/Reviews";

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

import "./Styles/Public.css";

const App = () => {
  return (
    <div className="p-5 md:!pt-5 md:!p-[10vw] flex flex-col gap-5">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/new-review" element={<Review />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
