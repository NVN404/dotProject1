import React from "react";

const PrimarySchoolPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 w-full pb-12 pt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Header Section */}
      <div className="bg-sky-900 w-full max-w-screen-xl mx-auto rounded-xl shadow-lg pt-4 pb-6 px-6 sm:px-8 md:px-10 transition-all duration-300 hover:shadow-xl">
        <h1 className="font-sans text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-4 pl-4 tracking-wide">Primary School (Grades I to VII)</h1>
        <h4 className="text-white font-sans pl-4 mt-2 text-base sm:text-lg italic text-opacity-90">
          Fostering Growth Through Interaction and Responsibility
        </h4>
      </div>

      {/* Main Content */}
      <div className="bg-white w-full max-w-screen-xl mx-auto mt-6 rounded-xl shadow-md px-6 sm:px-8 md:px-10 pb-12 transition-all duration-300 hover:shadow-lg">
        {/* Content Section */}
        <div className="pt-10 px-4 sm:px-6 flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3 hidden">Overview</h3> {/* Hidden heading for consistency */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Grades I to IV at Dobbespet Public School are alive with excitement. Using a Thematic Inter-disciplinary approach, we align with modern pedagogy to spark curiosity and engagement.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Middle School (Grades V to VII) broadens the curriculum, laying a strong foundation for high school. Study skills are sharpened, concepts are solidified, and group work nurtures growing social awareness and responsibility.
            </p>
          </div>
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3 hidden">Holistic Development</h3> {/* Hidden heading for consistency */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Tailored to each child’s uniqueness, our curriculum extends beyond academics. Creative pursuits like mime, dance, music, field trips, sports, and hobby clubs enrich their growth.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Talent shines through hobby clubs and excursions, while tests and parent-teacher interactions track progress. Our goal is maximum growth, blending academics with self-discipline and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimarySchoolPage;