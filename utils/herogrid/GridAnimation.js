" use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const gridAnimation = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".grid-container", {
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
      ease: "power3.in",
      scrollTrigger: {
        trigger: ".grid-container",
        scroller: document.documentElement,
        scrub: 3,
        start: "top 75%",
        end: "bottom bottom",
      },
    });
  });
};
