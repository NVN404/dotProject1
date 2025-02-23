import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Academics from './components/Academics';
import Profiles from './components/Profiles';
import StatsCounter from './components/StatsCounter';
import Toppers from './components/Toppers';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

import { BrowserRouter } from 'react-router-dom';
import Academics from "./components/Academics";
import Profiles from "./components/Profiles";
import StatsCounter from "./components/StatsCounter";
import Toppers from "./components/Toppers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NoticeBoard from "./components/NoticeBoard";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";

import { AdmissionContext } from "./components/context/AdmissionContext";

const App = () => {
  const [openAdmissionForm, setOpenAdmissionForm] = useState(false);
  const isAdmin = localStorage.getItem("admin") === "true";

  return (
    <AdmissionContext.Provider value={{ openAdmissionForm, setOpenAdmissionForm }}>
      <Router>
        <Routes>
          {/* Public Website */}
          <Route
            path="/"
            element={
              <div className="relative">
                <Hero />
                <Profiles />
                <NoticeBoard />
                <StatsCounter />
                <Toppers />
                <Academics />
                <Footer />
              </div>
            }
          />

          {/* Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Admin Panel (Protected Route) */}
          <Route
            path="/admin"
            element={isAdmin ? <AdminPanel /> : <Navigate to="/admin-login" />}
          />

        </Routes>
      </Router>
    </AdmissionContext.Provider>
  );
};

export default App;
