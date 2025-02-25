import React, { useEffect, useRef, useState } from "react";
import HeaderTemp from "./HeaderTemp";
import MainCarousel from "./Carousel";

const Hero = () => {
  const heroRef = useRef(null);
  const headerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState("auto");

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current && marqueeRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const marqueeHeight = marqueeRef.current.offsetHeight;
        const totalHeight = headerHeight + marqueeHeight;
        setHeroHeight(`${totalHeight}px`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-[75vh] md:min-h-screen">

      {/* Marquee Section */}
      <div ref={marqueeRef} className="relative z-30">
        <HeaderTemp />
      </div>

      {/* Carousel Positioned Behind Header */}
      <div className="absolute top-0 left-0 w-full h-[75vh] md:h-full -z-10">
        <MainCarousel />
      </div>
    </div>
  );
};

export default Hero;
