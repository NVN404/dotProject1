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
    <div className="mb-[2em] p-[1em] lg:p-[2em] bg-[#2973B2] h-[auto]">
      <div className="w-full">
        <img src="./banner.JPG" alt="" />
      </div>
    </div>
  );
};

export default TopperPage;
