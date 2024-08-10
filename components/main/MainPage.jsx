"use client";
import React, { useEffect } from "react";
import MainNav from "../navbar/MainNav";
import Herosection from "../hero/Herosection";
import LocomotiveScroll from "locomotive-scroll";
import NumBanner from "../numberBanner/NumBanner";
import FixedSidebar from "../fixedSidebar/FixedSidebar";
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
        <FixedSidebar />

        <section className="h-screen w-full bg-[red]"></section>
      </div>
    </>
  );
};

export default MainPage;
