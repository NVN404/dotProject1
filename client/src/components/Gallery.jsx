import React from "react";
import HeaderTemp from "./HeaderTemp";
import HeaderForOthers from "./HeaderForOthers";

const Gallery = () => {
  const images = [
    "/gal1.jpg",
    "/gal2.jpg",
    "/gal3.jpg",
    "/gal4.jpg",
    "/gal5.jpg",
    "/gal6.jpg",
  ];

  return (
    <div className="">
      <HeaderForOthers />
      <div className=" flex justify-center items-center h-[80vh] w-full overflow-hidden relative">
      {/* Softer shadow effect on top and bottom */}
      <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>

      <div className="relative h-screen w-[75vw] md:w-[60vw] lg:w-[60vw] overflow-hidden">
        <div className="absolute top-0 flex flex-col items-center gap-4 animate-scroll-infinite">
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;

