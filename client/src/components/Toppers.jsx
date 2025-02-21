import React from 'react';

const images = [
    '/topper.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg'
];

const toppers = [
  { name: 'Vilas R Naik', rank: '1st Rank', percentage: '97%' },
  { name: 'Nikhil R Nambiar', rank: '2nd Rank', percentage: '96%' },
  { name: 'Mike Johnson', rank: '3rd Rank', percentage: '93%' },
  { name: 'Emily Brown', rank: '4th Rank', percentage: '92%' },
  { name: 'Chris White', rank: '5th Rank', percentage: '91%' }
];

const Topper = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4">
      {/* Section Heading */}
      <p className="h-[3em] w-full max-w-[600px] text-3xl sm:text-4xl font-bold text-white bg-[#2973B2] p-[1em] rounded-full mb-6 text-center shadow-lg">
        Academic Stars ✨
      </p>

      {/* Main Topper Card (Smaller) */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden shadow-lg border-4 border-[#003cff] transform transition-all hover:scale-105">
        <img src={images[0]} alt="Main Topper" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-3 text-center">
          <h2 className="text-md sm:text-lg font-bold">{toppers[0].name}</h2>
          <p className="text-sm">{toppers[0].rank}</p>
          <p className="text-xs font-light">{toppers[0].percentage}</p>
        </div>
      </div>

      {/* Other Toppers Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {images.slice(1).map((image, index) => (
          <div 
            key={index} 
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-md border-2 border-[#003cff] transform transition-all hover:scale-105"
          >
            <img src={image} alt={`Topper ${index + 2}`} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-2 text-center">
              <h2 className="text-xs sm:text-md font-bold">{toppers[index + 1].name}</h2>
              <p className="text-xs sm:text-sm">{toppers[index + 1].rank}</p>
              <p className="text-[10px] sm:text-xs font-light">{toppers[index + 1].percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topper;
