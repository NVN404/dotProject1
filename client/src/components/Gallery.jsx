import React, { useEffect, useRef, useState } from "react";
import HeaderForOthers from "./HeaderForOthers";
import Panel from "./Panel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createClient } from "@supabase/supabase-js";

gsap.registerPlugin(ScrollTrigger);

const supabaseUrl = "https://hdxtuvuiwsmeflrzfyzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE";
const supabase = createClient(supabaseUrl, supabaseKey);
const Gallery = () => {
  const [imageStyles, setImageStyles] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const galleryRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.from("gallery").select("image_url");
      if (error) {
        console.error("Error fetching images:", error);
      } else {
        setImages(data.map((item) => item.image_url));
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const updateImageStyles = async () => {
      const newStyles = await Promise.all(
        images.map((img) =>
          new Promise((resolve) => {
            const imgElement = new Image();
            imgElement.src = img;
            imgElement.onload = () => {
              resolve(imgElement.naturalHeight > imgElement.naturalWidth ? "row-span-2" : "");
            };
          })
        )
      );
      setImageStyles(newStyles);
      setLoading(false);
    };

    if (images.length > 0) {
      updateImageStyles();
    }
  }, [images]);

  useEffect(() => {
    if (!loading) {
      gsap.utils.toArray(".gallery-item").forEach((item, index) => {
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
              scrub: 2,
            },
            delay: index * 0.1,
          }
        );
      });
    }
  }, [loading]);

  return (
    <div className="bg-white">
      <HeaderForOthers />
      <div className="mt-[7em] md:mt-0 lg:mt-0">
        <Panel src="./gal3.jpg" content="Gallery" />

        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
          </div>
        ) : (
          <div
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 w-full mx-auto grid-flow-row"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`gallery-item relative overflow-hidden shadow-lg h-full w-full group cursor-pointer ${imageStyles[index]}`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-75 group-hover:scale-110 shadow-custom selectDisable"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;