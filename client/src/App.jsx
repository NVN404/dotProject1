import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import Hero from './components/Hero';

import Home from './components/Home';
import ContactUs from './components/ContactUs';

import { AdmissionContext } from './components/context/AdmissionContext';
import HeaderTemp from './components/HeaderTemp';

const App = () => {
  const [openAdmissionForm, setOpenAdmissionForm] = useState(false);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full -z-50">
        <div className="bg-[url('/bg.jpg')] bg-cover bg-center w-full h-full opacity-[65%]">      
        </div>
      </div>

      <AdmissionContext.Provider value={{ openAdmissionForm, setOpenAdmissionForm }}>
        {/* Wrap everything inside BrowserRouter */}
        <BrowserRouter>
          <Hero />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>   
      </AdmissionContext.Provider>
    </div>
  );
};

export default App;
