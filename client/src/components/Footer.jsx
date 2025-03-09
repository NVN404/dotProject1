import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaCopyright } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AdmissionContext } from "./context/AdmissionContext";

const Footer = () => {
  const navigate = useNavigate();
  const { openAdmissionForm, setOpenAdmissionForm } = useContext(AdmissionContext);

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Academics", path: "/academics" },
    { label: "Circular", path: "/circular" },
    { label: "Admission", path: "/admission" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact" },
  ];

  const contactDetails = [
    { icon: FaLocationDot, text: "Lakkur, Dobbespet, Nelamangala Taluk, Bangalore Rural District - 562111" },
    { icon: IoIosMail, text: "dpslakkur2010@gmail.com" },
    { icon: FaPhone, text: "9535054460" },
    { icon: FaPhone, text: "8553888452" },
  ];

  return (
    <footer className="bg-background w-full">
      {/* 🔹 Main Footer Section */}
      <div className="py-8 px-6 md:px-10 lg:px-14 xl:px-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_3fr_1fr_1fr] gap-6 md:gap-[5em] text-center sm:text-left">
        {/* 🎓 Logo Section */}
        <div className="flex flex-col items-center">
          <img src="./DobbespetPublicSchool.png" alt="School Logo" className="w-[6em] h-[10em] mb-2 invert" />
          <h3 className="text-white text-lg sm:text-lg font-bold font-newsreader">Dobbespet Public School</h3>
        </div>

        {/* 📞 Contact Section */}
        <div className="flex flex-col sm:items-start items-center">
          <h3 className="text-white text-lg sm:text-xl font-bold">Contact Us</h3>
          {contactDetails.map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-center text-white mt-2">
              <Icon size="1.5em" className="mr-2" />
              <span className="text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>

        {/* 🔗 Quick Links */}
        <div className="text-white flex flex-col items-center sm:items-start">
          <h3 className="text-lg sm:text-xl font-bold">Quick Links</h3>
          <ul className="text-sm md:text-base space-y-1 mt-2">
            {quickLinks.map(({ label, path }) => (
              <li key={path} className="hover:text-yellow-400 cursor-pointer" onClick={() => navigate(path)}>
                {label}
              </li>
            ))}
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
        <p className="text-[#2973B2] text-sm md:text-base">Cooked in Dot Labs</p>
      </div>
    </footer>
  );
};

export default Footer;
