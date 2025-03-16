//imports
import React, { useState, useMemo, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AcademicsComp from "./components/AcademicsComp";
import Admission from "./components/Admission";
//contexts
import { AdmissionContext } from "./components/context/AdmissionContext";
import { SelectedNoticeContext } from "./components/context/SelectedNoticeContext";
import { AdminContext } from "./components/context/AdminContext";

// Lazy-loaded components for better performance
const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Gallery = lazy(() => import("./components/Gallery"));
const NoticeBoard = lazy(() => import("./components/NoticeBoard"));
const AdminLogin = lazy(() => import("./components/AdminLogin"));
const AdminPanel = lazy(() => import("./components/AdminPanel"));

const App = () => {
  const [openAdmissionForm, setOpenAdmissionForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);
  const [login, setLogin] = useState(false);


  useEffect(() => {
    setIsAdmin(localStorage.getItem("admin") === "true");

    // Force loader to stay for at least 5 seconds
    const timer = setTimeout(() => setLoading(false), 2400);

    return () => clearTimeout(timer);
  }, []);

  // Memoizing the context value to prevent unnecessary renders
  const admissionContextValue = useMemo(
    () => ({ openAdmissionForm, setOpenAdmissionForm }),
    [openAdmissionForm]
  );

  return (
    <div className="relative">
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-background flex justify-center items-center z-50">
          <img
            src="./DobbespetPublicSchool.png"
            alt="DobbespetPublicSchool"
            className="h-[15em] md:h-[20em] animate-heartbeat invert"
          />
        </div>
      ) : (
        <SelectedNoticeContext.Provider
          value={{ selectedNoticeId, setSelectedNoticeId }}
        >
          <AdmissionContext.Provider value={admissionContextValue}>
            <AdminContext.Provider value={{ login, setLogin }}>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/circular" element={<NoticeBoard />} />
                  <Route path="/admission" element={<Admission />} />
                  <Route path="/academics" element={<AcademicsComp />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/admin-login" element={<AdminLogin />} />
                  <Route
                    path="/admin"
                    element={
                      isAdmin ? <AdminPanel /> : <Navigate to="/admin-login" />
                    }
                  />
                </Routes>
                <Footer />
              </BrowserRouter>
            </AdminContext.Provider>

          </AdmissionContext.Provider>
        </SelectedNoticeContext.Provider>
      )}
    </div>
  );
};

export default App;
