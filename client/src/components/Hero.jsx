import React, { useEffect, useRef, useState, useCallback } from "react";
import HeaderTemp from "./HeaderTemp";
import MainCarousel from "./Carousel";

const Hero = () => {
  const headerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState("auto");

  const updateHeight = useCallback(() => {
    if (headerRef.current && marqueeRef.current) {
      setHeroHeight(`${headerRef.current.offsetHeight + marqueeRef.current.offsetHeight}px`);
    }
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [updateHeight]);

  return (
    <div className="relative w-full h-[75vh] md:min-h-screen">
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
