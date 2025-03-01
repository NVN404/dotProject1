import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PrimarySchoolPage } from "./SchoolPages"; // Primary School
import { MiddleSchoolPage } from "./SchoolPages";   // Middle School
import { HighSchoolPage } from "./SchoolPages";                      // High School
import { RiCloseLargeLine } from "react-icons/ri";

gsap.registerPlugin();

const Academics = () => {
  const [activePage, setActivePage] = useState(null); // Tracks which page is active
  const activePageRef = useRef(null); // Ref to scroll to the active component
  const cancelButtonRef = useRef(null); // Ref to scroll to the cancel button

  const sections = [
    {
      title: "Primary",
      subtitle: "Grades I-V",
      description: "A nurturing space where young learners begin their journey with curiosity and joy, building foundational skills through engaging lessons and play.",
      image: "/gal4.jpg",
      component: PrimarySchoolPage,
    },
    {
      title: "Middle School",
      subtitle: "Grades VI-VIII",
      description: "A place of discovery where students develop critical thinking and independence, preparing for future challenges in a supportive environment.",
      image: "/gal5.jpg",
      component: MiddleSchoolPage,
    },
    {
      title: "High School",
      subtitle: "Grades IX-XII",
      description: "Where students refine skills, explore passions, and prepare for higher education with rigorous academics and leadership opportunities.",
      image: "/gal6.jpg",
      component: HighSchoolPage,
    },
  ];

  const handleReadMore = (index) => {
    setActivePage(index);
    gsap.fromTo(
      ".active-page",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4, 
        ease: "power3.out",
        onComplete: () => {
          if (cancelButtonRef.current) {
            cancelButtonRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    );
  };

  const handleNext = () => {
    if (activePage < sections.length - 1) {
      setActivePage(activePage + 1);
      gsap.fromTo(
        ".active-page",
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          ease: "power3.out",
          onComplete: () => {
            if (cancelButtonRef.current) {
              cancelButtonRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      );
    }
  };

  const handleBack = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
      gsap.fromTo(
        ".active-page",
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          ease: "power3.out",
          onComplete: () => {
            if (cancelButtonRef.current) {
              cancelButtonRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      );
    } else {
      handleCancel();
    }
  };

  const handleCancel = () => {
    setActivePage(null);
    gsap.fromTo(
      ".card-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
    );
  };

  useGSAP(() => {
    if (activePage === null) {
      gsap.from(".card", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [activePage]);

  const ActiveComponent = activePage !== null ? sections[activePage].component : null;

  return (
    <div className="min-h-screen bg-gray-50 mb-[3.5em] md:mb-0">
      {/* Card View */}
      {activePage === null ? (
        <div className="card-container md:p-[5em] md:pb-[1em] md:pt-[1.5em] p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="card bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">{section.title}</h2>
                  <h3 className="text-sm sm:text-base text-[#2973B2] font-semibold">{section.subtitle}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-2 flex-grow">{section.description}</p>
                  <button
                    onClick={() => handleReadMore(index)}
                    className="mt-4 px-4 py-2 bg-[#2973B2] text-white rounded-lg hover:bg-green-500 transition-colors duration-300 text-sm sm:text-base self-start"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Full Page View */
        <div ref={activePageRef} className="active-page relative min-h-screen">
          {/* Cancel Icon at Top */}
          <div className="flex justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4">
            <button
              ref={cancelButtonRef}
              onClick={handleCancel}
              className="bg-[#2973B2] text-white p-2 rounded-full hover:bg-green-500 transition-colors duration-300 shadow-md"
              aria-label="Close and return to card view"
            >
              <RiCloseLargeLine size={24} />
            </button>
          </div>
          <ActiveComponent />
          {/* Navigation Buttons at Bottom */}
          <div className="flex justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 bg-gray-50">
            <button
              onClick={handleBack}
              className={`px-4 py-2 sm:px-6 sm:py-3 bg-[#2973B2] text-white rounded-lg hover:bg-green-500 transition-colors duration-300 text-sm sm:text-base shadow-md ${activePage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={activePage === 0 && activePage !== null}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className={`px-4 py-2 sm:px-6 sm:py-3 bg-[#2973B2] text-white rounded-lg hover:bg-green-500 transition-colors duration-300 text-sm sm:text-base shadow-md ${activePage === sections.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={activePage === sections.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Academics;