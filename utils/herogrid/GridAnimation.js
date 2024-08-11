" use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const gridAnimation = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".grid-container", {
      opacity: 0,
      scale: 0.5,
      y: 50,
      ease: "power3",
      scrollTrigger: {
        trigger: ".hero-section",
        scroller: document.documentElement,
        scrub: 2,
        start: "top top",
        end: "bottom 100%",
        // markers: true,
      },
    });
  });
};
