import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/gal1.jpg", "/gal2.jpg", "/gal3.jpg"];

const MainCarousel = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex((prev) => prev); // Store previous index properly
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []); // Run only once

  return (
    <div className="absolute w-full h-[35vh] md:h-[85vh] overflow-hidden top-[3em] lg:top-[4em] -z-20">
      {/* Previous Image stays visible */}
      <img
        src={images[prevIndex]}
        alt={`Slide ${prevIndex + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* New Image Fades in over it */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Smooth fade effect
        />
      </AnimatePresence>
    </div>
  );
};

export default MainCarousel;
