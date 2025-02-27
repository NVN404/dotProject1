import react from 'react';
const Panel = ({ src, content }) => {
  return (
    <div className="relative w-full h-90 md:h-96 bg-black">
      <img src={src} alt="Landscape" className="w-full h-full object-cover rounded-lg opacity-50" />
      <div className="absolute left-[1em] md:left-[2em] top-3/4 transform -translate-y-1/2  text-white text-4xl font-semibold p-4 rounded-lg border-l-4 border-blue-500 font-cinzel ">
        {content}
      </div>
    </div>
  );
};

export default Panel;
