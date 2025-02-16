import React from "react";

const ProfileCard = ({ name, title, designation, image, description }) => {
    return (
        <div className="mt-[2em] flex flex-col md:flex-row bg-white shadow-xl rounded-2xl p-8 bt-8 w-full max-w-7xl mx-auto border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-1/3 flex justify-center md:justify-start">
                <img
                    src={image}
                    alt={name}
                    className="w-64 h-64 object-cover rounded-xl shadow-lg border border-gray-300"
                />
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">{name}</h2>
                <p className="text-md text-gray-500 mt-2 text-center md:text-left italic">{title}</p>
                <p className="text-[#003cff] font-semibold mt-2 text-center md:text-left uppercase tracking-wide">{designation}</p>
                <p className="text-gray-700 mt-4 text-center md:text-left leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const Profiles = () => {
    const profiles = [
        {
            name: "Prof. Dr. naveen kumar s ",
            title: "M.A, M.Ed, M.Sc., MBA, Ph.D, P.G.D.P.M.I.R, F.M.S.P.I, D.B.M.",
            designation: "CHAIRMAN / DIRECTOR",
            image: "https://avatars.githubusercontent.com/u/119102587?v=4",
            description:
                "Prof. Dr. Jayarama Shetty serves as an exemplary figure in the field of education...",
        },
        {
            name: "Prof. Dr. michael",
            title: "M.A, M.Ed, Ph.D, D.B.M.",
            designation: "SECRETARY / PRINCIPAL",
            image: "https://avatars.githubusercontent.com/u/119102587?v=4",
            description:
                "Prof. Dr. Another Name has played a crucial role in education with a strong commitment...",
        },
    ];

    return (
        <div className="p-[1.5em] space-y-8">
            {profiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
            ))}
        </div>
    );
};

export default Profiles;
