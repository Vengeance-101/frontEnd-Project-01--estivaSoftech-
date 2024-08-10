import { NbannerData } from "@/data/NumbannerData/NbannerData";
import React from "react";
const NumBanner = () => {
  return (
    <div className="bg-[#0F172A] w-full">
      <div className="container main-naBnner w-full flex justify-between items-center mx-auto px-11 py-2">
        {NbannerData.map(({ num, title }, i) => {
          return (
            <div
              key={i * 3}
              className="w-fit cursor-pointer banner-box gap-3 justify-between items-center flex"
            >
              <div className="num">{num}</div>
              <div className="numBanner-title  ">
                <p className=" text-start w-[70%]">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NumBanner;
