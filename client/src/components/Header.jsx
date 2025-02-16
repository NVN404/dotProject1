import React from 'react';

import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  return (
    <header className='w-[100vw] h-[auto] flex flex-col items-center font-custom'>
      <div className='w-[90%] font-semibold flex justify-between items-center p-[1.5em]'>
        <div className='w-[35%] flex justify-center items-center'>
          <span className='w-[80%] flex justify-between'>
            <FaLocationDot className='w-[20%] text-2xl pr-[0.3em] text-[#003cff]' />
            <p>Lakkur ,    Dobbespet,  Nelamangala Taluk,  Bengalore Rural District-562111</p>
          </span>
        </div>
        <div className='h-[10em] w-[7em]'>
          <img src="/DobbespetPublicSchool.png" className='w-full h-full' alt="" />
        </div>
        <div className='w-[35%] flex flex-col justify-center items-center'>
          <span className='w-[33%] flex justify-between items-center cursor-pointer'><FaPhone className='text-[#003cff]' />9535054460</span>
          <span className='w-[33%] flex justify-between items-center cursor-pointer'><FaPhone className='text-[#003cff]' />8553888452</span>
          <span className='w-[65%] flex justify-between items-center cursor-pointer'><IoMdMail className='text-xl text-[#003cff]' />dpslakkur2010@gmail.com</span>
        </div>
      </div>
      <div className='w-[100%] h-[auto] flex justify-center'>
        <div className='w-[95%] h-[6em] p-[1.5em] bg-[#003cff] text-yellow-400 font-semibold rounded-[5em] flex justify-between items-center'>
          <ul className='w-[30%] flex text-md  justify-evenly items-center '>
            <li className='mr-[1em] cursor-pointer'>HOME</li>
            <li className='mr-[1em] cursor-pointer'>ABOUT US</li>
            <li className='mr-[1em] cursor-pointer'>ADMISSION</li>
          </ul>
          <h1 className='w-[40%]  text-3xl font-extrabold text-white'>DOBBESPET PUBLIC SCHOOL</h1>
          <ul className='w-[30%] flex text-md justify-evenly items-center'>
            <li className='mr-[1em] cursor-pointer'>GALLERY</li>
            <li className='mr-[1em] cursor-pointer'>ACADEMICS</li>
            <li className='mr-[1em] cursor-pointer'>CONTACT US</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
