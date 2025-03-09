import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "MOTTO",
    text: "Inspiring young minds to learn, grow, and succeed",
    desc: "A motto is a vivid reflection of the mettle that goes into the making of an institution.",
    bg: "bg-[#D0E7F8]",
    img: "./img1.png",
  },
  {
    title: "VISION",
    text: "Shaping a future where knowledge and character go hand in hand.",
    desc: "Dobbespet Public School aims at all-round development of children into well-disciplined individuals.",
    bg: "bg-[#98C4E1]",
    img: "./img2.png",
  },
  {
    title: "MISSION",
    text: "Nurturing curiosity, excellence, and lifelong learning in every student.",
    desc: "Dobbespet Public School is dedicated to providing a comprehensive education programme for its students.",
    bg: "bg-[#BCDDF0]",
    img: "./img3.png",
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
          className={`p-8 rounded-3xl shadow-lg ${section.bg} text-gray-900 flex flex-col justify-between gap-4`}
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
            <p className="text-xl text-[#2973B2] font-semibold">{section.text}</p>
            <p className="text-md text-gray-800 leading-relaxed">{section.desc}</p>
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
