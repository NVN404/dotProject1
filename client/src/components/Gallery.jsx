import React from "react";
import HeaderTemp from "./HeaderTemp";
import HeaderForOthers from "./HeaderForOthers";

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

      <div className="md:hidden flex justify-center items-center h-[80vh] w-full overflow-hidden relative mt-[7em] md:mt-[9em]">
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



      <div className="grid grid-cols-5 gap-4 p-4 w-full mx-auto mt-[7em] md:mt-[9em]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg h-48 w-72 ${index % 5 === 1 || index % 5 === 3 ? 'mt-8' : index % 5 === 2 ? 'mt-4' : ''
              }`}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;