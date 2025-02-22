import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

const HeaderTemp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const marqueeRef = useRef(null);
  const menuItemsRef = useRef([]);

  useGSAP(() => {
    const width = marqueeRef.current.scrollWidth;
    gsap.fromTo(
      marqueeRef.current,
      { x: "100%" },
      { x: `-${width}px`, duration: 20, repeat: -1, ease: "linear" }
    );
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

    // Fade in menu items one by one
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

  return (
    <div className="bg-[#2973B2] w-full">
      {/* Marquee Section */}
      <div className="overflow-hidden bg-white text-[#2973B2] font-semibold h-[3em] lg:h-[4em] p-[0.7em] lg:p-[1em] w-full">
        <div className="w-full flex whitespace-nowrap">
          <div ref={marqueeRef} className="flex items-center gap-10">
            <span className="text-lg">Dobbespet Public School</span>
            <span className="flex items-center">
              <FaPhone size="1.2em" className="mr-2" />
              9535054460
            </span>
            <span className="flex items-center">
              <FaPhone size="1.2em" className="mr-2" />
              8553888452
            </span>
            <span className="flex items-center">
              <IoIosMail size="1.5em" className="mr-2" />
              dpslakkur2010@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="w-full h-[7em] md:h-[9em] flex justify-between items-center px-4 md:px-[3em] py-3 relative">
        {/* Logo */}
        <div>
          <img
            src="/DobbespetPublicSchool.png"
            className="h-[5em] md:h-[7.5em] lg:ml-[1.5em] invert"
            alt="School Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center text-white font-semibold space-x-6 lg:space-x-8 xl:space-x-12">
          {["HOME", "ABOUT US", "CIRCULAR", "ADMISSION", "GALLERY", "ACADEMICS", "CONTACT US"].map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer transition duration-300 hover:text-gray-300 after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={openMenu}
          aria-label="Open navigation menu"
        >
          <AiOutlineMenuFold />
        </button>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-[-100%] w-[80%] h-screen bg-[#2973B2] text-white flex flex-col items-center justify-center text-lg space-y-5 z-50 transition-all"
          inert
        >
          <button
            className="absolute top-4 right-6 text-3xl"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <RiCloseLargeLine />
          </button>
          <ul className="flex flex-col space-y-5 text-center">
            {["HOME", "ABOUT US", "CIRCULAR", "ADMISSION", "GALLERY", "ACADEMICS", "CONTACT US"].map((item, index) => (
              <li
                key={index}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className="py-2 w-full text-white cursor-pointer transition duration-300 hover:bg-blue-600 hover:text-gray-300"
                onClick={closeMenu}
                role="menuitem"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderTemp;
