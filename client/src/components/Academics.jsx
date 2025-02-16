const Academics = () => {
    const sections = [

        {
            title: "Primary",
            subtitle: "Grades I-IV",
            link: "/kindergarten",
            description: "St. Paul’s English curiosity, determination,St. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhood independence, and self-reliance.     lorem ipsum",
            image: "https://imgs.search.brave.com/Fi7MDkXTMmHld0n92L-VI0kVnwNEq-iI8MPZrBONgI8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDAwMjc5NC9waG90/by9zY2hvb2wtY29y/cmlkb3IuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9iNVF1/aUZkRzBHd25EakVn/RnV1N3VxZ2RnTG1r/RVd2SVpKaTV5SDFH/Wmc9", // Replace with actual image URL
        },
        {
            title: "Middle School",
            subtitle: "Grades V-VII",
            link: "/kindergarten",

            description: "At St. Paul’s English Schto St. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodconsideration the expectations.",
            image: "https://imgs.search.brave.com/Fi7MDkXTMmHld0n92L-VI0kVnwNEq-iI8MPZrBONgI8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDAwMjc5NC9waG90/by9zY2hvb2wtY29y/cmlkb3IuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9iNVF1/aUZkRzBHd25EakVn/RnV1N3VxZ2RnTG1r/RVd2SVpKaTV5SDFH/Wmc9", // Replace with actual image URL
        },
        {
            title: "High School",
            subtitle: "Grades VIII-X",
            link: "/kindergarten",

            description: "Our aim is ul’s English School, one ooodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhoodSt. Paul’s English School, one of the best schools in JP Nagar. Focuses on the importance of early childhood Bangalore. Placing suitable demands on individuals.",
            image: "https://imgs.search.brave.com/Fi7MDkXTMmHld0n92L-VI0kVnwNEq-iI8MPZrBONgI8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDAwMjc5NC9waG90/by9zY2hvb2wtY29y/cmlkb3IuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9iNVF1/aUZkRzBHd25EakVn/RnV1N3VxZ2RnTG1r/RVd2SVpKaTV5SDFH/Wmc9", // Replace with actual image URL
        }
    ];

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[1.5em] sm:p-6">
            {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                    <img src={section.image} alt={section.title} className="w-full h-150 object-cover" />
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
    );
};

export default Academics;
