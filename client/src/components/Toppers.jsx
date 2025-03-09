import React, { memo } from "react";

const TopperPage = () => {
  return (
    <div className="w-full p-[1em] lg:p-[2em] bg-[#2973B2] h-[auto]">
      <img src="./banner.JPG" alt="" className="w-[100%] h-[17em] md:h-auto" />
    </div>
  );
};

export default memo(TopperPage);
