import CommonBtn from "@/lib/commonBtn/CommonBtn";
import { secondSection } from "@/utils/secondSection/Secondsection";
import React from "react";
const SecondSection = () => {
  secondSection();
  return (
    <div className="w-full py-2  second-section overflow-hidden ">
      <div className="container  secondSection-main-container mx-auto  flex gap-5 px-11 m py-20 ">
        <div className=" py-14 second-section-left  w-[50%]  min-h-screen ">
          <p className="text-[1.15rem]  text-[#2F3B52]">Our 360° Approach</p>
          <h1 className="mt-4 text-3xl text-black font-bold">
            To a Protrude Discovery Stageflow.
          </h1>
          <p className="text-[1.15rem] font-bold  mt-4 text-[#314352]">
            EstivaSoftechians believe that a successful journey begins with a
            well-defined path. That's why we champion the discovery stage as the
            backbone of any development project, be it a groundbreaking new
            product or seamlessly integrating an existing one
          </p>
          <p className="text-base   mt-4 text-[#314352]">
            Our expert team becomes your dedicated trailblazer, meticulously
            exploring your project's terrain like understanding your vision,
            diving deep into your technical landscape, and pinpointing your key
            functionality.
          </p>
          <p className="text-base   mt-4 text-[#314352]">
            What do we bring to you? An idea of a clear roadmap, gaining a
            comprehensive outline of defined stages, and milestones, empowered
            choices based on clear insights, and Reducing risks to potential
            roadblocks. Our discovery phase becomes your map, crafted to guide
            you on the path to digital success.
          </p>
          <p className="text-base   mt-4 text-[#314352]">
            Start your ascent today and embark on a transformative development
            journey.
          </p>
          <CommonBtn>Learn More</CommonBtn>
        </div>
        <div className="second-section-right  w-[50%] flex   gap-5 min-h-screen ">
          <div className="w-[50%] card-section-1 flex flex-col gap-5 justify-end ">
            <div className="white-card  w-full h-[45%]  shadow-xl  shadow-indigo-700 py-10 px-5 rounded-2xl">
              <h1 className="text-2xl font-bold text-center">
                Dedicated to Client Delight
              </h1>
              <p className="text-center mt-3">
                We don't just deliver projects; we orchestrate experiences that
                resonate with excellence, unlocking maximum value for our
                clients
              </p>
            </div>
            <div className="gradient-card  w-full h-[45%]  shadow-xl py-10 px-5  shadow-indigo-700  rounded-2xl">
              <h1 className="text-2xl font-bold text-center">
                Dedicated to Client Delight
              </h1>
              <p className="text-center mt-3">
                We don't just deliver projects; we orchestrate experiences that
                resonate with excellence, unlocking maximum value for our
                clients
              </p>
            </div>
          </div>
          <div className="w-[50%]  card-section-2 flex flex-col  gap-5 ">
            <div className="gradient-card  w-full h-[45%] shadow-xl py-10 px-5  shadow-indigo-700 rounded-2xl">
              <h1 className="text-2xl font-bold text-center">
                Dedicated to Client Delight
              </h1>
              <p className="text-center mt-3">
                We don't just deliver projects; we orchestrate experiences that
                resonate with excellence, unlocking maximum value for our
                clients
              </p>
            </div>
            <div className="white-card  w-full h-[45%]  shadow-xl py-10 px-5  shadow-indigo-700  rounded-2xl">
              <h1 className="text-2xl font-bold text-center">
                Dedicated to Client Delight
              </h1>
              <p className="text-center mt-3">
                We don't just deliver projects; we orchestrate experiences that
                resonate with excellence, unlocking maximum value for our
                clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
