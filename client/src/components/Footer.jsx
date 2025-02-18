import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#003cff] w-full">
      {/* Main Content Section */}
      <div className="h-auto py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
        
        {/* Column 1 */}
        <div className="flex flex-col justify-center items-center px-4">
          <img src="./DobbespetPublicSchool.png" alt="" className='w-[5em] h-[8em] mb-[0.5em]' />
          <h3 className="text-white text-lg font-bold">Dobbespet Public School</h3>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col px-4 items-center sm:items-start">
          <h3 className="text-white text-lg font-bold">Contact Us</h3>
          <p className="text-white text-sm">
            Lakkur, Dobbespet, Nelamangala Taluk, Bangalore Rural District - 562111
          </p>
          <div className="flex items-center text-white gap-2 mt-2">
            <IoIosMail size="1.5em" />
            <span>example@example.com</span>
          </div>
          <div className="flex items-center text-white gap-2 mt-2">
            <FaPhone size="1.2em" />
            <span>+91 9148018043</span>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col px-4 items-center sm:items-start">
          <h3 className="text-white text-lg font-bold">Quick Links</h3>
          <ul className="text-yellow-400 text-sm space-y-1">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col px-4 items-center sm:items-start">
          <h3 className="text-white text-lg font-bold">Resources</h3>
          <ul className="text-yellow-400 text-sm space-y-1">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#1E60AB] p-3 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left">
        <p className="text-white text-sm">
          &copy; 2025 Dobbespet Public School - Bangalore
        </p>
        <p className="text-white text-sm">
          Website Powered by Dot Labs | *Insert Naveen’s number and email*
        </p>
      </div>
    </footer>
  );
};

export default Footer;
