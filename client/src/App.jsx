import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';

import { AdmissionContext } from './components/context/AdmissionContext';
import NoticeBoard from './components/NoticeBoard';

import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";


const App = () => {
  const [openAdmissionForm, setOpenAdmissionForm] = useState(false);
  const isAdmin = localStorage.getItem("admin") === "true";


  return (
    <div className="relative">
      {/* <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="bg-[url('/bg.jpg')] bg-cover bg-center w-full h-full opacity-[65%]">      
        </div>
      </div> */}

      <AdmissionContext.Provider value={{ openAdmissionForm, setOpenAdmissionForm }}>
        {/* Wrap everything inside BrowserRouter */}
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/circular" element={<NoticeBoard />} />
             {/* Admin Login */}
            <Route path="/admin-login" element={<AdminLogin />} />
            {/* Admin Panel (Protected Route) */}
            <Route
              path="/admin"
              element={isAdmin ? <AdminPanel /> : <Navigate to="/admin-login" />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>   
      </AdmissionContext.Provider>
    </div>
  );
};

export default App;