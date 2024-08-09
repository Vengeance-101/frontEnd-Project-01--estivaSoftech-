"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const navAnimation = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    tl.to(".nav-container", {
        background: "white",
        duration: 0.5,
        delay: 0.2,
        color: "#0F172A",
        scrollTrigger: {
          trigger: ".nav-container",
          scroller: document.documentElement,
          scrub: 1,
          start: "top top",
          end: "bottom 12%",
        },
      })
      .to(".main-logo-1", {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        color: "#0F172A",
        scrollTrigger: {
          trigger: ".nav-container",
          scroller: document.documentElement,
          scrub: 1,
          start: "top top",
          end: "bottom 12%",
        },
      })
      .to(".main-logo-2", {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        color: "#0F172A",
        scrollTrigger: {
          trigger: ".nav-container",
          scroller: document.documentElement,
          scrub: 1,
          start: "top top",
          end: "bottom 12%",
        },
      })
      .to(
        [
          ".nav-container  a ",
          ".nav-container p",
          ".nav-container .megaicon",
          ".megamenu a",
        ],
        {
          duration: 0.5,
          delay: 0.2,
          color: "#0F172A",
          fontWeight: "bolder",

          scrollTrigger: {
            trigger: ".nav-container",
            scroller: document.documentElement,
            scrub: 1,
            start: "top top",
            end: "bottom 12%",
          },
        }
      )
      .to([".megamenu"], {
        duration: 0.5,
        delay: 0.2,
        background: "white",

        scrollTrigger: {
          trigger: ".nav-container",
          scroller: document.documentElement,
          scrub: 1,
          start: "top top",
          end: "bottom 12%",
        },
      })
      .to([".contact-details-title", ".slogan"], {
        duration: 0.5,
        delay: 0.2,
        borderLeft: "2px solid #0F172A ",

        scrollTrigger: {
          trigger: ".nav-container",
          scroller: document.documentElement,
          scrub: 1,
          start: "top top",
          end: "bottom 12%",
        },
      });
  });
};
