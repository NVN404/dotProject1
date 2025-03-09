import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "MOTTO",
    text: "Inspiring young minds to learn, grow, and succeed",
    desc: "Our motto is to ignite young minds with a passion for learning, growth, and success. We believe in fostering resilience, integrity, and creativity to shape future leaders.",
    bg: "bg-[#E0ECFF]",
    img: "",
  },
  {
    title: "VISION",
    text: "Shaping a future where knowledge and character go hand in hand.",
    desc: "We envision a future where every student is empowered with knowledge, skills, and values to become responsible global citizens. We aim to inspire excellence and leadership in every learner.",
    bg: "bg-[#B8D4FF]",
    img: "",
  },
  {
    title: "MISSION",
    text: "Nurturing curiosity, excellence, and lifelong learning in every student.",
    desc: "Our mission is to provide a nurturing environment where students develop academically, socially, and emotionally. We strive to create a community that fosters curiosity, innovation, and lifelong learning.",
    bg: "bg-[#91BBFF]",
    img: "",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Motto = () => {
  return (
    <div className="w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white overflow-hidden mb-8">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`p-8 rounded-3xl shadow-lg ${section.bg} text-[#0A3760] flex flex-col justify-between gap-4`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col gap-4">
            <motion.span
              className="text-5xl font-bold tracking-wide"
              whileHover={{ scale: 1.05 }}
            >
              {section.title}
            </motion.span>
            <p className="text-xl text-[#0E5AA7] font-semibold">{section.text}</p>
            <p className="text-md text-[#1E3A5F] leading-relaxed">{section.desc}</p>
          </div>
          <motion.img
            src={section.img}
            alt={section.title}
            className="w-auto max-h-[300px] object-contain mx-auto mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Motto;
