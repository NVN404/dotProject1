import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";
import { AdmissionContext } from "./context/AdmissionContext";

gsap.registerPlugin(ScrollTrigger);

const HeaderForOthers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setOpenAdmissionForm } = useContext(AdmissionContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname);

  useEffect(() => {
    // Update active menu item when route changes
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (menuRef.current) {
      isOpen ? menuRef.current.removeAttribute("inert") : menuRef.current.setAttribute("inert", "true");
    }
  }, [isOpen]);

  const toggleMenu = (state) => {
    setIsOpen(state);
    gsap.to(menuRef.current, { right: state ? "0%" : "-100%", duration: 0.5, ease: "linear" });

    if (state) {
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "linear" }
      );
    }
  };

  const handleNavigation = (path) => {
    toggleMenu(false);
    navigate(path);
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 bg-background z-50 shadow-[0px_8px_20px_rgba(0,0,0,0.7)]">
      {/* Header Section */}
      <header className="w-full h-[7em] md:h-[9em] flex items-center justify-between px-4 md:px-[3em]">
        <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => handleNavigation("/")}>
          <img src="/DobbespetPublicSchool.png" className="h-[5em] md:h-[7em] invert" alt="School Logo" />
          <span className="text-white text-lg sm:text-lg font-bold font-newsreader">Dobbespet Public School</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center text-white font-semibold space-x-6 lg:space-x-8 xl:space-x-12">
          {["/", "/aboutus", "/academics", "/circular", "/admission", "/gallery", "/contact"].map((path, idx) => (
            <li
              key={idx}
              className={`relative after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer ${
                activeMenuItem === path ? "after:w-full" : "after:w-0"
              }`}
              onClick={() => handleNavigation(path)}
            >
              {path.slice(1).toUpperCase() || "HOME"}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white text-3xl" onClick={() => toggleMenu(true)} aria-label="Open navigation menu">
          <AiOutlineMenuFold />
        </button>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-[-100%] w-[80%] h-screen bg-background/60 backdrop-blur-sm font-bold text-white flex flex-col items-center justify-center text-lg space-y-5 z-50 transition-all"
        >
          <button className="absolute top-4 right-6 text-3xl" onClick={() => toggleMenu(false)} aria-label="Close navigation menu">
            <RiCloseLargeLine />
          </button>
          <ul className="flex flex-col text-xl justify-center items-center">
            {["/", "/aboutus", "/academics", "/circular", "/admission", "/gallery", "/contact"].map((path, idx) => (
              <li
                key={idx}
                ref={(el) => (menuItemsRef.current[idx] = el)}
                className="mb-[2em] cursor-pointer"
                onClick={() => handleNavigation(path)}
              >
                {path.slice(1).toUpperCase() || "HOME"}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderForOthers;
