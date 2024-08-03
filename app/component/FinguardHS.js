"use client";
import React, { useState, useRef } from "react";
import Image1 from "../../public/HomePage/FinguardHs/Image2.png";
import Image2 from "../../public/HomePage/FinguardHs/Image5.png";
import Image3 from "../../public/HomePage/FinguardHs/Image3.png";
import Image4 from "../../public/HomePage/FinguardHs/Image4.png";
import Image5 from "../../public/HomePage/FinguardHs/Image1.png";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

function FinguardHS() {
  const images = [Image1, Image2, Image3, Image4, Image5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const bg = ["#F5F5DC", "#000000", "#964B00", "#FFC0CB", "#FFFFFF"];
  const containerRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const BuyNow = () => {
    window.location.href = "/buy-now";
  };

  return (
    <Zoom>
      <div className="h-full flex flex-col py-12 justify-center items-center">
        <h3 className="z-10 text-[25px] md:text-[54px] font-bold  text-[#474350] text-center relative after:content-[''] after:absolute after:w-[80%] after:h-[1px] after:bg-[#474350] after:bottom-0 after:left-[10%]">
          Finguard HS Universal 180 Degree
        </h3>
        <h6 className="z-10 text-[18px] md:text-[25px] font-[400] text-[#202020] w-[80%] md:w-[50%] text-center pt-4">
          The Finguard HS universal 180 degrees prevents finger-trapping
          accidents by covering the gap.
        </h6>
        <button
          onClick={BuyNow}
          className="z-10 bg-[#FECDAA] text-black px-5 py-2 rounded-full my-8"
        >
          Buy Now
        </button>
        <div
          className="w-[40vw] h-[40vh] absolute left-0"
          style={{
            opacity: "0.5",
            background:
              "radial-gradient(50% 50% at 50% 50%, #32F5CA 0%, #FCFFEB 100%)",
          }}
        ></div>
        <div
          className="w-[40vw] h-[40vh] absolute right-0"
          style={{
            opacity: "0.5",
            background:
              "radial-gradient(50% 50% at 50% 50%, #F3AA52 0%, #FCFFEB 100%)",
          }}
        ></div>

        <Zoom
          ref={containerRef}
          className="relative z-10 w-[85%] h-[30vh] md:w-[50%] md:h-[60vh]"
        >
          <Image
            src={images[currentIndex]}
            alt=""
            layout="fill"
            className="w-fit h-fit rounded-xl border-2 border-[#FE4446]"
            objectFit="cover"
          />
        </Zoom>
        <Zoom>
          <div className="flex space-x-2 pt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className="w-[20px] h-[20px] md:w-[38px] md:h-[38px] border-black rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  border: "1px solid black",
                  backgroundColor: bg[index],
                }}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </Zoom>
      </div>
    </Zoom>
  );
}

export default FinguardHS;
