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
      ease: "power3",
      scrollTrigger: {
        trigger: ".second-section",
        scroller: document.documentElement,
        start: "top bottom",
        end: "top 20%",
        // markers: true,
        scrub: 3,
      },
    });
    gsap.from(".card-section-1", {
      y: -500,
      delay: 1,
      scrollTrigger: {
        trigger: ".second-section",
        scroller: document.documentElement,
        start: "top bottom",
        end: "top 20%",
        // markers: true,
        scrub: 2,
      },
    });
    gsap.from(".card-section-2", {
      y: 500,
      delay: 1,

      scrollTrigger: {
        trigger: ".second-section",
        scroller: document.documentElement,
        start: "top bottom",
        end: "top 20%",
        // markers: true,
        scrub: 2,
      },
    });
  });
};
