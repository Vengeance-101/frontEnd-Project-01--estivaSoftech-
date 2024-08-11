import { secondSection } from "@/utils/secondSection/Secondsection";
import React from "react";
const SecondSection = () => {
  secondSection();
  return (
    <div className="w-full py-2  second-section  ">
      <div className="container  secondSection-main-container mx-auto  flex gap-2 px-11 min-h-screen py-5 ">
        <div className="second-section-left  w-[50%]  h-full "></div>
        <div className="second-section-right  w-[50%]  h-full "></div>
      </div>
    </div>
  );
};

export default SecondSection;
