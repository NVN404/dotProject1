import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaCopyright } from "react-icons/fa";
import AdmissionForm from "./AdmissionForm";

const Footer = () => {
  return (
    <footer className="bg-[#2973B2] w-full">

      {/* 🔹 Main Footer Section */}
      <div className="h-[auto] md:h-[45vh] py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_2fr_1fr_1fr]  gap-6 md:gap-[5em] text-center sm:text-left px-4 md:px-8 lg:px-12 xl:px-16">

        {/* 🎓 Logo Section */}
        <div className="flex flex-col  items-center">
          <img
            src="./DobbespetPublicSchool.png"
            alt="School Logo"
            className="w-[6em] h-[10em] mb-2 invert"
          />
          <h3 className="text-white text-lg sm:text-md font-bold">
            Dobbespet Public School
          </h3>
        </div>

        {/* 📞 Contact Section */}
        <div className="flex flex-col sm:items-start items-center">
          <h3 className="text-white text-lg sm:text-xl font-bold">Contact Us</h3>
          <p className="text-white text-sm md:text-base text-center sm:text-left mt-1">
            Lakkur, Dobbespet, Nelamangala Taluk, Bangalore Rural District - 562111
          </p>
          <div className="flex items-center text-white gap-2 mt-2">
            <IoIosMail size="1.5em" />
            <span className="text-sm md:text-base">dpslakkur2010@gmail.com</span>
          </div>
          <div className="flex flex-col text-white gap-2 mt-2">
            <div className="flex items-center">
              <FaPhone size="1.2em" className="mr-2" />
              <span className="text-sm md:text-base">9535054460</span>
            </div>
            <div className="flex items-center">
              <FaPhone size="1.2em" className="mr-2" />
              <span className="text-sm md:text-base">8553888452</span>
            </div>
            
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white text-lg sm:text-xl font-bold">Quick Links</h3>
          <ul className="text-yellow-400 text-sm md:text-base space-y-1 mt-2">
            <li className="hover:underline cursor-pointer">Home</li>
            {/* <li className="hover:underline cursor-pointer">Admissions</li> */}
            <AdmissionForm />
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 📖 About Us */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white text-lg sm:text-xl font-bold">About Us</h3>
          <p className="text-white text-sm md:text-base mt-1 text-center sm:text-left">
            Dedicated to providing quality education with excellence.
          </p>
        </div>
      </div>

      {/* 🔹 Bottom Copyright Section */}
      <div className="w-full bg-white py-4 px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row justify-between items-center font-semibold text-center sm:text-left">
        <p className="text-[#2973B2] text-sm md:text-base flex items-center mb-2 sm:mb-0">
          <FaCopyright className="mr-2" /> 2025 Dobbespet Public School - Bangalore
        </p>
        <p className="text-[#2973B2] text-sm md:text-base">
          Website Powered by Dot Labs
        </p>
      </div>

    </footer>
  );
};

export default Footer;
