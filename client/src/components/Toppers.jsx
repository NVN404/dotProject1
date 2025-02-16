import React from 'react';

const images = [
    '/topper.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg'
  ];

const toppers = [
  { name: 'Vilas R Naik', rank: '1st Rank', percentage: 'Percentage: 97%' },
  { name: 'Jane Smith', rank: '2nd Rank', percentage: 'Percentage: 94%' },
  { name: 'Mike Johnson', rank: '3rd Rank', percentage: 'Percentage: 93%' },
  { name: 'Emily Brown', rank: '4th Rank', percentage: 'Percentage: 92%' },
  { name: 'Chris White', rank: '5th Rank', percentage: 'Percentage: 91%' }
];

// Topper Component
const Topper = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <p className='text-3xl text-yellow-400 p-6 bg-[#003cff] rounded-full mb-4'>Academic Stars</p>

      {/* Main Topper Card */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
        <img src={images[0]} alt="Main" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
          <h2 className="text-lg sm:text-xl font-bold">{toppers[0].name}</h2>
          <p className="text-sm sm:text-md">{toppers[0].rank}</p>
          <p className="text-xs sm:text-sm">{toppers[0].percentage}</p>
        </div>
      </div>

      {/* Other Toppers Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.slice(1).map((image, index) => (
          <div key={index} className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-md">
            <img src={image} alt={`Card ${index + 2}`} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
              <h2 className="text-sm sm:text-lg font-bold">{toppers[index + 1].name}</h2>
              <p className="text-xs sm:text-md">{toppers[index + 1].rank}</p>
              <p className="text-[10px] sm:text-sm">{toppers[index + 1].percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topper;
