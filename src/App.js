import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
