import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

import { AdmissionContext } from "./context/AdmissionContext";

gsap.registerPlugin(ScrollTrigger);

const HeaderForOthers = () => {
  const navigate = useNavigate();
  const { openAdmissionForm, setOpenAdmissionForm } = useContext(AdmissionContext);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useGSAP(() => {
    gsap.from(menuItemsRef.current, {
      x: 200,
      duration: 1,
      delay: 1,
      stagger: 0.15,
    });
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        menuRef.current.removeAttribute("inert");
      } else {
        menuRef.current.setAttribute("inert", "");
      }
    }
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(true);
    gsap.to(menuRef.current, { right: "0%", duration: 0.5, ease: "linear" });

    gsap.fromTo(
      menuItemsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "linear" }
    );
  };

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      right: "-100%",
      duration: 0.5,
      ease: "linear",
      onComplete: () => setIsOpen(false),
    });
  };

  const handleAdmissionClick = () => {
    closeMenu();
    navigate("/admission")
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 bg-[#2973B2]  z-50 shadow-[0px_8px_20px_rgba(0,0,0,0.7)]

">
      {/* Header Section */}
      <header className="w-full h-[7em] md:h-[9em] flex items-center justify-between px-4 md:px-[3em]">
        {/* Logo */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/DobbespetPublicSchool.png" className="h-[5em] md:h-[7em] invert" alt="School Logo" />
          <span className="text-white text-lg sm:text-lg font-bold font-newsreader">Dobbespet Public School</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center text-white font-semibold space-x-6 lg:space-x-8 xl:space-x-12">
          <li className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer" onClick={() => navigate("/")}>HOME</li>
          <li className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer" onClick={() => {
            navigate("/aboutus");
          }}>ABOUT US</li>
          <li className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer" onClick={() => navigate("/academics")}>ACADEMICS</li>
          <li className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer" onClick={() => navigate("/circular")}>CIRCULAR</li>
          <li className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer" onClick={handleAdmissionClick}>ADMISSION</li>
          <li className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer" onClick={() => navigate("/gallery")}>GALLERY</li>
          <li className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer" onClick={() => navigate("/contact")}>CONTACT US</li>
        </ul>

        {/* Mobile Navigation Icon */}
        <button className="lg:hidden text-white text-3xl" onClick={openMenu} aria-label="Open navigation menu">
          <AiOutlineMenuFold />
        </button>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-[-100%] w-[80%] h-screen bg-[#2973B2]/60 backdrop-blur-sm font-bold text-white flex flex-col items-center justify-center text-lg space-y-5 z-50 transition-all"
        >
          <button className="absolute top-4 right-6 text-3xl" onClick={closeMenu} aria-label="Close navigation menu">
            <RiCloseLargeLine />
          </button>
          <ul ref={menuItemsRef} className="flex flex-col text-xl justify-center items-center">
            <li className="mb-[2em]" onClick={() => { navigate("/"); closeMenu(); }}>HOME</li>
            <li className="mb-[2em]" onClick={() => { navigate("/aboutus"); closeMenu(); }}>ABOUT US</li>
            <li className="mb-[2em]" onClick={() => { navigate("/academics"); closeMenu(); }}>ACADEMICS</li>
            <li className="mb-[2em]" onClick={() => { navigate("/circular"); closeMenu(); }}>CIRCULAR</li>
            <li className="mb-[2em]" onClick={handleAdmissionClick}>ADMISSION</li>
            <li className="mb-[2em]" onClick={() => { navigate("/gallery"); closeMenu(); }}>GALLERY</li>
            <li className="mb-[2em]" onClick={() => { navigate("/contact"); closeMenu(); }}>CONTACT US</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderForOthers;
