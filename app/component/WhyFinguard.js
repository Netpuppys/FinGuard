"use client";
import React, { useRef, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import MadeInIndia from "../../public/HomePage/WhyFinguard/makeInIndia.png";
import ChildSafe from "../../public/HomePage/WhyFinguard/ChildSafe.png";
import Durable from "../../public/HomePage/WhyFinguard/Durable.png";
import FitsAllDoor from "../../public/HomePage/WhyFinguard/FitsAllDoor.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function WhyFinguard() {
  const features = [
    {
      title: "Made in India Quality",
      description:
        "Our door guards are proudly manu-factured in India, ensuring top-notch quality that meets local safety standards. By choosing Finguard, you're supporting Indian innovation and craftsmanship while protecting your family.",
      image: MadeInIndia,
      hoverColor: "",
    },
    {
      title: "Child-safe Materials",
      description:
        "We prioritize your children's safety above all. Finguard door guards are constructed using non-toxic, child-friendly materials that are safe for even the youngest members of your family.",
      image: ChildSafe,
      hoverColor: "",
    },
    {
      title: "Durable and Lasting",
      description:
        "Built to withstand the test of time, our door guards are made with sturdy materials that ensure long-term protection. This durability means you can rely on Finguard to keep your children safe for years to come.",
      image: Durable,
      hoverColor: "",
    },
    {
      title: "Fits All Doors",
      description:
        "Designed with Indian homes in mind, Finguard door guards are versatile and adaptable. They easily fit all standard door sizes found in Indian households, making them a convenient safety solution for any home.",
      image: FitsAllDoor,
      hoverColor: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();
  const handleDotClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <div>
      <Zoom>
        <h2 className="font-[400] mt-5 md:mt-0 px-10 md:px-24 text-[15px] xl:text-[40px] 2xl:text-[48px] text-[#474350]">
          Why Finguard Door Guards are
        </h2>
        <h3 className="font-[700] px-10 md:px-24 text-[25px] xl:text-[42px] 2xl:text-[54px] text-[#474350]">
          Important for Every Indian Family?
        </h3>
      </Zoom>
      <div className="hidden md:block pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                transition: "background-color 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `#${feature.hoverColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
              }}
              className="border-[#151515] flex flex-col justify-between border-y-2 border-l-2 -ml-[2px] p-[12%] cursor-pointer"
            >
              <Fade>
                <h2 className="lg:text-[20px] xl:text-[22px] 2xl:text-[25px] text-[#474350] text-center font-[500] mb-4">
                  {feature.title}
                </h2>
                <p className="text-[#4A4A4A]-400 mb-4 text-[13px] text-center">
                  {feature.description}
                </p>
                <Image
                  src={feature.image}
                  alt=""
                  className="w-full h-auto t-4 rounded-xl"
                  style={{
                    border: "1px solid #f2d40f",
                  }}
                />
              </Fade>
            </div>
          ))}
        </div>
      </div>
      <section className="md:hidden py-12">
        <div className="container">
          <Swiper
            className="h-fit w-full rounded-lg"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            ref={swiperRef}
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.title}>
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    key={feature.title}
                    style={{
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `#${feature.hoverColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                    }}
                    className="border-[#151515] w-[80%] rounded-2xl mx-auto flex flex-col justify-between border-2 p-6 cursor-pointer"
                  >
                    <Fade>
                      <h2 className="text-xl text-[#474350] text-center font-[500] mb-4">
                        {feature.title}
                      </h2>
                      <p className="text-[#4A4A4A]-400 mb-4 text-[13px] text-center">
                        {feature.description}
                      </p>
                      <Image
                        src={feature.image}
                        alt=""
                        className="w-full h-auto t-4 rounded-xl"
                        style={{
                          border: "1px solid #f2d40f",
                        }}
                      />
                    </Fade>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex space-x-2 pt-4 justify-center self-center">
            {features.map((_, index) => (
              <div
                key={index}
                className={`dots self-center rounded-full cursor-pointer ${
                  activeIndex === index
                    ? "bg-[#FB9247] w-[14px] h-[14px]"
                    : "bg-[#FECDAA] w-[12px] h-[12px]"
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyFinguard;
