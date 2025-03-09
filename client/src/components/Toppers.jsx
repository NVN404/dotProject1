import React, { memo } from "react";

const TopperPage = () => {
  return (
    <div className="w-full p-[1em] lg:p-[2em] bg-background h-auto">
      <img src="./banner.JPG" alt="Banner" className="w-full h-[17em] md:h-auto" loading="lazy" />
    </div>
  );
};

export default memo(TopperPage);
