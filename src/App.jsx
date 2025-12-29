import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Tracking from "./Components/Tracking/Tracking";
import Pricing from "./Components/Pricing/Pricing";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/tracking" element={<Tracking />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />  
         <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
