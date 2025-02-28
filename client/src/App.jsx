import React, { useState, useMemo, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { AdmissionContext } from "./components/context/AdmissionContext";

// Lazy-loaded components for better performance
const Home = lazy(() => import("./components/Home"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Gallery = lazy(() => import("./components/Gallery"));
const NoticeBoard = lazy(() => import("./components/NoticeBoard"));
const AdminLogin = lazy(() => import("./components/AdminLogin"));
const AdminPanel = lazy(() => import("./components/AdminPanel"));

const App = () => {
  const [openAdmissionForm, setOpenAdmissionForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Read from localStorage once and store in state
    setIsAdmin(localStorage.getItem("admin") === "true");
  }, []);

  // Memoizing the context value to prevent unnecessary renders
  const admissionContextValue = useMemo(
    () => ({ openAdmissionForm, setOpenAdmissionForm }),
    [openAdmissionForm]
  );

  return (
    <div className="relative">
      <AdmissionContext.Provider value={admissionContextValue}>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/circular" element={<NoticeBoard />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin" element={isAdmin ? <AdminPanel /> : <Navigate to="/admin-login" />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </AdmissionContext.Provider>
    </div>
  );
};

export default App;
