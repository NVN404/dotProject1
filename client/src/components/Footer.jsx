import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-black w-full">
=======
    <footer className="bg-[#2973B2] w-full">
>>>>>>> d05e1e6ed87bfee78ec8f778dc4504ebdeb47ea6
      {/* Main Content Section */}
      <div className="h-auto lg:h-[45vh] py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
        
        {/* Column 1 */}
        <div className="flex flex-col justify-center items-center px-4">
          <img src="./DobbespetPublicSchool.png" alt="" className='w-[7em] h-[11em] mb-[0.5em] invert' />
          <h3 className="text-white text-lg font-bold">Dobbespet Public School</h3>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col px-6 justify-center sm:items-start">
          <h3 className="text-white text-lg font-bold">Contact Us</h3>
          <p className="text-white text-sm">
            Lakkur, Dobbespet, Nelamangala Taluk, Bangalore Rural District - 562111
          </p>
          <div className="flex items-center text-white gap-2 mt-2">
            <IoIosMail size="1.5em" />
            <span>dpslakkur2010@gmail.com</span>
          </div>
          <div className="flex flex-col items-center text-white gap-2 mt-2">
            <div className='flex items-center justify-between '>
              <FaPhone size="1.2em" className='mr-[0.5em]' />
              <span>9535054460</span>
            </div>
            <div className='flex items-center justify-between '>
              <FaPhone size="1.2em" className='mr-[0.5em]' />
              <span>8553888452</span>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col px-6 mt-[2em] lg:items-center sm:items-start">
          <h3 className="text-white text-lg font-bold">Quick Links</h3>
          <ul className="text-yellow-400 text-sm space-y-1">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col px-6 justify-center sm:items-start">
          <h3 className="text-white text-lg font-bold">ABOUT US</h3>
          {/* <ul className="text-yellow-400 text-sm space-y-1">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-white p-[2em] flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left font-bold">
        <p className=" text-[#2973B2] text-sm flex justify-between items-center">
          <FaCopyright className='mr-[0.5em]' /> 2025 Dobbespet Public School - Bangalore
        </p>
        <p className="text-[#2973B2] text-sm ">
          Website Powered by Dot Labs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
