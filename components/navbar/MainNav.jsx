import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { megamenuLinks } from "@/data/Navdata/Navdata";
import { navAnimation } from "@/utils/navAnimation/navAnimation";
const MainNav = () => {
  navAnimation();
  return (
    <div className="w-full  backdrop-blur-md fixed nav-container top-0 left-0 bg-transparent border-b-[1px] border-gray-800 z-[999]">
      <div className="container  mx-auto px-11    flex justify-between items-center ">
        <div className="logo relative ">
          <Image
            src="/header_logo/estivaLogo.webp"
            width={256}
            height={58}
            className=" object-cover   main-logo-1 h-full w-full"
          />
          <Image
            src="/header_logo/estiva2.webp"
            width={256}
            height={58}
            className=" object-cover opacity-0  top-0 left-0 absolute main-logo-2 none h-full w-full"
          />
        </div>
        <div className="links">
          <ul>
            <li>
              {" "}
              <Link href="#">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="#">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="#" className="solution">
                Solution
              </Link>{" "}
              <div className="megamenu absolute w-full h-[0vh]   top-[30vh] left-0 ">
                <div className="megamenu-links  flex w-full h-full justify-between overflow-hidden container mx-auto px-11 ">
                  <div className="w-[75%] grid grid-cols-2 py-4 gap-4  ">
                    {megamenuLinks.map(({ coursename, tag, img }) => {
                      return (
                        <Link
                          key={coursename}
                          href="#"
                          className="w-fit megalinks rounded-md  ps-3 py-11  text-white items-center"
                        >
                          <div className="text-5xl megaicon">{img}</div>
                          <div className="text-white w-fit text-start  text-[12px] font-bold ps-5">
                            <p>{coursename}</p>
                            <p>{tag}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="w-[20%]  h-full   py-24">
                    <Link href="#">
                      <p className="text-white slogan border-l-2 ps-9 py-8 font-bold text-3xl text-center ">
                        THINK BEYOND TECHNOLOGY
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <Link href="#">Blog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="#">Contact</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="contact-details flex  w-fit ">
          <Link
            href="#"
            className="h-[12vh] w-full text-white flex gap-2 py-4 items-center"
          >
            <div>
              <TbPhoneCall className="text-white  megaicon text-4xl" />
            </div>
            <div className="text-white contact-details-title text-start border-s-2 text-sm font-bold ps-5">
              <p>Call & chat us today!</p>
              <p>+91-9990 140 888</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
