const Academics = () => {
    const sections = [

        {
            title: "Primary",
            subtitle: "Grades I-IV",
            link: "/kindergarten",
            description: "We are a nurturing space where young learners begin their educational journey with curiosity and joy. Our engaging lessons in math, science, language, and social studies help build a strong foundation for lifelong learning. Through creativity and play, we inspire children to explore, grow, and develop essential social skills.",
            image: "https://static.wixstatic.com/media/f532e4_e696834a0b7641288f130799cd1213c5~mv2.png/v1/fill/w_640,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f532e4_e696834a0b7641288f130799cd1213c5~mv2.png", // Replace with actual image URL
        },
        {
            title: "Middle School",
            subtitle: "Grades V-VII",
            link: "/kindergarten",

            description: "Our middle school is a place of discovery, where students develop critical thinking and independence. With a well-rounded curriculum and opportunities in arts, technology, and leadership, we prepare them for future challenges. We foster a supportive environment that encourages curiosity, collaboration, and self-confidence.",
            image: "https://www.focusonthefamily.com/wp-content/uploads/2019/08/HowToPrepareForMiddleSchool_SliderFriendly.png", // Replace with actual image URL
        },
        {
            title: "High School",
            subtitle: "Grades VIII-X",
            link: "/kindergarten",

            description: "High school is where students refine their skills, explore their passions, and prepare for the future. Our rigorous academics, diverse electives, and extracurricular activities help students develop independence and leadership. We strive to equip them with the knowledge and confidence needed to succeed in higher education and beyond.",
            image: "https://www.visualsstock.com/images/Low/5/AK59191.jpg", // Replace with actual image URL
        }
    ];

    return (
        <div className="md:p-[5em] md:pt-[1.5em]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[1.5em] sm:p-6">
            {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                    <img src={section.image} alt={section.title} className="w-full h-[40%] object-cover" />
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
                        <h3 className="text-sm text-[#003cff] font-semibold">{section.subtitle}</h3>
                        <p className="text-gray-600 mt-2 flex-grow">{section.description}</p>
                        <button
                            onClick={() => router.push(section.link)}
                            className="mt-4 px-4 py-2 bg-[#003cff] text-white rounded-lg hover:bg-blue-700 transition self-start">
                            Read More
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Academics;
