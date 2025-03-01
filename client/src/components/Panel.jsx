import react from 'react';
const Panel = ({ src, content }) => {
  return (
    <div className="relative w-full h-[18.5rem] md:h-96 bg-black mt-[7em] md:mt-[9em] mb-20 z-40">
      <img src={src} alt="Landscape" className="w-full h-full object-cover rounded-lg opacity-75" />
      <div className="absolute top-full transform -translate-y-1/2 p-10 bg-background shadow-2xl drop-shadow-lg ring-1 ring-gray-900/10">
        <span className='text-white text-7xl font-[Helvetica] font-extrabold'>{content.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default Panel;
