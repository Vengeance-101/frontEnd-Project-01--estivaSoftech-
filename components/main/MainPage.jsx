"use client";
import React, { useEffect } from "react";
import MainNav from "../navbar/MainNav";
import Herosection from "../hero/Herosection";
import LocomotiveScroll from "locomotive-scroll";
import NumBanner from "../numberBanner/NumBanner";
import FixedSidebar from "../fixedSidebar/FixedSidebar";
import FirstSection from "../FirstSection/FirstSection";
const MainPage = () => {
  useEffect(() => {
    const scrollEl = document.querySelector("#main");
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });
    return () => {
      locomotiveScroll.destroy();
    };
  });
  return (
    <>
      <MainNav />
      <div id="main" data-scroll-container data-scroll>
        <Herosection />
        <NumBanner />
        <FixedSidebar />
        <FirstSection />
        <section className="w-full h-[100vh] bg-[red]"></section>
      </div>
    </>
  );
};

export default MainPage;
