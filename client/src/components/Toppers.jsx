import React from 'react';

const toppers = [
  { name: 'Vilas R Naik', rank: '1st Rank', percentage: '97%', image: '/topper.jpg' },
  { name: 'Nikhil R Nambiar', rank: '2nd Rank', percentage: '96%', image: '/image.png' },
  { name: 'Mike Johnson', rank: '3rd Rank', percentage: '93%', image: '/image3.jpg' },
  { name: 'Emily Brown', rank: '4th Rank', percentage: '92%', image: '/image3.jpg' },
  { name: 'Chris White', rank: '5th Rank', percentage: '91%', image: '/image3.jpg' }
];

const TopperPage = () => {
  return (
    <div className="mb-[2em] flex flex-col items-center py-10 px-4 bg-gradient-to-br bg-[#2973B2] to-purple-700 min-h-[80dvh]">
      
      {/* 🎓 Hero Section */}
      <div className="w-full  text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg font-[Helvetica]">
          ACADEMIC TOPPERS
        </h1>
      </div>

      {/* 👑 Main Topper Card (Glassmorphic) */}
      <div className="relative w-64 h-64 sm:w-77 sm:h-77 rounded-2xl overflow-hidden shadow-2xl border border-white/30 bg-white/10 backdrop-blur-lg transition-transform duration-500 hover:scale-105">
        <img src={toppers[0].image} alt={toppers[0].name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/5 backdrop-blur-md text-white text-center rounded-b-2xl shadow-md">
          <h2 className="text-xl font-bold">{toppers[0].name}</h2>
          <p className="text-md">{toppers[0].rank}</p>
          <p className="text-sm font-light">{toppers[0].percentage}</p>
        </div>
      </div>

      {/* 🏆 Other Toppers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {toppers.slice(1).map((topper, index) => (
          <div key={index} className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-lg border border-white/30 bg-white/5 backdrop-blur-lg transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/20 backdrop-blur-md text-white text-center rounded-b-xl shadow-md">
              <h2 className="text-sm font-bold">{topper.name}</h2>
              <p className="text-xs">{topper.rank}</p>
              <p className="text-xs font-light">{topper.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopperPage;
