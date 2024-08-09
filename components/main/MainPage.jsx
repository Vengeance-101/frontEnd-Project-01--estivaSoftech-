"use client";
import React, { useEffect, useRef } from "react";
import MainNav from "../navbar/MainNav";
import Herosection from "../hero/Herosection";
import LocomotiveScroll from "locomotive-scroll";
const MainPage = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  });
  return (
    <>
      <MainNav />
      <div
        id="main"
        ref={scrollRef}
        data-scroll-container
        className="scroll-container"
      >
        <Herosection />
      </div>
      <span className="c-scrollbar">
        <span className="c-scrollbar_thumb"></span>
      </span>
    </>
  );
};

export default MainPage;
