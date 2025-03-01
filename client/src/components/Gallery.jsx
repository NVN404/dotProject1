import React from "react";
import HeaderTemp from "./HeaderTemp";
import HeaderForOthers from "./HeaderForOthers";
import Panel from "./Panel";

const Gallery = () => {
  const images = [
    "/gal1.jpg",
    "/gal2.jpg",
    "/gal2.jpg",
    "/gal2.jpg",
    "/gal2.jpg",
    "/gal3.jpg",
    "/gal3.jpg",
    "/gal3.jpg",
    "/gal4.jpg",
    "/gal4.jpg",
    "/gal5.jpg",
    "/gal5.jpg",
    "/gal5.jpg",
    "/gal6.jpg",
    "/gal6.jpg",
  ];

  return (
    <div>
      <HeaderForOthers />
      <div className="mt-[7em] md:mt-0 lg:mt-0 ">

        {/* Panel is only visible on large screens */}
        <div className="hidden lg:block">
          <Panel src="/gal1.jpg" content="Gallery" />
        </div>

        {/* Mobile scrolling gallery with overlay text */}
        <div className="md:hidden flex justify-center items-center h-[80vh] w-full overflow-hidden relative">
          {/* "Gallery" text overlay */}
          <span className="absolute top-5 left-1/2 transform -translate-x-1/2 text-5xl font-extrabold font-cinzel text-white z-20 [text-shadow:_2px_2px_6px_rgba(0,0,0,0.7)]">
            Gallery
          </span>


          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10"></div>

          {/* Scrolling images */}
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

        {/* Desktop Grid Gallery */}
        {/* Desktop Grid Gallery */}
<div className="hidden md:grid grid-cols-4 gap-4 p-4 w-full mx-auto">
  {images.map((img, index) => (
    <div
      key={index}
      className={`relative overflow-hidden rounded-lg shadow-lg h-52 w-full ${
        index % 4 === 1 || index % 4 === 3 ? "mt-8" : index % 4 === 2 ? "mt-4" : ""
      }`}
    >
      <img
        src={img}
        alt={`Gallery ${index + 1}`}
        className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out hover:brightness-75 hover:cursor-pointer hover:scale-110"
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Gallery;
