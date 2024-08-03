"use client";
import React from "react";
import { Zoom } from "react-awesome-reveal";
function Facts() {
  const cards = [
    {
      title:
        "Children getting their hands stuck between doors is a common occurrence, especially in households, schools, and public places.",
    },
    {
      title:
        "According to some studies, approximately 1 out of 4 children experience getting their hands trapped in doors at some point during childhood.",
    },
    {
      title:
        "Door-related injuries can range from minor bruises to more serious injuries like cuts, fractures, or even amputations, depending on the force and mechanism of closure.",
    },
    {
      title:
        "Educational campaigns and safety initiatives in schools and communities aim to raise awareness about the risks associated with doors and promote safe behaviors among children.",
    },
  ];
  return (
    <div className=" w-full pb-24">
      <h3 className="px-10 md:px-24 w-fit text-[25px] xl:text-[45px] 2xl:text-[54px] text-[#474350] font-bold text-left md:mb-10 py-12 z-10">
        Facts
      </h3>
      <div
        className=" w-[30vw] h-[35vh] absolute z-0 -ml-[5%]"
        style={{
          opacity: "0.6",
          background:
            "radial-gradient(50% 50% at 50% 50%, #F3AA52 0%, #FCFFEB 100%)",
        }}
      ></div>
      <div
        className=" w-[30vw] h-[35vh] absolute z-0 right-0"
        style={{
          opacity: "0.6",
          background:
            "radial-gradient(50% 50% at 50% 50%, #32F5CA 0%, #FCFFEB 100%)",
        }}
      ></div>
      <div className="grid px-2 md:px-24 grid-cols-2 md:grid-cols-4 gap-5 md:gap-16 z-10 w-full h-full justify-between ">
        {cards.map((card, index) => (
          <Zoom key={index} className="">
            <div className="z-10 h-[15rem] md:h-[22rem] w-full flex px-4 md:px-10 overflow-y-scroll hidden-scrollbar justify-center items-center  rounded-md border-2 border-[#000000] bg-[#080707] opacity-80">
              <div className=" text-white text-[12px] xl:text-[14px] 2xl:text-[16px] justify-center items-center text-center">
                <div className="h-[2px] w-[80%] absolute top-5 bg-white left-[10%]"></div>
                {card.title}
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
}

export default Facts;
