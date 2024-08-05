"use client";
import React from "react";
import easy from "../../public/HomePage/Card/easy.png";
import patented from "../../public/HomePage/Card/patented.png";
import oneYear from "../../public/HomePage/Card/oneYear.png";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

const cards = [
  {
    title: "Easy to Install",
    image: easy,
  },
  {
    title: "Patented",
    image: patented,
  },
  {
    title: "1 Year Warranty",
    image: oneYear,
  },
];

const Card = () => {
  return (
    <div className="w-[100%] mx-auto md:w-full flex gap-6 md:gap-20 items-center justify-center flex-wrap py-5 lg:py-28 transition-all ease-in duration-300 delay-75">
      {cards.map((card, index) => (
        <Zoom key={index}>
          <div className="w-[40vw] h-[9rem] md:h-[16rem] mx-auto xl:w-[22rem] flex flex-col items-center justify-center border-dashed border-[#474350] border-2 px-4 md:px-8 py-2 rounded-2xl hover:scale-105 md:shadow-xl md:hover:shadow-4xl transition ease-in delay-50 duration-300 cursor-pointer">
            <p className="block text-md md:text-[33px] text-[#474350] mt-2 text-center mb-4">
              {card.title}
            </p>
            <Image
              className="w-[30%] xl:w-[50%] h-auto"
              src={card.image}
              alt={card.title}
            />
          </div>
        </Zoom>
      ))}
    </div>
  );
};

export default Card;
