import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003cff] w-full">
      {/* Main Content Section */}
      <div className="h-auto lg:h-[45vh] py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left px-4 md:px-10">
        
        {/* Column 1 */}
        <div className="flex flex-col justify-center items-center">
          <img 
            src="./DobbespetPublicSchool.png" 
            alt="School Logo" 
            className="w-[6em] h-[10em] mb-2 invert"
          />
          <h3 className="text-white text-lg font-bold">Dobbespet Public School</h3>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col sm:items-start items-center">
          <h3 className="text-white text-lg font-bold">Contact Us</h3>
          <p className="text-white text-sm text-center sm:text-left mt-1">
            Lakkur, Dobbespet, Nelamangala Taluk, Bangalore Rural District - 562111
          </p>
          <div className="flex items-center text-white gap-2 mt-2">
            <IoIosMail size="1.5em" />
            <span className="text-sm">dpslakkur2010@gmail.com</span>
          </div>
          <div className="flex flex-col text-white gap-2 mt-2">
            <div className="flex items-center">
              <FaPhone size="1.2em" className="mr-2" />
              <span className="text-sm">9535054460</span>
            </div>
            <div className="flex items-center">
              <FaPhone size="1.2em" className="mr-2" />
              <span className="text-sm">8553888452</span>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white text-lg font-bold">Quick Links</h3>
          <ul className="text-yellow-400 text-sm space-y-1 mt-2">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white text-lg font-bold">About Us</h3>
        </div>
      </div>

      {/* Bottom Bar - Adjusted for Mobile */}
      <div className="w-full bg-white py-4 px-4 md:px-10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-[#003cff] text-sm flex items-center mb-2 sm:mb-0">
          <FaCopyright className="mr-2" /> 2025 Dobbespet Public School - Bangalore
        </p>
        <p className="text-[#003cff] text-sm">Website Powered by Dot Labs</p>
      </div>
    </footer>
  );
};

export default Footer;
