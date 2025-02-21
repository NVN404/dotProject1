import React from "react";

const ProfileCard = ({ name, title, designation, image, description }) => {
    return (
        <div className="mt-[2em] flex flex-col md:flex-row bg-white shadow-xl rounded-2xl p-8 bt-8 w-full max-w-7xl mx-auto border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-1/3 flex justify-center md:justify-start">
                <img
                    src={image}
                    alt={name}
                    className="w-64 h-64 object-cover  rounded-xl shadow-lg border border-gray-300"
                />
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 flex flex-col justify-center ">
                <h2 className="text-3xl  font-semibold text-black text-center md:text-left">{name}</h2>
                <p className="text-md text-gray-600 font-semibold mt-2 text-center md:text-left italic">{title}</p>
                <p className="text-[#003cff] font-bold mt-2 text-center md:text-left uppercase tracking-wide">{designation}</p>
                <p className="text-gray-600 mt-4 text-center md:text-left leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const Profiles = () => {
    const profiles = [
        {
            name: "Mr. Zubair Ahamed",
            title: "M.A, M.Ed, M.Sc., MBA, Ph.D, P.G.D.P.M.I.R, F.M.S.P.I, D.B.M.",
            designation: "SECRETARY",
            image: "/Secretory.jpg",
            description:
                "Mr. Zubair Ahamed is a dedicated and hardworking professional who plays a vital role in ensuring the smooth operation of our institution. With his exceptional organizational skills, commitment to excellence, and friendly demeanor, he efficiently manages administrative tasks while always being approachable and supportive to students, teachers, and staff. His dedication to the school's growth and success makes him an invaluable part of our team.",
        },
        {
            name: "Mrs. Sameena Begum",
            title: "M.A, M.Ed, Ph.D, D.B.M.",
            designation: "PRINCIPAL",
            image: "/Principal.jpg",
            description:
                "Mrs. Sameena Begum is a visionary leader who inspires excellence in both students and staff. With her unwavering dedication, strong leadership, and compassionate approach, she creates a nurturing and disciplined environment that fosters academic success and personal growth. Her commitment to education, innovation, and the holistic development of every student makes her a guiding force in shaping the future of our school.",
        },
    ];

    return (
        <div className="md:p-[10em] md:pb-0 md:pt-0 ">
            <div className="p-[2em] pt-[1em] pb-[2.5em] bg-[#2973B2] lg:rounded-3xl  space-y-10">
                {profiles.map((profile, index) => (
                    <ProfileCard key={index} {...profile} />
                ))}
            </div>
        </div>
    );
};

export default Profiles;
