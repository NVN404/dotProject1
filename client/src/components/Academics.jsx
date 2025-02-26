const Academics = () => {
    const sections = [

        {
            title: "Primary",
            subtitle: "Grades I-IV",
            link: "/kindergarten",
            description: "We are a nurturing space where young learners begin their educational journey with curiosity and joy. Our engaging lessons in math, science, language, and social studies help build a strong foundation for lifelong learning. Through creativity and play, we inspire children to explore, grow, and develop essential social skills.",
            image: "/gal4.jpg",
        },
        {
            title: "Middle School",
            subtitle: "Grades V-VII",
            link: "/kindergarten",

            description: "Our middle school is a place of discovery, where students develop critical thinking and independence. With a well-rounded curriculum and opportunities in arts, technology, and leadership, we prepare them for future challenges. We foster a supportive environment that encourages curiosity, collaboration, and self-confidence.",
            image: "gal5.jpg",
        },
        {
            title: "High School",
            subtitle: "Grades VIII-X",
            link: "/kindergarten",

            description: "High school is where students refine their skills, explore their passions, and prepare for the future. Our rigorous academics, diverse electives, and extracurricular activities help students develop independence and leadership. We strive to equip them with the knowledge and confidence needed to succeed in higher education and beyond.",
            image: "gal6.jpg",
        }
    ];

    return (
        <div className="md:p-[5em] md:pb-[1em] md:pt-[1.5em]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[1.5em] sm:p-6">
            {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                    <img src={section.image} alt={section.title} className="w-full h-[40%] object-cover" />
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
                        <h3 className="text-sm text-[#2973B2] font-semibold">{section.subtitle}</h3>
                        <p className="text-gray-600 mt-2 flex-grow">{section.description}</p>
                        <button
                            onClick={() => router.push(section.link)}
                            className="mt-4 px-4 py-2 bg-[#2973B2] text-white rounded-lg hover:bg-green-500 transition self-start">
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
