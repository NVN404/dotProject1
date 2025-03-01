import React from "react";

const HighSchoolPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 w-full pb-12 pt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Header Section */}
      <div className="bg-sky-900 w-full max-w-screen-xl mx-auto rounded-xl shadow-lg pt-4 pb-6 px-6 sm:px-8 md:px-10 transition-all duration-300 hover:shadow-xl">
        <h1 className="font-sans text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-4 pl-4 tracking-wide">High School (Grades VIII to XII)</h1>
        <h4 className="text-white font-sans pl-4 mt-2 text-base sm:text-lg italic text-opacity-90">
          Where Confidence, Independence, Leadership, and Awareness Thrive
        </h4>
      </div>

      {/* Main Content */}
      <div className="bg-white w-full max-w-screen-xl mx-auto mt-6 rounded-xl shadow-md px-6 sm:px-8 md:px-10 pb-12 transition-all duration-300 hover:shadow-lg">
        {/* Content Section */}
        <div className="pt-10 px-4 sm:px-6 flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3 hidden">Overview</h3> {/* Hidden heading for consistency */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              The Secondary Grades buzz with activity at Dobbespet Public School. We challenge every student to reach their potential through high expectations and personalized guidance, fostering a culture of achievement.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Personality development is nurtured through workshops on Life Skills, Value Education, Vocational Counseling, and teenage issues, in collaboration with experts like Alma Mater. Career Counseling sessions empower future leaders—engineers, doctors, and entrepreneurs—with clarity and confidence.
            </p>
          </div>
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3 hidden">Activities & Assessment</h3> {/* Hidden heading for consistency */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Students take charge in organizing school events and excel in inter-school competitions. Activities like debates, skits, and presentations hone oratory skills and creativity, while the School Cabinet builds leadership.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Daily progress is tracked via classwork, homework, and projects, with unit tests and semester exams ensuring comprehension. Extracurriculars remain a vital part of our balanced curriculum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighSchoolPage;