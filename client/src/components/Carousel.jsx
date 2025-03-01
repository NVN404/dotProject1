import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/gal1.jpg", "/gal2.jpg", "/gal3.jpg"];

const MainCarousel = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload images
    const preloadImages = images.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoading(false);
      return img;
    });

    // Start automatic sliding
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      preloadImages.forEach((img) => (img.onload = null));
    };
  }, [index]);

  return (
    <div className="absolute top-0 left-0 w-full h-[75vh] md:h-full -z-10 flex justify-center items-center">
      {/* Show Loader while images are loading */}
      {loading && (
        <div className="absolute w-full h-full flex justify-center items-center bg-black/50 z-10">
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Previous Image stays visible */}
      <img
        src={images[prevIndex]}
        alt={`Slide ${prevIndex + 1}`}
        className="absolute top-0 left-0 w-full h-[75vh] md:h-full object-cover"
      />

      {/* New Image Fades in over it */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="absolute top-0 left-0 w-full h-[75vh] md:h-full object-cover"
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
