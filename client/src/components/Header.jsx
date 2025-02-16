import React from 'react';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <header className='w-full flex flex-col items-center font-custom'>
      <div className='w-[90%] font-semibold flex flex-col md:flex-row justify-between items-center p-4 text-center md:text-left'>
        <div className='w-full md:w-[35%] flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0'>
          <span className='flex items-center space-x-2'>
            <FaLocationDot className='text-2xl text-[#003cff]' />
            <p className='text-sm md:text-base'>Lakkur, Dobbespet, Nelamangala Taluk, Bangalore Rural District-562111</p>
          </span>
        </div>
        <div className='h-24 w-20 md:h-[10em] md:w-[7em]'>
          <img src="/DobbespetPublicSchool.png" className='w-full h-full object-contain' alt="School Logo" />
        </div>
        <div className='w-full md:w-[35%] flex flex-col justify-center items-center mt-4 md:mt-0'>
          <span className='flex items-center space-x-2 cursor-pointer'><FaPhone className='text-[#003cff]' /> <p>9535054460</p></span>
          <span className='flex items-center space-x-2 cursor-pointer'><FaPhone className='text-[#003cff]' /> <p>8553888452</p></span>
          <span className='flex items-center space-x-2 cursor-pointer'><IoMdMail className='text-xl text-[#003cff]' /> <p>dpslakkur2010@gmail.com</p></span>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-[95%] md:h-[5em] p-4 bg-[#003cff] text-yellow-400 font-semibold md:rounded-[5em] rounded-[1em] flex flex-col md:flex-row justify-between items-center'>
          <ul className='flex flex-wrap justify-center md:justify-evenly w-full md:w-[30%] text-sm md:text-md space-x-4 md:space-x-0'>
            <li className='cursor-pointer'>HOME</li>
            <li className='cursor-pointer'>ABOUT US</li>
            <li className='cursor-pointer'>ADMISSION</li>
          </ul>
          <h1 className=' text-2xl md:text-3xl font-extrabold text-white text-center my-4 md:my-0'>DOBBESPET PUBLIC SCHOOL</h1>
          <ul className='flex flex-wrap justify-center md:justify-evenly w-full md:w-[30%] text-sm md:text-md space-x-4 md:space-x-0'>
            <li className='cursor-pointer'>GALLERY</li>
            <li className='cursor-pointer'>ACADEMICS</li>
            <li className='cursor-pointer'>CONTACT US</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
