"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
export const secondSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".secondSection-main-container", {
      opacity: 0,
      scale: 0.7,
      y: 50,
      scrollTrigger: {
        trigger: ".second-section",
        scroller: document.documentElement,
        start: "top bottom",
        end: "top top",
        // markers: true,
        scrub: 3,
      },
    });
  });
};
