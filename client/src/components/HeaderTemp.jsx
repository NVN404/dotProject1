import React, { useState, useRef } from "react";
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

  useGSAP(() => {
    gsap.fromTo(
      marqueeRef.current,
      { x: "100%" },
      { x: "-100%", duration: 30, repeat: -1, ease: "linear" }
    );
  }, []);

  // Open Menu Animation
  const openMenu = () => {
    setIsOpen(true);
    gsap.to(menuRef.current, { right: "0%", duration: 0.5, ease: "power3.out" });
  };

  // Close Menu Animation
  const closeMenu = () => {
    gsap.to(menuRef.current, { right: "-100%", duration: 0.5, ease: "power3.in", onComplete: () => setIsOpen(false) });
  };

  return (
    <div className="bg-[#003cff] w-full">
      {/* Marquee Section */}
      <div className="overflow-hidden bg-[#328df5] text-white font-semibold h-[3em] lg:h-[4em] p-[0.7em] lg:p-[1em] w-full">
        <div ref={marqueeRef} className="flex marquee whitespace-nowrap">
          <span className="mr-10 text-lg">Dobbespet Public School</span>
          <span className="flex items-center mr-[2em]">
            <FaPhone size="1.2em" className="mr-[0.5em]" />
            <span>9535054460</span>
          </span>
          <span className="flex items-center mr-[2em]">
            <FaPhone size="1.2em" className="mr-[0.5em]" />
            <span>8553888452</span>
          </span>
          <span className="flex items-center">
            <IoIosMail size="1.5em" className="mr-[0.5em]" />
            <span>dpslakkur2010@gmail.com</span>
          </span>
        </div>
      </div>

      {/* Header Section */}
      <header className="w-full md:h-[9em] flex justify-between items-center px-4 md:px-[3em] py-3 relative">
        {/* Logo */}
        <div>
          <img
            src="/DobbespetPublicSchool.png"
            className="h-[3em] md:h-[7.5em] lg:ml-[3em]"
            alt="School Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center md:p-[0.8em] text-white font-semibold">
          <li className="lg:ml-[4em]">HOME</li>
          <li className="lg:ml-[4em]">ABOUT US</li>
          <li className="lg:ml-[4em]">ADMISSION</li>
          <li className="lg:ml-[4em]">GALLERY</li>
          <li className="lg:ml-[4em]">ACADEMICS</li>
          <li className="lg:ml-[4em]">CONTACT US</li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={openMenu}>
          <AiOutlineMenuFold />
        </button>

        {/* Mobile Sliding Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-[-100%] w-[80%] h-screen bg-[#328df5] text-white flex flex-col items-center justify-center text-lg space-y-5 z-50"
        >
          {/* Close Button */}
          <button className="absolute top-4 right-6 text-3xl" onClick={closeMenu}>
            <RiCloseLargeLine />
          </button>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col space-y-5 text-center">
            <li className="py-2 hover:bg-blue-600 w-full" onClick={closeMenu}>HOME</li>
            <li className="py-2 hover:bg-blue-600 w-full" onClick={closeMenu}>ABOUT US</li>
            <li className="py-2 hover:bg-blue-600 w-full" onClick={closeMenu}>ADMISSION</li>
            <li className="py-2 hover:bg-blue-600 w-full" onClick={closeMenu}>GALLERY</li>
            <li className="py-2 hover:bg-blue-600 w-full" onClick={closeMenu}>ACADEMICS</li>
            <li className="py-2 hover:bg-blue-600 w-full" onClick={closeMenu}>CONTACT US</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderTemp;
