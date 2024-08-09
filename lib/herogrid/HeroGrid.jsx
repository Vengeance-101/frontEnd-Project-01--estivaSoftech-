import { gridTitle } from "@/data/HeroData/HeroData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
const HeroGrid = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".main-grid", {
      opacity: 0,
      scale: 0,
      scrollTrigger: {
        trigger: ".main-grid",
        scroller: "#main",
        scrub: 2,
        start: "top 80%",
        markers: true,
      },
    });
  });
  return (
    <div className="h-[42vh] w-full absolute   container main-grid backdrop-blur-2xl  left-[50%] -translate-x-1/2 px-11  bottom-0">
      <div className=" h-full w-full grid-container  backdrop-blur-3xl rounded-t-[1rem] overflow-hidden grid grid-cols-3 grid-rows-2  ">
        {gridTitle.map(({ maintitle, tag }, i) => {
          return (
            <div
              key={i}
              className="w-full h-full p-5      border-l-[0.5px] border-b-[0.5px]  border-r-[0.5px] border-gray-600"
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
