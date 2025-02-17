import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col items-center font-custom">
      
      {/* Top Section - Different for mobile & md+ */}
      <div className="w-[90%] font-semibold flex flex-col md:flex-row justify-between items-center p-4 text-center md:text-left">
        
        {/* Address Section - Only for md+ */}
        <div className="hidden md:flex w-full md:w-[35%] flex-col md:flex-row justify-center items-center mb-4 md:mb-0"></div>

        {/* Mobile: Logo & Menu Icon (justify-between) */}
        <div className="md:hidden flex w-full justify-between items-center">
          {/* Logo */}
          <div className="h-[6em] w-[6em] flex">
            <img
              src="/DobbespetPublicSchool.png"
              className="w-full h-full object-contain"
              alt="School Logo"
            />
          </div>

          {/* Menu Icon */}
          <AiOutlineMenuFold
            className="text-3xl text-[#003cff] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Centered Logo for md+ */}
        <div className="hidden md:flex h-[8em] w-[8em] justify-center">
          <img
            src="/DobbespetPublicSchool.png"
            className="w-full h-full object-contain"
            alt="School Logo"
          />
        </div>

        {/* Contact Info - Only for md+ */}
        <div className="hidden md:flex w-full md:w-[35%] flex-col justify-center items-center mt-4 md:mt-0"></div>
      </div>

      {/* Navigation Bar (Only for md+) */}
      <div className="hidden md:flex w-full justify-center px-2">
        <div className="w-full max-w-[95%] h-auto p-4 bg-[#003cff] text-yellow-400 font-semibold rounded-full flex flex-wrap justify-between items-center">
          {/* Left Menu */}
          <ul className="flex w-[30%] text-md justify-evenly items-center">
            <li className="cursor-pointer px-2">HOME</li>
            <li className="cursor-pointer px-2">ABOUT US</li>
            <li className="cursor-pointer px-2">ADMISSION</li>
          </ul>

          {/* School Name - Only for md+ */}
          <h1 className="text-xl sm:text-xl md:text-3xl font-extrabold text-white text-center py-2">
            DOBBESPET PUBLIC SCHOOL
          </h1>

          {/* Right Menu */}
          <ul className="flex w-[30%] text-md justify-evenly items-center">
            <li className="cursor-pointer px-2">GALLERY</li>
            <li className="cursor-pointer px-2">ACADEMICS</li>
            <li className="cursor-pointer px-2">CONTACT US</li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Dropdown (Only for sm) */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#003cff] text-white text-center rounded-lg p-4 mt-2">
          <ul className="space-y-3">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT US</li>
            <li className="cursor-pointer">ADMISSION</li>
            <li className="cursor-pointer">GALLERY</li>
            <li className="cursor-pointer">ACADEMICS</li>
            <li className="cursor-pointer">CONTACT US</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
