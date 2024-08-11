import { firstSection } from "@/utils/firstSection/FirstSection";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import React from "react";
import CommonBtn2 from "@/lib/commonbtn2/Commonbtn2";
const FirstSection = () => {
  firstSection();
  return (
    <div
      className="first-section  relative overflow-hidden w-full"
      data-scroll-section
    >
      <div className="wrapper  w-full  h-full ">
        <div className="bg   absolute top-0  left-0 w-full h-full  z-[0]">
          <Image
            src="/firstSectionImg/firstSection.jpg"
            width={1920}
            height={1080}
            className="h-full  w-full object-cover brightness-50"
          />
        </div>
        <div className="overlay    h-full  backdrop-blur  w-full ">
          <div className="min-h-screen   container mx-auto px-11 py-20   ">
            <h1 className="text-3xl font-bold text-[#DFDFDF]">
              Our Global Services
            </h1>
            <p className="inline-block mt-5 text-base font-semibold text-[#DFDFDF]">
              We are known for our work in these broad areas. Whether you’re an
              entrepreneur with an idea, a product owner, or a leader looking to
              expand your brand growth. Our custom suite of services will cater
              to all your needs. In short, EstivaSoftech is your one-stop
              solution to convert your business into a brand.
            </p>

            <div className="  mt-16 first-section-grid grid min-h-[85vh] gap-4  grid-cols-2 grid-flow-col">
              <div className="first-section-box flex py-8 px-5 ">
                <div className="related-services  w-[30%] h-full col gap-2">
                  <h1 className="text-[#b0b8c7]  text-xl">Related Services</h1>
                  <ul className="flex mt-5 flex-col uppercase">
                    <li>
                      <TiTick />
                      search Engine
                    </li>
                    <li>
                      <TiTick />
                      Pay per click
                    </li>
                    <li>
                      <TiTick />
                      sem
                    </li>
                    <li>
                      <TiTick />
                      smm
                    </li>
                  </ul>
                </div>
                <div className="skills  w-[65%] ">
                  <h1 className="text-[#b0b8c7]  text-3xl">
                    Digital Marketing
                  </h1>

                  <p className=" inline-block w-full mt-5 text-sm text-[#C6CBD1]">
                    Unlock the potential of your digital marketing online
                    presence with our services. Our experts employ proven
                    strategies to drive targeted traffic, increase brand
                    visibility, and generate leads. From search engine
                    optimization (SEO) and pay-per-click (PPC) advertising to
                    social media marketing and content creation, we cover all
                    aspects of digital marketing to help your business thrive in
                    the digital landscape.
                  </p>

                  <CommonBtn2> Explore</CommonBtn2>
                </div>
              </div>
              <div className="first-section-box flex py-8 px-5 ">
                <div className="related-services  w-[30%] h-full col gap-2">
                  <h1 className="text-[#b0b8c7]  text-xl">Related Services</h1>
                  <ul className="flex mt-5 flex-col uppercase">
                    <li>
                      <TiTick />
                      search Engine
                    </li>
                    <li>
                      <TiTick />
                      Pay per click
                    </li>
                    <li>
                      <TiTick />
                      sem
                    </li>
                    <li>
                      <TiTick />
                      smm
                    </li>
                  </ul>
                </div>
                <div className="skills  w-[65%] ">
                  <h1 className="text-[#b0b8c7]  text-3xl">Web Development</h1>

                  <p className=" inline-block w-full mt-5 text-sm text-[#C6CBD1]">
                    Our team of skilled developers creates dynamic,
                    user-friendly, and visually appealing websites and web
                    application that reflect your brand's identity. Our team
                    work very closely with you to understand your goals and your
                    business dream and develop a tailored solution that meets
                    your unique needs.
                  </p>

                  <CommonBtn2> Explore</CommonBtn2>
                </div>
              </div>

              <div className="first-section-box flex py-8 px-5 ">
                <div className="related-services  w-[30%] h-full col gap-2">
                  <h1 className="text-[#b0b8c7]  text-xl">Related Services</h1>
                  <ul className="flex mt-5 flex-col uppercase">
                    <li>
                      <TiTick />
                      search Engine
                    </li>
                    <li>
                      <TiTick />
                      Pay per click
                    </li>
                    <li>
                      <TiTick />
                      sem
                    </li>
                    <li>
                      <TiTick />
                      smm
                    </li>
                  </ul>
                </div>
                <div className="skills  w-[65%] min-h-[50%]">
                  <h1 className="text-[#b0b8c7]  text-3xl">Designing</h1>

                  <p className=" inline-block w-full mt-5 text-sm text-[#C6CBD1]">
                    Ever seen a website or app without design? Well, User
                    experience (UX) plays a vital role when it comes to holding
                    your customers for the long run. EstivaSoftech focuses on
                    creating intuitive interfaces, easy navigation, and seamless
                    interactions to ensure a seamless integrated user
                    experience. We make sure that your users have a positive and
                    engaging experience and remember you with your design.
                  </p>

                  <CommonBtn2> Explore</CommonBtn2>
                </div>
              </div>
              <div className="first-section-box flex py-8 px-5 ">
                <div className="related-services  w-[30%] h-full col gap-2">
                  <h1 className="text-[#b0b8c7]  text-xl">Related Services</h1>
                  <ul className="flex mt-5 flex-col uppercase">
                    <li>
                      <TiTick />
                      search Engine
                    </li>
                    <li>
                      <TiTick />
                      Pay per click
                    </li>
                    <li>
                      <TiTick />
                      sem
                    </li>
                    <li>
                      <TiTick />
                      smm
                    </li>
                  </ul>
                </div>
                <div className="skills  w-[65%] min-h-[50%]">
                  <h1 className="text-[#b0b8c7]  text-3xl">
                    Software Development
                  </h1>

                  <p className=" inline-block w-full mt-5 text-sm text-[#C6CBD1]">
                    We specialize in developing robust software solutions
                    tailored to meet your unique business requirements. From
                    custom enterprise software to mobile applications, our
                    developers ensure seamless build secure, scalable, and
                    future-proof software solutions.
                  </p>

                  <CommonBtn2> Explore</CommonBtn2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
