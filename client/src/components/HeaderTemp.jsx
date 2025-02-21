import React from 'react';

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const HeaderTemp = () => {
    const marqueeRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(
          marqueeRef.current,
          { x: "100%" }, 
          { x: "-100%", duration: 30, repeat: -1, ease: "linear" }
        );
      }, []);

  return (
    <div className='bg-[#003cff] w-full'>
        <div className="overflow-hidden bg-[#328df5] text-white font-semibold h-[3em] lg:h-[4em] p-[0.7em] lg:p-[1em] w-full">
            <div ref={marqueeRef} className="flex marquee whitespace-nowrap">
                <span className="mr-10 text-lg">Dobbespet Public School</span>
                <span className="flex items-center mr-[2em]">
                    <FaPhone size="1.2em" className="mr-[0.5em]" />
                    <span>9535054460</span>
                </span>
                <span className="flex items-center mr-[2em]">
                    <FaPhone size="1.2em" className='mr-[0.5em]' />
                    <span>8553888452</span>
                </span>
                <span className="flex items-center">
                    <IoIosMail size="1.5em"  className="mr-[0.5em]" />
                    <span>dpslakkur2010@gmail.com</span>
                </span>
            </div>
        </div>
        <header className='w-full md:h-[9em] flex justify-between items-center pl-[1.5em] pr-[3em]'>
            <div>
                <img src="/DobbespetPublicSchool.png"
                            className="lg:h-[7.5em] lg:ml-[3em]"
                            alt="School Logo"/>
            </div>
            <ul className='flex items-center md:p-[0.8em] text-white font-semibold'>
                <li className='lg:ml-[4em]'>
                    
                </li>
                <li className='lg:ml-[4em]'>HOME</li>
                <li className='lg:ml-[4em]'>ABOUT US</li>
                <li className='lg:ml-[4em]'>ADMISSION</li>
                <li className='lg:ml-[4em]'>GALLERY</li>
                <li className='lg:ml-[4em]'>ACADEMICS</li>
                <li className='lg:ml-[4em]'>CONTACT US</li>
            </ul>
        </header>
    </div>
  )
}

export default HeaderTemp
