import React, { useState, useRef, useEffect, useContext } from "react";
import supabase from "../../supabaseClient";
import { useNavigate, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

import { AdmissionContext } from "./context/AdmissionContext";
import { SelectedNoticeContext } from "./context/SelectedNoticeContext";

gsap.registerPlugin(ScrollTrigger);

const HeaderTemp = () => {
  const { selectedNoticeId, setSelectedNoticeId } = useContext(
    SelectedNoticeContext
  );
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { openAdmissionForm, setOpenAdmissionForm } =
    useContext(AdmissionContext);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const marqueeRef = useRef(null);
  const headerRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname);

  useEffect(() => {
    const fetchNotices = async () => {
      const { data, error } = await supabase.from("notices").select("*");
      if (error) {
        console.error("Error fetching notices:", error);
      } else {
        setNotices(data);
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  useEffect(() => {
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);

  useGSAP(() => {
    if (!marqueeRef.current || !headerRef.current) return;

    const marqueeWidth = marqueeRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.fromTo(
      marqueeRef.current,
      { x: viewportWidth },
      {
        x: -marqueeWidth,
        duration: marqueeWidth / 25,
        repeat: -1,
        ease: "linear",
      }
    );

    gsap.from(menuItemsRef.current, {
      x: 200,
      duration: 1,
      delay: 1,
      stagger: 0.15,
    });

    gsap.to(headerRef.current, {
      backgroundColor: "#0047A3",
      position: "fixed",
      top: 0,
      duration: 0.1,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.7)",
      scrollTrigger: {
        trigger: ".marquee",
        scroller: "body",
        start: "bottom top",
        end: "+=50",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      isOpen
        ? menuRef.current.removeAttribute("inert")
        : menuRef.current.setAttribute("inert", "true");
    }
  }, [isOpen]);

  const toggleMenu = (state) => {
    setIsOpen(state);
    gsap.to(menuRef.current, {
      right: state ? "0%" : "-100%",
      duration: 0.5,
      ease: "linear",
    });

    if (state) {
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "linear" }
      );
    }
  };

  const handleNavigation = (path) => {
    toggleMenu(false);
    navigate(path);
  };

  return (
    <div className="w-full"  style={{
      background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.4767) 82%, rgba(0,0,0,0) 100%)",
    }}>
      <div className="overflow-hidden bg-white text-background font-semibold h-[3em] lg:h-[4em] p-[0.7em] lg:p-[1em] w-full marquee">
        <div ref={marqueeRef} className="w-min flex whitespace-nowrap">
          <div className="flex items-center gap-10">
            <span className="flex justify-center items-center">
              {loading ? (
                <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="text-xl font-semibold mr-2">
                    {notices.length > 0 ? notices.slice(-1)[0].content : " "}
                  </span>
                  <button
                    className="bg-background text-white h-[2em] w-[5em] rounded-lg flex items-center justify-center"
                    onClick={() => {
                      if (notices.length > 0) {
                        setSelectedNoticeId(notices[notices.length - 1].id);
                        navigate("/circular");
                      }
                    }}
                  >
                    Click me
                  </button>
                </>
              )}
            </span>
            <span className="flex items-center gap-2 text-xl font-semibold">
              <IoIosMail />
              dpslakkur2010@gmail.com
            </span>
            <span className="flex items-center gap-2 text-xl font-semibold">
              <FaPhone />
              9535054460
            </span>
            <span className="flex items-center gap-2 text-xl font-semibold">
              <FaPhone />
              8553888452
            </span>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className="w-full h-[7em] md:h-[9em] flex justify-between items-center px-4 md:px-[3em] py-3"
      >
        <div
          className="flex flex-col items-center justify-center cursor-pointer "
          onClick={() => navigate("/")}
        >
          <img
            src="/DobbespetPublicSchool.png"
            className="h-[5em] md:h-[7em] invert"
            alt="School Logo"
          />
          <span className="text-white text-lg sm:text-lg font-bold font-newsreader">
            Dobbespet Public School
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center text-white font-semibold space-x-6 lg:space-x-8 xl:space-x-12">
          {[
            "/",
            "/about",
            "/academics",
            "/circular",
            "/admission",
            "/gallery",
            "/contact",
          ].map((path, idx) => (
            <li
              key={idx}
              className={`relative after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:bg-white after:transition-all after:duration-[0.5s] hover:after:w-full cursor-pointer ${
                activeMenuItem === path ? "after:w-full" : "after:w-0"
              }`}
              onClick={() => handleNavigation(path)}
            >
              {path.slice(1).toUpperCase() || "HOME"}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => toggleMenu(true)}
          aria-label="Open navigation menu"
        >
          <AiOutlineMenuFold />
        </button>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-[-100%] w-[80%] h-screen bg-background/60 backdrop-blur-sm font-bold text-white flex flex-col items-center justify-center text-lg space-y-5 z-50 transition-all"
        >
          <button
            className="absolute top-4 right-6 text-3xl"
            onClick={() => toggleMenu(false)}
            aria-label="Close navigation menu"
          >
            <RiCloseLargeLine />
          </button>
          <ul className="flex flex-col text-xl justify-center items-center">
            {[
              "/",
              "/about",
              "/academics",
              "/circular",
              "/admission",
              "/gallery",
              "/contact",
            ].map((path, idx) => (
              <li
                key={idx}
                ref={(el) => (menuItemsRef.current[idx] = el)}
                className="mb-[2em] cursor-pointer"
                onClick={() => handleNavigation(path)}
              >
                {path.slice(1).toUpperCase() || "HOME"}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderTemp;
