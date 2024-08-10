import { sidebarData } from "@/data/Sidebardata/Sidebardata";
import CommonBtn from "@/lib/commonBtn/CommonBtn";
import { sideBarAnimation } from "@/utils/sidebarAnimation/SideBarAnimation";
import React from "react";
const FixedSidebar = () => {
  sideBarAnimation();
  return (
    <div className=" w-full  main-sidebar-container ">
      <div className="container w-full py-20 px-11 mx-auto ">
        <h1 className="text-[#04141F]  text-3xl font-bold overflow-hidden">
          Your One-stop Outsourcing Partner to Turbocharge Your Business Growth
        </h1>
        <p className="fixed-sidebar-sub mt-6 text-xl overflow-hidden font-bold pl-4 border-l-2 border-[#9D174D] text-[#314352]">
          EstivaSoftech is a widely known sales and software development company
          in India, helping brands strategize, market, and develop a unique
          online presence in this digital landscape.
        </p>

        <div className="sidebar-container mt-16 flex items-start">
          <div className="left w-[30%]  flex flex-col gap-6 rounded-3xl">
            {sidebarData.map(({ title, subTitle }, i) => {
              return (
                <div key={i} className="sidebarbox  rounded-2xl  px-12 py-5">
                  <div className="sidebarBox-title text-2xl">
                    <h1>{title}</h1>
                  </div>
                  <div className="sidebarBox-Subtitle mt-2 text-lg">
                    <p>{subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="right w-[70%] h-screen  flex items-start   ">
            <div className="p-20 right-inner rounded-2xl ">
              <h1 className="text-[#04141F]  text-3xl font-bold ">
                Where Innovation Thrives, Teams Unite, & Success Takes Center
                Stage: It’s EstivaSoftech
              </h1>
              <p className="fixed-sidebar-sub mt-6 text-xl overflow-hidden font-bold pl-4 border-l-2 border-[#9D174D] text-[#314352]">
                Prioritizing Scalability, Reliability, and Quality
              </p>
              <p className="fixed-sidebar-sub mt-6 text-md overflow-hidden  text-[#314352]">
                PWe believe in the transformative power of technology, not just
                to build software, but to ignite possibility. We are a hub of
                out-of-the-box ideas fueling groundbreaking solutions for your
                brand. With more than 10+ years of experience, we are fostering
                teamwork driving collaborative excellence, and celebrating a
                shared success story globally. EstivaSoftech began with one
                developer and their love for developing something extraordinary.
              </p>
              <CommonBtn>Read More</CommonBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedSidebar;
