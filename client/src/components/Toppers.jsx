import React from 'react';

// List of image URLs
const images = [
  '/topper.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg'
];

// Topper Component
const Topper = () => {
  return (
    <div className="flex flex-col items-center">
      
      <p className='text-3xl text-[#003cff] p-2 bg-white rounded-full'>Academic Stars</p>

      <div className="w-96 h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
        <img src={images[0]} alt="Main" className="w-full h-full object-cover" />
      </div>

      
      <div className="grid grid-cols-4 gap-4">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="w-48 h-48 rounded-xl overflow-hidden shadow-md"
          >
            <img src={image} alt={`Card ${index + 2}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topper;
