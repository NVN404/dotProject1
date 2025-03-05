import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaCopyright } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import AdmissionForm from "./AdmissionForm";
import { AdmissionContext } from "./context/AdmissionContext";

const Footer = () => {
  const navigate = useNavigate();
  const { openAdmissionForm, setOpenAdmissionForm } = useContext(AdmissionContext);

  return (
    <footer className="bg-[#2973B2] w-full">
      {/* 🔹 Main Footer Section */}
      <div className="py-8 px-6 md:px-10 lg:px-14 xl:px-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_2fr_1fr_1fr] gap-6 md:gap-[5em] text-center sm:text-left">
        {/* 🎓 Logo Section */}
        <div className="flex flex-col items-center ">
          <img
            src="./DobbespetPublicSchool.png"
            alt="School Logo"
            className="w-[6em] h-[10em] mb-2 invert"
          />
          <h3 className="text-white text-lg sm:text-lg font-bold font-newsreader">
            Dobbespet Public School
          </h3>
        </div>

        {/* 📞 Contact Section */}
        <div className="flex flex-col sm:items-start items-center">
          <h3 className="text-white text-lg sm:text-xl font-bold">Contact Us</h3>
          <div className="flex items-center text-white mt-2">
          <FaLocationDot size="1.5em" className="mr-[0.2em] text-lg md:mr-2 md:text-xl" />
          <span className="text-sm md:text-base"> Lakkur, Dobbespet, Nelamangala Taluk, Bangalore Rural District - 562111</span>
          </div>
          <div className="flex items-center text-white mt-2">
            <IoIosMail size="1.5em" className="mr-2" />
            <span className="text-sm md:text-base">dpslakkur2010@gmail.com</span>
          </div>
          <div className="flex flex-col text-white gap-1 mt-2">
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
        <div className="text-white flex flex-col items-center sm:items-start">
          <h3 className="text-lg sm:text-xl font-bold">Quick Links</h3>
          <ul className="text-sm md:text-base space-y-1 mt-2">
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("/circular")}
            >
              Circular
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => setOpenAdmissionForm(true)}
            >
              <AdmissionForm />
              Admission
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("/academics")}
            >
              Academics
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </li>
            <li
              className="hover:text-yellow-400 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </li>
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
          Cooked in Dot Labs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
