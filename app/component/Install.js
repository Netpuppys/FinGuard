"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import step1Image from "../../public/HomePage/HowToInstall/Step1.png"; // Update with actual path
import step2Image from "../../public/HomePage/HowToInstall/Step2.png"; // Update with actual path
import step3Image from "../../public/HomePage/HowToInstall/Step3.png"; // Update with actual path
import step4Image from "../../public/HomePage/HowToInstall/Step3.png"; // Update with actual path
import Step1 from "../../public/HomePage/HowToInstall/Step1.webp";
import Step2 from "../../public/HomePage/HowToInstall/Step2.gif";
import Step3 from "../../public/HomePage/HowToInstall/Step3.gif";
import Step4 from "../../public/HomePage/HowToInstall/Step4.png";
import { Zoom } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const HowToInstall = () => {
  const steps = [
    {
      title: "Step 1",
      description:
        "Clean the door and door frame. Sand Slightly for better adhesion. Dry the surface.",
      image: step1Image,
      flipImage: Step1,
    },
    {
      title: "Step 2",
      description:
        "Close the door. Place Marking strip provided with Finguard at right angle created by door.",
      image: step2Image,
      flipImage: Step2,
    },
    {
      title: "Step 3",
      description:
        "Lightly Draw With pencil, One on the door and other on the frame using marking strip.",
      image: step3Image,
      flipImage: Step3,
    },
    {
      title: "Step 4",
      description:
        "Open the Door. Place Finguard on the marking done. Peel off the protective adhesive film and start sticking it.",
      image: step4Image,
      flipImage: Step4,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();
  const handleDotClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };
  return (
    <div className="w-full ">
      <Zoom>
        <h2 className="text-[#474350] pl-10 md:pl-24 font-[700] text-[25px] xl:text-[42px] 2xl:text-[54px]">
          How To Install?
        </h2>
      </Zoom>

      <div
        className="hidden md:flex w-full pl-24 pt-12 gap-10 overflow-x-scroll"
        style={{
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className={`rounded-lg relative p-10 h-[30rem] ${
              index % 2 === 0 ? "bg-[#FECDAA]" : "bg-[#474350]"
            } text-center  min-w-[25%] cursor-pointer grid-item`}
          >
            <div className="w-[calc(100%-5rem)] h-full absolute top-0 flip-image flex justify-center items-center">
              <Image
                className=" w-full h-fit self-center rounded-lg"
                style={{}}
                src={step.flipImage}
                alt=""
              />
            </div>
            <div className="image-overlay w-[calc(100%-5rem)] absolute flex flex-col justify-between">
              <Image
                className="w-[30%] h-auto"
                src={step.image}
                alt={step.title}
              />
              <h3
                className={` xl:text-[35px] 2xl:text-[40px] text-left border-b-2 w-fit font-[400] mb-4 ${
                  index % 2 === 0
                    ? "text-[#333A41] border-[#333A41]"
                    : "text-[#FFFFFF] border-[#FFFFFF]"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`w-fit mb-4 text-left font-[400] xl:tex-md 2xl:text-xl h-[8.75rem]  text-wrap line-clamp-5 ${
                  index % 2 === 0 ? "text-[#646161]" : "text-[#FFFFFF]"
                }`}
              >
                {step.description}
              </p>

              <button
                className={` w-fit py-1 font-semibold ${
                  index % 2 === 0 ? "text-[#474350]" : "text-[#FECDAA]"
                }`}
              >
                READ MORE &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
      <section className="md:hidden py-12">
        <div className="container">
          <Swiper
            className="h-fit w-full rounded-lg"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            ref={swiperRef}
          >
            {steps.map((step, index) => (
              <SwiperSlide key={step.title}>
                <div
                  className={`rounded-lg p-10 h-[30rem] ${
                    index % 2 === 0 ? "bg-[#FECDAA]" : "bg-[#474350]"
                  } text-center  w-[80%] mx-auto cursor-pointer grid-item flex h-full items-center justify-center`}
                >
                  <div className="w-[calc(100%-5rem)] h-full absolute top-0 flip-image flex justify-center items-center">
                    <Image
                      className=" w-full h-fit self-center rounded-lg"
                      style={{}}
                      src={step.flipImage}
                      alt=""
                    />
                  </div>
                  <div className="image-overlay  flex flex-col justify-between">
                    <Image
                      className="w-[50%] h-auto"
                      src={step.image}
                      alt={step.title}
                    />
                    <h3
                      className={`text-[25px] xl:text-[35px] 2xl:text-[40px] text-left border-b-2 w-fit font-[400] mb-4 ${
                        index % 2 === 0
                          ? "text-[#333A41] border-[#333A41]"
                          : "text-[#FFFFFF] border-[#FFFFFF]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mb-4 text-left font-[400] xl:tex-md 2xl:text-xl h-[8.75rem] w-fit text-wrap line-clamp-5 ${
                        index % 2 === 0 ? "text-[#646161]" : "text-[#FFFFFF]"
                      }`}
                    >
                      {step.description}
                    </p>

                    <button
                      className={` w-fit py-1 font-semibold ${
                        index % 2 === 0 ? "text-[#474350]" : "text-[#FECDAA]"
                      }`}
                    >
                      READ MORE &gt;
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex space-x-2 pt-4 justify-center self-center">
            {steps.map((_, index) => (
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
};

export default HowToInstall;
