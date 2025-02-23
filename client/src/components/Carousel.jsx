import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/gal1.jpg", "/gal2.jpg", "/gal3.jpg"];

const MainCarousel = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
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
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default MainCarousel;
