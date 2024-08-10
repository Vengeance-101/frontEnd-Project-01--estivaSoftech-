"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export const sideBarAnimation = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".sidebar-container", {
      scrollTrigger: {
        trigger: ".sidebar-container",
        scroller: document.documentElement,
        start: "top 20%",
        end: "bottom bottom",
        pin: ".right",
      },
    });
  });
};
