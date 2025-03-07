import React, { useEffect, useRef, useState } from "react";
import HeaderForOthers from "./HeaderForOthers";
import Panel from "./Panel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createClient } from "@supabase/supabase-js";

gsap.registerPlugin(ScrollTrigger);

const supabaseUrl = "https://hdxtuvuiwsmeflrzfyzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE"; // Replace with actual API Key
const supabase = createClient(supabaseUrl, supabaseKey);

const Gallery = () => {
  const [imageStyles, setImageStyles] = useState([]);
  const [images, setImages] = useState([]);
  const mobileGalleryRef = useRef(null);
  const desktopGalleryRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("gallery")
        .select("image_url");
      if (error) {
        console.error("Error fetching images:", error);
      } else {
        setImages(data.map((item) => item.image_url));
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const updateImageStyles = () => {
      const newStyles = images.map((img) => {
        const imgElement = new Image();
        imgElement.src = img;
        return new Promise((resolve) => {
          imgElement.onload = () => {
            resolve(
              imgElement.naturalHeight > imgElement.naturalWidth
                ? "row-span-2"
                : ""
            );
          };
        });
      });

      Promise.all(newStyles).then((styles) => setImageStyles(styles));
    };

    updateImageStyles();
  }, [images]);

  useEffect(() => {
    // Mobile image animations
    gsap.utils.toArray(".mobile-gallery-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100, scale: 0.95, rotation: -2 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 0.5,
          },
          delay: index * 0.1,
        }
      );
    });

    // Desktop image animations
    gsap.utils.toArray(".desktop-gallery-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 60%",
          },
          delay: index * 0.1,
        }
      );
    });
  }, [images]);

  return (
    <div className="bg-white">
      <HeaderForOthers />
      <div className="mt-[7em] md:mt-0 lg:mt-0 ">
        <div className="hidden lg:block">
          <Panel src="./gal3.jpg" content="Gallery" />
        </div>

        {/* Mobile Gallery */}
        <div className="md:hidden min-h-screen text-white relative overflow-x-hidden">
          <div
            ref={mobileGalleryRef}
            className="pt-20 pb-10 px-4 flex flex-col gap-8"
          >
            {!images || images.length === 0 ? (
              <div className="flex justify-center items-center">
                <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              images.map((src, index) => (
                <div
                  key={index}
                  className="mobile-gallery-item relative  overflow-hidden shadow-lg group cursor-pointer"
                  style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-min h-min object-cover transition-transform duration-500 shadow-custom"
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Desktop Grid Gallery */}
        <div
          ref={desktopGalleryRef}
          className="hidden md:grid grid-cols-4 gap-3 p-4 w-full mx-auto grid-flow-row"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`desktop-gallery-item relative overflow-hidden shadow-lg h-full w-full group cursor-pointer  ${imageStyles[index]}`}
            >
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className={`w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-75 group-hover:scale-110 shadow-custom`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
