import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="h-[30dvh] bg-[#003cff] w-full flex flex-col justify-between">
      {/* Main Content with 4 Columns */}
      <div className="flex flex-wrap justify-around w-full">
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-white text-lg font-bold">
            Dobbespet Public School
          </h3>
          <h3 className="text-white text-lg font-bold">
            Call us at +91 9148018043
          </h3>
          <h3 className="text-white text-lg font-bold">Connect With Us</h3>
        </div>
        <div className="w-full md:w-1/4 p-2 flex gap-2 flex-col">
          <h3 className="text-white text-lg font-bold">Contact Us</h3>
          <h1 className="text-white">
            Lakkur,Dobbespet,Nelamangala Taluk,Bangalore Rural District-562111
          </h1>
          <div className="flex text-white align-middle gap-2">
            <IoIosMail color="white" size="1.5em" />
            example@example.com
          </div>
          <div className="flex text-white align-middle gap-2">
            <FaPhone color="white" size="1.2em" />

            +91 9148018043
          </div>
        </div>
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-white text-lg font-bold">Column 3</h3>
          <ul className="text-white">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-white text-lg font-bold">Column 4</h3>
          <ul className="text-white">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>

      <div className="h-[30px] bg-[#1E60AB] w-full absolute bottom-0 flex justify-between">
        <p className="text-white">Copyright &copy 2025,Dobbespet Public School-Bangalore</p>
        <p className="text-white">Website Powered by Dot Labs *insert naveen number and email*</p>
      </div>
    </div>
  );
};

export default Footer;
