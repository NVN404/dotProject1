import React from "react";

const KindergartenPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 w-full pb-12 pt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="bg-yellow-300 w-full max-w-screen-xl mx-auto rounded-xl shadow-lg pt-4 pb-6 px-6 sm:px-8 md:px-10 transition-all duration-300 hover:shadow-xl">
        <h1 className="font-sans text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mt-4 pl-4 tracking-wide">The Kindergarten</h1>
        <h4 className="text-gray-800 font-sans pl-4 mt-2 text-base sm:text-lg italic text-opacity-90">Where Learning Meets Fun!</h4>
      </div>
      <div className="bg-white w-full max-w-screen-xl mx-auto mt-6 rounded-xl shadow-md px-6 sm:px-8 md:px-10 pb-12 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-sky-900 text-xl sm:text-2xl font-semibold pl-4 pt-6 border-b-2 border-sky-200 pb-2">Curriculum Approaches</h2>
        <p className="text-gray-700 text-sm sm:text-base pl-4 pr-4 pt-4 leading-relaxed">
          At Dobbespet Public School, we embrace a child-centered approach. Our curriculum fosters learning through hands-on experiences with engaging materials, inspiring a lifelong love for discovery.
        </p>
        <h2 className="text-sky-900 text-xl sm:text-2xl font-semibold pl-4 pt-6 border-b-2 border-sky-200 pb-2">Pedagogy</h2>
        <p className="text-gray-700 text-sm sm:text-base pl-4 pr-4 pt-4">Our pedagogical approaches include:</p>
        <ul className="list-none pl-6 pr-4 pt-4 space-y-4 text-sm sm:text-base">
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span><strong className="font-semibold text-sky-800">Constructivist:</strong> Students engage with teachers and peers in diverse activities, enhancing language and skill development.</span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span><strong className="font-semibold text-sky-800">Collaborative:</strong> Small group work fosters peer learning and critical thinking, a core philosophy in our classrooms.</span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span><strong className="font-semibold text-sky-800">Reflective:</strong> We encourage curiosity and deeper thinking through reflective questioning and modeling.</span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span><strong className="font-semibold text-sky-800">Integrative:</strong> Learning experiences connect concepts to real-life, making education meaningful and holistic.</span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span><strong className="font-semibold text-sky-800">Inquiry-Based:</strong> A learner-centered approach tailored to diverse backgrounds, sparking curiosity through essential questions.</span>
          </li>
        </ul>
        <div className="pt-10 px-4 sm:px-6 flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3">Learning Opportunities</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At Dobbespet Public School, early years offer diverse educational experiences—classroom, online, blended, and experiential—creating a safe space for self-expression. Our Montessori-inspired Kindergarten nurtures holistic growth with vibrant, activity-based learning.
            </p>
          </div>
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3">Assessment</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Embedded assessments track learning naturally within lessons, free from formal pressure. Beyond academics, mime, dance, music, sports, and field trips enrich each child’s unique journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HighSchoolPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 w-full pb-12 pt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="bg-sky-900 w-full max-w-screen-xl mx-auto rounded-xl shadow-lg pt-4 pb-6 px-6 sm:px-8 md:px-10 transition-all duration-300 hover:shadow-xl">
        <h1 className="font-sans text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-4 pl-4 tracking-wide">High School (Grades VIII to XII)</h1>
        <h4 className="text-white font-sans pl-4 mt-2 text-base sm:text-lg italic text-opacity-90">
          Where Confidence, Independence, Leadership, and Awareness Thrive
        </h4>
      </div>
      <div className="bg-white w-full max-w-screen-xl mx-auto mt-6 rounded-xl shadow-md px-6 sm:px-8 md:px-10 pb-12 transition-all duration-300 hover:shadow-lg">
        <div className="pt-10 px-4 sm:px-6 flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3 hidden">Overview</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              The Secondary Grades buzz with activity at Dobbespet Public School. We challenge every student to reach their potential through high expectations and personalized guidance, fostering a culture of achievement.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Personality development is nurtured through workshops on Life Skills, Value Education, Vocational Counseling, and teenage issues, in collaboration with experts like Alma Mater. Career Counseling sessions empower future leaders—engineers, doctors, and entrepreneurs—with clarity and confidence.
            </p>
          </div>
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3 hidden">Activities & Assessment</h3>
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

const PrimarySchool = () => { // Renamed to match your import
  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 w-full pb-12 pt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="bg-sky-900 w-full max-w-screen-xl mx-auto rounded-xl shadow-lg pt-4 pb-6 px-6 sm:px-8 md:px-10 transition-all duration-300 hover:shadow-xl">
        <h1 className="font-sans text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-4 pl-4 tracking-wide">Primary School (Grades I to VII)</h1>
        <h4 className="text-white font-sans pl-4 mt-2 text-base sm:text-lg italic text-opacity-90">
          Fostering Growth Through Interaction and Responsibility
        </h4>
      </div>
      <div className="bg-white w-full max-w-screen-xl mx-auto mt-6 rounded-xl shadow-md px-6 sm:px-8 md:px-10 pb-12 transition-all duration-300 hover:shadow-lg">
        <div className="pt-10 px-4 sm:px-6 flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3 hidden">Overview</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Grades I to IV at Dobbespet Public School are alive with excitement. Using a Thematic Inter-disciplinary approach, we align with modern pedagogy to spark curiosity and engagement.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Middle School (Grades V to VII) broadens the curriculum, laying a strong foundation for high school. Study skills are sharpened, concepts are solidified, and group work nurtures growing social awareness and responsibility.
            </p>
          </div>
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3 hidden">Holistic Development</h3>
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

// Export all components as named exports
export { KindergartenPage, HighSchoolPage, PrimarySchool };