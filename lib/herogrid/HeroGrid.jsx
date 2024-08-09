import { gridTitle } from "@/data/HeroData/HeroData";
import { gridAnimation } from "@/utils/herogrid/GridAnimation";
import React from "react";
const HeroGrid = () => {
  gridAnimation();
  return (
    <div className="h-[42vh] w-full absolute   container grid-container backdrop-blur-2xl  left-[50%] -translate-x-1/2 px-11  bottom-0">
      <div className=" h-full w-full  main-grid backdrop-blur-3xl rounded-t-[1rem] overflow-hidden grid grid-cols-3 grid-rows-2  ">
        {gridTitle.map(({ maintitle, tag }, i) => {
          return (
            <div
              key={i}
              className="w-full h-full p-5 grid-box  overflow-hidden   border-l-[0.5px] border-b-[0.5px]  border-r-[0.5px] border-gray-600"
            >
              <h1 className=" font-extrabold text-md text-gray-400 tracking-wide ">
                {maintitle}
              </h1>
              <p className="font-semibold text-md text-white tracking-wide  ">
                {tag}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroGrid;
