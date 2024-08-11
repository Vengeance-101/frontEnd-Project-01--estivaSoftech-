"use client";
import HeroGrid from "@/lib/herogrid/HeroGrid";
import { talkBtn } from "@/utils/talkBtn/TalkBtn";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
const Herosection = () => {
  talkBtn();

  return (
    <div
      className="w-full h-[145vh] overflow-hidden hero-section relative border-t-[1px] border-black "
      data-scroll-section
    >
      <video
        src="/heroVideo/heroVideo.webm"
        muted
        autoPlay
        loop
        className="w-full h-full absolute -z-10 object-cover top-0 left-0"
      />

      <div className="hero-content container  px-11  left-1/2 -translate-x-1/2 absolute z-10  h-full ">
        <h1 className="text-[3.3rem] title text-white leading-none ">
          {" "}
          <span className="">Building the Next Best</span> Thing for the Digital
          World
        </h1>

        <p className="subtitle  text-white ">
          Agile in mind, spirit, and speed. We design and build powerful
          software development and digital marketing solutions that drive
          business growth faster in the next-gen digital space.
        </p>

        <div className="talk-btn  mt-20 w-[18vw] h-[15vh]  ">
          <Link
            href="#"
            className="relative  gap-3  items-center justify-center"
          >
            <FaCircle className="text-xl dot text-white transition-all duration-300 ease-in-out " />

            <div className="elem  relative text-hover  text-white text-xl h-[38%] overflow-hidden  ">
              <h1 className="split-1   gap-5  px-4 inline-flex text-4xl leading-none  ">
                {"Let's Talk".split("").map((elem, i) => {
                  return (
                    <span
                      key={i}
                      className={`  ${
                        i == 5 && "ml-1"
                      }  inline-block leading-none tracking-tighter  -mx-2 `}
                    >
                      {elem === " " ? "   " : elem}
                    </span>
                  );
                })}
              </h1>
              <h1 className="split-2   gap-5 px-4 inline-flex  text-4xl ">
                {"Let's Talk".split("").map((elem, i) => {
                  return (
                    <span
                      key={i}
                      className={`  ${
                        i == 5 && "ml-1"
                      }  inline-block leading-none tracking-tighter  -mx-2 `}
                    >
                      {elem === " " ? "  " : elem}
                    </span>
                  );
                })}
              </h1>
            </div>
          </Link>
        </div>

        <HeroGrid></HeroGrid>
      </div>
    </div>
  );
};

export default Herosection;
