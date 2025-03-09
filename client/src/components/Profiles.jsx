import React from "react";

const ProfileCard = ({ name, title, designation, image, description }) => {
  return (
    <div className="mt-8 flex flex-col md:flex-row bg-white shadow-lg rounded-2xl p-6 lg:p-8 w-full max-w-7xl mx-auto border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover rounded-xl shadow-2xl border border-gray-300 transition-all duration-300"
      />
      <div className="md:pl-8 flex flex-col justify-center mt-4 md:mt-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold md:font-semibold text-black text-center md:text-left">
          {name}
        </h2>
        <p className="text-sm md:text-lg text-gray-600 font-semibold mt-2 text-center md:text-left italic">
          {title}
        </p>
        <p className="text-sm md:text-lg lg:text-xl text-[#2973B2] font-bold mt-2 text-center md:text-left uppercase tracking-wide">
          {designation}
        </p>
        <p className="text-sm md:text-base lg:text-xl text-gray-600 mt-4 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

const Profiles = () => {
  const profiles = [
    {
      name: "Zubair Ahmed",
      title: "M.Ed, D.H.M.",
      designation: "SECRETARY",
      image: "/Secretory.jpg",
      description:
        "Mr. Zubair Ahamed is a dedicated and hardworking professional who plays a vital role in ensuring the smooth operation of our institution. With his exceptional organizational skills, commitment to excellence, and friendly demeanor, he efficiently manages administrative tasks while always being approachable and supportive to students, teachers, and staff. His dedication to the school's growth and success makes him an invaluable part of our team.",
    },
    {
      name: "Sameena Begum",
      title: "M.Sc., M.Ed",
      designation: "PRINCIPAL",
      image: "/Principal.jpg",
      description:
        "Mrs. Sameena Begum is a visionary leader who inspires excellence in both students and staff. With her unwavering dedication, strong leadership, and compassionate approach, she creates a nurturing and disciplined environment that fosters academic success and personal growth. Her commitment to education, innovation, and the holistic development of every student makes her a guiding force in shaping the future of our school.",
    },
  ];

  return (
    <div className="md:px-[10em] md:pb-0 md:pt-0 bg-[#2973B2]">
      <div className="p-8 lg:rounded-3xl space-y-10">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
