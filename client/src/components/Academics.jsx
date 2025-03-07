import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PrimarySchoolPage, MiddleSchoolPage, HighSchoolPage } from "./SchoolPages";
import { RiCloseLargeLine } from "react-icons/ri";

gsap.registerPlugin();

const Academics = () => {
  const [activePage, setActivePage] = useState(null);
  const activePageRef = useRef(null);
  const cancelButtonRef = useRef(null);

  const sections = [
    {
      title: "Primary School",
      subtitle: "Grades I-V",
      description: "We are a nurturing space where young learners begin their educational journey with curiosity and joy. Our engaging lessons in math, science, language, and social studies help build a strong foundation for lifelong learning.",
      image: "/gal4.jpg",
      component: PrimarySchoolPage,
    },
    {
      title: "Middle School",
      subtitle: "Grades VI-VIII",
      description: "Our middle school is a place of discovery, where students develop critical thinking and independence. With a well-rounded curriculum and opportunities in arts, technology, and leadership, we prepare them for future challenges. ",
      image: "/gal5.jpg",
      component: MiddleSchoolPage,
    },
    {
      title: "High School",
      subtitle: "Grades IX-XII",
      description: "High school is where students refine their skills, explore their passions, and prepare for the future. Our rigorous academics, diverse electives, and extracurricular activities help students develop independence and leadership.",
      image: "/gal6.jpg",
      component: HighSchoolPage,
    },
  ];

  const scrollToTop = () => {
    setTimeout(() => activePageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
  };

  const handleReadMore = (index) => {
    setActivePage(index);
    gsap.fromTo(".active-page", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
    scrollToTop();
  };

  const handleCancel = () => {
    setActivePage(null);
    gsap.fromTo(".card-container", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
  };

  const handleNavigation = (direction) => {
    if (direction === "next" && activePage < sections.length - 1) {
      setActivePage(activePage + 1);
    } else if (direction === "back") {
      if (activePage > 0) setActivePage(activePage - 1);
      else handleCancel();
    }
    scrollToTop();
  };

  useGSAP(() => {
    if (activePage === null) {
      gsap.from(".card", { opacity: 0, y: 30, stagger: 0.2, duration: 0.4, ease: "power2.out" });
    }
  }, [activePage]);

  const ActiveComponent = activePage !== null ? sections[activePage].component : null;

  return (
    <div className="h-auto md:min-h-screen my-10  md:my-0">
      {activePage === null ? (
        <div className="card-container md:p-20 p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
            {sections.map((section, index) => (
              <div key={index} className="card bg-white rounded-2xl shadow-2xl flex flex-col min-h-full overflow-hidden">
                <img src={section.image} alt={section.title} className="w-full  sm:h-56 md:h-64 object-cover shadow-2xl" />
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{section.title}</h2>
                  <h3 className="text-sm sm:text-base text-[#2973B2] font-semibold">{section.subtitle}</h3>
                  <p className="text-gray-600 text-justify text-sm sm:text-base mt-2 flex-grow">{section.description}</p>
                  <button
                    onClick={() => handleReadMore(index)}
                    className="mt-4 px-4 py-2 bg-[#2973B2] text-white rounded-lg hover:bg-green-500 transition duration-300 text-sm sm:text-base"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div ref={activePageRef} className="active-page relative min-h-screen">
          <div className="flex justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4">
            <button
              ref={cancelButtonRef}
              onClick={handleCancel}
              className="bg-[#2973B2] text-white p-2 rounded-full hover:bg-green-500 transition duration-300 shadow-md"
              aria-label="Close"
            >
              <RiCloseLargeLine size={24} />
            </button>
          </div>
          <ActiveComponent />
          <div className="flex justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 bg-gray-50">
            <button
              onClick={() => handleNavigation("back")}
              className={`px-4 py-2 bg-[#2973B2] text-white rounded-lg transition duration-300 shadow-md sm:px-6 sm:py-3 ${
                activePage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-500"
              }`}
              disabled={activePage === 0}
            >
              Back
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className={`px-4 py-2 bg-[#2973B2] text-white rounded-lg transition duration-300 shadow-md sm:px-6 sm:py-3 ${
                activePage === sections.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-500"
              }`}
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
