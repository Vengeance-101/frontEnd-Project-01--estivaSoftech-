"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export const firstSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".first-section-box", {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      delay: 0.01,
      stagger: 0.1,
      ease: "power3",
      scrollTrigger: {
        trigger: ".first-section",
        scroller: document.documentElement,
        start: "top 35%",
        end: "bottom bottom",
        // markers: true,
        scrub: 2,
      },
    });
  });
};
