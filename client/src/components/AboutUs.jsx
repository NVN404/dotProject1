import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import HeaderForOthers from "./HeaderForOthers";
import Panel from "./Panel";

gsap.registerPlugin();

const SectionWithImage = ({
  image,
  title,
  content,
  reverse = false,
  bgColor,
}) => {
  return (
    <div
      className={`section flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16 max-w-6xl mx-auto`}
    >
      <motion.div
        className="md:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-cover rounded-lg shadow-custom"
        />
      </motion.div>
      <motion.div
        className={`md:w-1/2 w-full ${bgColor} rounded-lg p-6 sm:p-8 md:p-12 text-center md:text-left shadow-lg`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-white text-base sm:text-lg leading-relaxed">
          {content}
        </p>
      </motion.div>
    </div>
  );
};

const AboutUs = () => {
  useGSAP(() => {
    gsap.from(".section", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div>
      <HeaderForOthers />
      <Panel src="/gal16.jpg" content="About us" />
      <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 md:px-12 lg:px-24 space-y-24">
        {/* Mission Section */}
        <SectionWithImage
          image="/gal8.jpg"
          title="Our Mission"
          content="Our mission is to provide a nurturing environment where students develop academically, socially, and emotionally. We strive to create a community that fosters curiosity, innovation, and lifelong learning."
          bgColor="bg-background"
        />

        {/* About the School Section */}
        <div className="section w-full mx-auto text-center">
          <section className="relative bg-white py-16 px-4 sm:px-6 md:px-12 rounded-xl shadow-2xl">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/gal14.jpg"
                  alt="About the School"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-cover rounded-lg shadow-custom"
                />
              </motion.div>
              <motion.div
                className="text-background space-y-4 sm:space-y-6 text-center md:text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  About the School
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  Dobbespet Public School is an unaided institution that has
                  been serving the community since 2010-11. Our school is
                  committed to providing a supportive and stimulating learning
                  environment that encourages students to grow and thrive.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We offer a range of academic programs, extracurricular
                  activities, and support services that cater to the diverse
                  needs and interests of our students. Our facilities include a
                  computer lab and science lab. We also have a range of clubs
                  and societies that promote student engagement, leadership, and
                  community service.
                </p>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Vision Section */}
        <SectionWithImage
          image="/gal12.jpg"
          title="Our Vision"
          content="We envision a future where every student is empowered with knowledge, skills, and values to become responsible global citizens. We aim to inspire excellence and leadership in every learner."
          bgColor="bg-background"
          reverse
        />

        {/* History Section */}
        <div className="section w-full mx-auto text-center">
          <section className="relative bg-white py-16 px-4 sm:px-6 md:px-12 rounded-xl shadow-2xl">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/gal13.jpg"
                  alt="Our History"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-cover rounded-lg shadow-custom"
                />
              </motion.div>
              <motion.div
                className="text-background space-y-4 sm:space-y-6 text-center md:text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  Our Journey Through Time
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  Established a decade ago, our school has been a beacon of
                  excellence in education. From humble beginnings, we have grown
                  into a renowned institution that values tradition while
                  embracing modern education practices.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Over the years, we have nurtured thousands of students,
                  equipping them with knowledge, skills, and the confidence to
                  shape the world. Our commitment to holistic education
                  continues to drive us forward.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
