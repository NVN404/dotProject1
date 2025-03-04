import React from "react";

const PrimarySchoolPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 w-full pb-12 pt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="bg-yellow-300 w-full max-w-screen-xl mx-auto rounded-xl shadow-lg pt-4 pb-6 px-6 sm:px-8 md:px-10 transition-all duration-300 hover:shadow-xl">
        <h1 className="font-sans text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold mt-4 pl-4 tracking-wide">
          Primary School (Grades I to V)
        </h1>
        <h4 className="text-gray-800 font-sans pl-4 mt-2 text-base sm:text-lg italic text-opacity-90">
          Building Strong Foundations for the Future!
        </h4>
      </div>
      <div className="bg-white w-full max-w-screen-xl mx-auto mt-6 rounded-xl shadow-md px-6 sm:px-8 md:px-10 pb-12 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-sky-900 text-xl sm:text-2xl font-semibold pl-4 pt-6 border-b-2 border-sky-200 pb-2">
          Curriculum Approaches
        </h2>
        <p className="text-gray-700 text-sm sm:text-base pl-4 pr-4 pt-4 leading-relaxed">
          At Dobbespet Public School, we focus on a balanced curriculum that
          integrates core subjects with extracurricular activities. Our students
          develop analytical skills, creativity, and a love for lifelong
          learning.
        </p>
        <ul className="list-none pl-6 pr-4 pt-4 space-y-4 text-sm sm:text-base">
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Experiential Learning:
              </strong>{" "}
              Hands-on activities and real-world problem-solving enhance
              comprehension.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Collaborative Learning:
              </strong>{" "}
              Group-based projects encourage teamwork and critical thinking.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Inquiry-Based Learning:
              </strong>{" "}
              Encourages curiosity through questions and guided exploration.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Differentiated Instruction:
              </strong>{" "}
              Caters to individual learning paces and abilities.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Technology Integration:
              </strong>{" "}
              Uses digital tools to support and enhance learning experiences.
            </span>
          </li>
        </ul>
        <div className="pt-10 px-4 sm:px-6 flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3">
              Holistic Development
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our curriculum ensures a balance between academics, arts, and
              sports to nurture well-rounded individuals. Students engage in
              music, art, drama, and physical activities that develop their
              social and emotional skills, thriving in a structured learning
              environment.
            </p>
          </div>
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3">
              Assessment Strategies
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We utilize formative and summative assessments to track progress
              and provide feedback. Participation in debates, Olympiads, and
              cultural programs builds confidence and leadership skills.
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
        <h1 className="font-sans text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-4 pl-4 tracking-wide">
          High School (Grades IX to X)
        </h1>
        <h4 className="text-white font-sans pl-4 mt-2 text-base sm:text-lg italic text-opacity-90">
          Preparing Students for Higher Education, Careers, and Lifelong
          Learning
        </h4>
      </div>
      <div className="bg-white w-full max-w-screen-xl mx-auto mt-6 rounded-xl shadow-md px-6 sm:px-8 md:px-10 pb-12 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-sky-900 text-xl sm:text-2xl font-semibold pl-4 pt-6 border-b-2 border-sky-200 pb-2">
          Curriculum Approaches
        </h2>
        <p className="text-gray-700 text-sm sm:text-base pl-4 pr-4 pt-4 leading-relaxed">
          High school focuses on subject specialization, career readiness, and
          personal growth. Our curriculum equips students with the knowledge and
          skills required for success in college and beyond.
        </p>
        <ul className="list-none pl-6 pr-4 pt-4 space-y-4 text-sm sm:text-base">
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Experiential Learning:
              </strong>{" "}
              Hands-on projects, research-based assignments, and lab
              experiments.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Concept-Based Learning:
              </strong>{" "}
              Encourages critical analysis and problem-solving through
              real-world applications.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Technology Integration:
              </strong>{" "}
              Utilizes digital tools, smart classrooms, and online platforms.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Collaborative Discussions:
              </strong>{" "}
              Engages students in debates, seminars, and group presentations.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Career Guidance & Counseling:
              </strong>{" "}
              Assists in making informed decisions about future education and
              careers.
            </span>
          </li>
        </ul>
        <div className="pt-10 px-4 sm:px-6 flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3">
              Holistic Development
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We focus on equipping students with leadership, critical thinking,
              and problem-solving skills. Entrepreneurship programs, innovation
              challenges, and workshops prepare them for real-world challenges
              and higher education.
            </p>
          </div>
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3">
              Assessment Strategies
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Evaluations through case studies, presentations, and projects
              ensure practical understanding. Mentorship, university prep
              courses, and career counseling support a smooth transition to
              future paths.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MiddleSchoolPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 w-full pb-12 pt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="bg-sky-900 w-full max-w-screen-xl mx-auto rounded-xl shadow-lg pt-4 pb-6 px-6 sm:px-8 md:px-10 transition-all duration-300 hover:shadow-xl">
        <h1 className="font-sans text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-4 pl-4 tracking-wide">
          Middle School (Grades VI to VIII)
        </h1>
        <h4 className="text-white font-sans pl-4 mt-2 text-base sm:text-lg italic text-opacity-90">
          Fostering Critical Thinking, Independence, and Responsibility
        </h4>
      </div>
      <div className="bg-white w-full max-w-screen-xl mx-auto mt-6 rounded-xl shadow-md px-6 sm:px-8 md:px-10 pb-12 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-sky-900 text-xl sm:text-2xl font-semibold pl-4 pt-6 border-b-2 border-sky-200 pb-2">
          Curriculum Approaches
        </h2>
        <p className="text-gray-700 text-sm sm:text-base pl-4 pr-4 pt-4 leading-relaxed">
          Middle school is a transformative phase where students transition from
          foundational learning to advanced exploration, focusing on cognitive
          development and analytical thinking.
        </p>
        <ul className="list-none pl-6 pr-4 pt-4 space-y-4 text-sm sm:text-base">
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Inquiry-Based Learning:
              </strong>{" "}
              Encourages exploration and discovery through hands-on experiences.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Collaborative Projects:
              </strong>{" "}
              Develops teamwork, leadership, and communication skills.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Technology Integration:
              </strong>{" "}
              Enhances comprehension with digital resources and interactive
              tools.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Problem-Solving Approach:
              </strong>{" "}
              Builds critical thinking through real-world scenarios.
            </span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-sky-600 mr-2">•</span>
            <span>
              <strong className="font-semibold text-sky-800">
                Holistic Assessment:
              </strong>{" "}
              Evaluates through projects and continuous feedback.
            </span>
          </li>
        </ul>
        <div className="pt-10 px-4 sm:px-6 flex flex-col md:flex-row md:space-x-8 gap-6">
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3">
              Holistic Development
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our curriculum balances academics, arts, and sports to nurture
              well-rounded individuals. Music, art, drama, and physical
              activities develop social and emotional skills in a structured
              environment.
            </p>
          </div>
          <div className="md:w-1/2 bg-sky-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-sky-800 text-lg sm:text-xl font-semibold mb-3">
              Assessment Strategies
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Formative and summative assessments track progress with
              constructive feedback. Extracurriculars like debates, Olympiads,
              and cultural programs build confidence and leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export all components as named exports
export { MiddleSchoolPage, HighSchoolPage, PrimarySchoolPage };
