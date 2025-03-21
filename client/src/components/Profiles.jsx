import React from "react";

const ProfileCard = ({ name, title, designation, image, description }) => {
    return (
        <div className="mt-[2em] flex flex-col md:flex-row bg-white shadow-lg rounded-2xl p-6 lg:p-8 w-full max-w-7xl mx-auto border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
            src={image}
            alt={name}
            className="w-full h-60 md:w-60 lg:w-64 lg:h-64 object-cover rounded-xl shadow-2xl border border-gray-300 transition-all duration-300"
            />
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center md:text-left transition-all duration-300">
            {name}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold mt-2 text-center md:text-left italic">
            {title}
            </p>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl text-background font-bold mt-2 text-center md:text-left uppercase tracking-wide">
            {designation}
            </p>
            <p className="text-sm sm:text-md md:text-base lg:text-xl text-gray-600 mt-4   leading-relaxed text-justify">
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
      title: "B.Sc., D.H.M.",
      designation: "SECRETARY",
      image: "/Secretory.jpg",
      description:
        "Mr. Zubair Ahamed is a dedicated and hardworking professional who plays a vital role in ensuring the smooth operation of our institution. With his exceptional organizational skills, commitment to excellence, and friendly demeanor, he efficiently manages administrative tasks while always being approachable and supportive to students, teachers, and staff. His dedication to the school's growth and success makes him an invaluable part of our team.",
    },
    {
      name: "Sameena Begum",
      title: "M.Sc., B.Ed",
      designation: "PRINCIPAL",
      image: "/Principal.jpg",
      description:
        "Mrs. Sameena Begum is a visionary leader who inspires excellence in both students and staff. With her unwavering dedication, strong leadership, and compassionate approach, she creates a nurturing and disciplined environment that fosters academic success and personal growth. Her commitment to education, innovation, and the holistic development of every student makes her a guiding force in shaping the future of our school.",
    },
  ];

    return (
        <div className="md:p-[10em] md:pb-0 md:pt-0 bg-background ">
            <div className="p-[2em] pt-[1em] pb-[2.5em]  lg:rounded-3xl  space-y-10">
                {profiles.map((profile, index) => (
                    <ProfileCard key={index} {...profile} />
                ))}
            </div>
        </div>
    );
};

export default Profiles;
