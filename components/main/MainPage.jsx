"use client";
import React, { useEffect } from "react";
import MainNav from "../navbar/MainNav";
import Herosection from "../hero/Herosection";
import LocomotiveScroll from "locomotive-scroll";
import NumBanner from "../numberBanner/NumBanner";

const MainPage = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  });
  return (
    <>
      <MainNav />
      <div id="main" data-scroll-container>
        <Herosection />
        <NumBanner />
      </div>
      <span className="c-scrollbar">
        <span className="c-scrollbar_thumb"></span>
      </span>
    </>
  );
};

export default MainPage;
