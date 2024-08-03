"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import svgBackground from "../../public/HomePage/testimonials/testimonialsEffect.jpg";
import placeholder from "../../public/HomePage/WhyFinguard/ChildSafe.png";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import { useMobile } from "../utils/MobileContext";

const testimonials = [
  {
    name: "Alex Johnson",
    content:
      "Working with this team was an absolute pleasure. They delivered high-quality work on time and exceeded our expectations.",
    image: placeholder,
  },
  {
    name: "Maria Garcia",
    content:
      "The professionalism and expertise displayed were exceptional. We are thrilled with the results and highly recommend their services.",
    image: placeholder,
  },
  {
    name: "David Lee",
    content:
      "Excellent experience from start to finish. The team was responsive, creative, and delivered exactly what we needed.",
    image: placeholder,
  },
  {
    name: "Sophia Brown",
    content:
      "Their innovative approach and attention to detail made a significant impact on our project. Highly impressed!",
    image: placeholder,
  },
  {
    name: "Sophia Black",
    content:
      "Their innovative approach and attention to detail made a significant impact on our project. Highly impressed!",
    image: placeholder,
  },
  {
    name: "James Wilson",
    content:
      "A truly outstanding team! They took our vision and brought it to life with precision and creativity.",
    image: placeholder,
  },
];

const TestimonialCard = ({ image, name, content }) => {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row gap-10 md:gap-0 rounded-2xl md:rounded-none text-black min-h-[22rem] md:min-h-0 md:h-[13.5rem] w-full max-w-[30rem] md:min-w-[45rem] md:max-w-[45rem] bg-white">
      <div className="h-full w-full md:w-[10rem] flex items-start md:items-center justify-between md:justify-center overflow-hidden">
        <Image
          src={image}
          width={160}
          height={216}
          className="h-full w-1/2 md:w-full object-cover"
          alt={name}
        />
        <p className="text-sm pt-10 w-1/2 text-center md:hidden font-bold">
          {name}
        </p>
      </div>
      <div className="py-8 md:py-10 px-10 md:px-14 w-full md:w-[calc(100%-10rem)] flex flex-col items-start justify-between">
        <p className="w-full md:line-clamp-3">{content}</p>
        <p className="text-sm hidden md:block font-bold">{name}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { isMobile, vw } = useMobile();
  const [index, setIndex] = useState(0);
  const [disabled, setDisabled] = useState();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (index === testimonials.length - 1) {
      setDisabled("nextBtn");
    } else if (index === 0) {
      setDisabled("prevBtn");
    } else {
      setDisabled(null);
    }
  }, [index]);

  useEffect(() => {
    setIndex(0);
    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
  }, [vw]);

  const handleIndexChange = (direction) => {
    if (isBtnDisabled) return;

    // Disable the button and set a timeout to enable it again after 750ms
    setIsBtnDisabled(true);
    setTimeout(() => {
      setIsBtnDisabled(false);
    }, 600);

    if (direction === "next" && disabled !== "nextBtn") {
      setIndex((prev) => prev + 1);
      scrollRef.current.scrollBy({
        left: isMobile ? vw : 768,
        behavior: "smooth",
      });
      return;
    }

    if (direction === "prev" && disabled !== "prevBtn") {
      setIndex((prev) => prev - 1);
      scrollRef.current.scrollBy({
        left: -(isMobile ? vw : 768),
        behavior: "smooth",
      });
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-[35rem] md:h-[30rem] z-10 bg-[#474350] text-white px-10 py-10 md:py-32 md:px-24 flex flex-col md:flex-row items-start md:justify-between gap-10 relative">
        <Zoom>
          <p className="text-[25px] leading-relaxed xl:text-[45px] 2xl:text-[54px] font-bold ">
            Customer Testimonials!
          </p>
        </Zoom>
        <div className="flex items-center justify-end w-full md:w-fit gap-6">
          <p className="text-3xl md:text-[3.5rem]">
            {index + 1}/{testimonials.length}
          </p>
          <div className="flex w-20 md:w-[8.875rem] h-8 md:h-[3.5rem]">
            <button
              onClick={() => handleIndexChange("prev")}
              disabled={disabled === "prevBtn" && true}
              className="w-1/2 border-2 text-xl md:text-3xl cursor-pointer disabled:text-gray-300 disabled:text-opacity-70 border-white h-full flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => handleIndexChange("next")}
              disabled={disabled === "nextBtn" && true}
              className="w-1/2 border-2 border-l-0 text-xl md:text-3xl cursor-pointer disabled:text-gray-300  disabled:text-opacity-70 border-white h-full flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="absolute w-full left-0 bottom-24 md:bottom-10 flex items-center justify-start md:gap-12 overflow-x-hidden hidden-scrollbar"
        >
          {testimonials.map((item, id) => (
            <div
              key={id}
              className="min-w-[100vw] h-fit px-10 md:px-0 flex items-center justify-center md:min-w-[45rem] md:h-[13.5rem] md:first:ml-[15rem] md:last:mr-[100rem]"
            >
              <TestimonialCard
                key={id} // Add the key prop here
                image={item.image}
                index={id}
                name={item.name}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>

      <Image
        src={svgBackground}
        className="w-[100%] h-auto z-0 "
        alt="background"
      />
    </div>
  );
};

export default Testimonials;
