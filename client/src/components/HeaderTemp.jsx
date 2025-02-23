import React, { useState, useRef, useEffect, useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

import { AdmissionContext } from "./context/AdmissionContext";

gsap.registerPlugin(ScrollTrigger);

const HeaderTemp = () => {
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

    gsap.to(headerRef.current, {
      backgroundColor: "#2973B2",
      position: "fixed",
      top: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".marquee",
        scroller: "body",
        start: "bottom top", // When marquee exits, header color changes
        end: "+=50",
        toggleActions: "play none none reverse",
      },
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
    closeMenu(); // Close menu
    setOpenAdmissionForm(true); // Open admission form
  };

  return (
    <div className="w-full "
      style={{
        background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.4767) 82%, rgba(0,0,0,0) 100%)",
      }}
    >
      {/* Marquee Section */}
      <div className="overflow-hidden bg-white text-[#2973B2] font-semibold h-[3em] lg:h-[4em] p-[0.7em] lg:p-[1em] w-full marquee">
        <div ref={marqueeRef} className="w-full flex whitespace-nowrap">
          <div className="flex items-center gap-10">
            <span className="text-lg">Dobbespet Public School</span>
            <span className="flex items-center"><FaPhone size="1.2em" className="mr-2" />9535054460</span>
            <span className="flex items-center"><FaPhone size="1.2em" className="mr-2" />8553888452</span>
            <span className="flex items-center"><IoIosMail size="1.5em" className="mr-2" />dpslakkur2010@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header ref={headerRef} className="w-full h-[7em] md:h-[9em] flex justify-between items-center px-4 md:px-[3em] py-3 
      ">
        {/* Logo */}
        <div>
          <img src="/DobbespetPublicSchool.png" className="h-[5em] md:h-[7.5em] lg:ml-[1.5em] invert" alt="School Logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center text-white font-semibold space-x-6 lg:space-x-8 xl:space-x-12">
          <li className="relative cursor-pointer hover:font-bold">HOME</li>
          <li className="relative cursor-pointer hover:font-bold">ABOUT US</li>
          <li className="relative cursor-pointer hover:font-bold">CIRCULAR</li>
          <li className="relative cursor-pointer hover:font-bold" onClick={handleAdmissionClick}>ADMISSION</li>
          <li className="relative cursor-pointer hover:font-bold">GALLERY</li>
          <li className="relative cursor-pointer hover:font-bold">ACADEMICS</li>
          <li className="relative cursor-pointer hover:font-bold">CONTACT US</li>
        </ul>

        {/* Mobile Navigation Icon */}
        <button className="lg:hidden text-white text-3xl" onClick={openMenu} aria-label="Open navigation menu">
          <AiOutlineMenuFold />
        </button>

        {/* Mobile Menu */}
        <div ref={menuRef} className="fixed top-0 right-[-100%] w-[80%] h-screen bg-[#2973B2] text-white flex flex-col items-center justify-center text-lg space-y-5 z-50 transition-all">
          <button className="absolute top-4 right-6 text-3xl" onClick={closeMenu} aria-label="Close navigation menu">
            <RiCloseLargeLine />
          </button>
          <ul className="flex flex-col space-y-5 text-center">
            <li onClick={closeMenu}>HOME</li>
            <li onClick={closeMenu}>ABOUT US</li>
            <li onClick={closeMenu}>CIRCULAR</li>
            <li onClick={handleAdmissionClick}>ADMISSION</li> {/* Automatically closes */}
            <li onClick={closeMenu}>GALLERY</li>
            <li onClick={closeMenu}>ACADEMICS</li>
            <li onClick={closeMenu}>CONTACT US</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderTemp;


// shadow-[0px_15px_40px_rgba(0,0,0,0.6)]