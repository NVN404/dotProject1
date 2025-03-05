import React from "react";

const Motto = () => {
  return (
    <div className="w-[90vw] h-screen mx-auto grid grid-cols-1 md:grid-cols-3 p-6 bg-white overflow-hidden mb-8">

      <div className="p-6 bg-[#D0E7F8] text-[#3A3A3A] flex flex-col justify-between gap-2 space-around">
        <div className="flex gap-6 flex-col">
          <span className="text-5xl font-helvetica font-[900]">MOTTO</span>
          <p className="text-2xl text-[#2973B2] font-semibold">Inspiring young minds to learn, grow, and succeed</p>
          <p className="text-md text-[#3A3A3A]">A motto is a vivid reflection of the mettle that goes into the making of an institution.</p>
        </div>

        <img src="./img1.png" className="h-[auto] mt-[8em]" />
      </div>


      <div className="p-6 bg-[#98C4E1] text-[#3A3A3A] flex flex-col space-around gap-2">
        <div className="flex flex-col gap-6">
          <span className="text-5xl font-helvetica font-[900]">VISION</span>
          <p className="text-2xl text-[#2973B2] font-semibold">Shaping a future where knowledge and character go hand in hand.</p>
          <p className="text-md text-[#3A3A3A]">Dobbespet Public School aims at all-round development of children into well disciplined</p>
        </div>

        <img src="./img2.png" className="h-[auto] mt-[8em]" />

      </div>


      <div className="p-6 bg-[#BCDDF0] text-[#3A3A3A] flex space-around flex-col gap-2">
        <div className="flex flex-col gap-6">
          <span className="text-5xl font-helvetica font-[900]">MISSION</span>
          <p className="text-2xl text-[#2973B2] font-semibold">Nurturing curiosity, excellence, and lifelong learning in every student.</p>
          <p className="text-md text-[#3A3A3A]">Delhi Public School Bangalore  is dedicated to providing a comprehensive education programme for its students</p>
        </div>
        <img src="./img3.png" className="h-[auto] mt-[10em]" />

      </div>
    </div>
  );
};

export default Motto;
