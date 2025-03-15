import { useState } from "react";

const Panel = ({ src, content }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="relative w-full h-[18.5rem] md:h-96 bg-black mt-[7em] md:mt-[9em] 
    mb-16 z-40"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt="Landscape"
        className={`w-full h-full object-cover rounded-lg opacity-90 ${loading ? "hidden" : "block"}`}
        onLoad={() => setLoading(false)}
      />
      <div className="w-full sm:w-auto md:w-auto lg:w-auto absolute top-full transform -translate-y-1/2 p-6 md:p-10 bg-background shadow-2xl drop-shadow-lg ring-1 ring-gray-900/10 text-center">
        <span className="max-w-100 text-white text-4xl lg:text-5xl font-helvetica font-extrabold">
          {content.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default Panel;
