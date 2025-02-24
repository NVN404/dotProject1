import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/Footer';

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';

import { AdmissionContext } from './components/context/AdmissionContext';
import NoticeBoard from './components/NoticeBoard';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/circular" element={<NoticeBoard />} />
          </Routes>
          <Footer />
        </BrowserRouter>   
      </AdmissionContext.Provider>
    </div>
  );
};

export default App;