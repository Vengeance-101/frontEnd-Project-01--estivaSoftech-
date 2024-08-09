"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const talkBtn = () => {
  useGSAP(() => {
    let span1 = document.querySelectorAll(".text-hover .split-1 span");
    let span2 = document.querySelectorAll(".text-hover .split-2 span");
    console.log(span1);
    let hover = document.querySelector(".talk-btn ");
    hover.addEventListener("mouseenter", () => {
      gsap.to(span1, {
        y: -35,
        ease: "power3.inOut",
        stagger: 0.025,
        delay: 0.05,
        duration: 0.25,
      });

      gsap.to(span2, {
        y: -35,
        delay: 0.05,

        stagger: 0.025,
        ease: "power3.inOut",
        duration: 0.25,
      });
    });
    hover.addEventListener("mouseleave", () => {
      gsap.to(span1, {
        stagger: 0.025,
        duration: 0.25,
        ease: "power3.inOut",
        delay: 0.05,

        y: 0,
      });

      gsap.to(span2, {
        stagger: 0.025,
        duration: 0.25,
        ease: "power3.inOut",
        delay: 0.05,

        y: 0,
      });
    });
  });
};
