import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

import { AdmissionContext } from "./context/AdmissionContext";

gsap.registerPlugin(ScrollTrigger);

const HeaderForOthers = () => {
  const navigate=useNavigate();
  const { openAdmissionForm, setOpenAdmissionForm } = useContext(AdmissionContext);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const marqueeRef = useRef(null);
  const headerRef = useRef(null);
  const menuItemsRef = useRef([]);

  useGSAP(() => {
    if (!marqueeRef.current || !headerRef.current) return;

    const marqueeWidth = marqueeRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.fromTo(
      marqueeRef.current,
      { x: viewportWidth },
      {
        x: -marqueeWidth,
        duration: marqueeWidth / 50,
        repeat: -1,
        ease: "linear",
      }
    );

    gsap.from(menuItemsRef.current,{
      x:200,
      duration:1,
      delay:1,
      stagger:0.15
    })

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
    closeMenu(); // Close menu
    setOpenAdmissionForm(true); // Open admission form
  };

  return (
    <div className="w-full bg-[#2973B2]">
      {/* Header Section */}
      <header ref={headerRef} className="w-full h-[7em] md:h-[9em] flex justify-between items-center px-4 md:px-[3em] py-3">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <img src="/DobbespetPublicSchool.png" className="h-[5em] md:h-[7em] invert" alt="School Logo" />
          <span className="text-white text-sm sm:text-md font-bold">Dobbespet Public School</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center text-white font-semibold space-x-6 lg:space-x-8 xl:space-x-12">
          <li className="relative cursor-pointer hover:font-bold" onClick={()=>{
            navigate("/");
          }}>HOME</li>
          <li className="relative cursor-pointer hover:font-bold">ABOUT US</li>
          <li className="relative cursor-pointer hover:font-bold" onClick={()=>{
            navigate("/circular");
          }}>CIRCULAR</li>
          <li className="relative cursor-pointer hover:font-bold" onClick={handleAdmissionClick}>ADMISSION</li>
          <li className="relative cursor-pointer hover:font-bold">ACADEMICS</li>
          <li className="relative cursor-pointer hover:font-bold" onClick={()=>{
            navigate("/gallery");
          }}>GALLERY</li>
          <li className="relative cursor-pointer hover:font-bold" onClick={()=>{
            navigate("/contact");
          }}>CONTACT US</li>
        </ul>

        {/* Mobile Navigation Icon */}
        <button className="lg:hidden text-white text-3xl" onClick={openMenu} aria-label="Open navigation menu">
          <AiOutlineMenuFold />
        </button>

        {/* Mobile Menu */}
        <div ref={menuRef} className="fixed top-0 right-[-100%] w-[80%] h-screen bg-[#2973B2]/60 backdrop-blur-sm font-bold text-white flex flex-col items-center justify-center text-lg space-y-5 z-50 transition-all">
                  <button className="absolute top-4 right-6 text-3xl" onClick={closeMenu} aria-label="Close navigation menu">
                    <RiCloseLargeLine />
                  </button>
                  <ul ref={menuItemsRef} className="flex flex-col text-xl justify-center items-center">
                    <li onClick={()=>{
                      navigate("/");
                      closeMenu();
                    }} className="mb-[2em]">HOME</li>
                    <li onClick={closeMenu} className="mb-[2em]">ABOUT US</li>
                    <li className="mb-[2em]" onClick={()=>{
                      navigate("/circular");
                      closeMenu();
                    }}>CIRCULAR</li>
                    <li onClick={handleAdmissionClick} className="mb-[2em]">ADMISSION</li>
                    <li onClick={closeMenu} className="mb-[2em]">ACADEMICS</li>
                    <li onClick={()=>{
                      navigate("/gallery");
                      closeMenu();
                    }} className="mb-[2em]">GALLERY</li>
                    <li onClick={()=>{
                      navigate("/contact");
                      closeMenu();
                    }} className="mb-[2em]">CONTACT US</li>
                  </ul>
                </div>
      </header>
    </div>
  );
};

export default HeaderForOthers;
