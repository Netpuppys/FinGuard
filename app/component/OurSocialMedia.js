"use client";
import React from "react";
import gallery1 from "../../public/HomePage/OurSocialMedia/gallery1.webp";
import gallery2 from "../../public/HomePage/OurSocialMedia/gallery2.webp";
import gallery3 from "../../public/HomePage/OurSocialMedia/gallery3.webp";
import gallery4 from "../../public/HomePage/OurSocialMedia/gallery4.webp";
import gallery5 from "../../public/HomePage/OurSocialMedia/gallery5.webp";
import gallery6 from "../../public/HomePage/OurSocialMedia/gallery6.webp";
import MiniCarousel from "./MiniCrousel";

function OurSocialMedia() {
  const cardData = [
    {
      image: [gallery1, gallery2],
    },
    {
      image: [gallery3, gallery4],
    },
    {
      image: [gallery5, gallery6],
    },
  ];

  return (
    <div className="px-10 md:px-24">
      <h3 className="w-fit text-[25px] xl:text-[45px] 2xl:text-[54px] z-10 text-[#474350] font-bold text-left mb-20 relative py-5 after:content-[''] after:absolute after:w-[90%] after:h-[2px] after:bg-[#334F7D] after:bottom-0 after:left-[5%]">
        Our Social Media Family
      </h3>
      <div
        className=" w-[35vw] h-[40vh] absolute -z-10 ml-[5%]"
        style={{
          opacity: "0.6",
          background:
            "radial-gradient(50% 50% at 50% 50%, #32F5CA 0%, #FCFFEB 100%)",
        }}
      ></div>
      <div
        className=" w-[35vw] h-[40vh] absolute -z-10 right-[15%]"
        style={{
          opacity: "0.6",
          background:
            "radial-gradient(50% 50% at 50% 50%, #F3AA52 0%, #FCFFEB 100%)",
        }}
      ></div>
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-center px-10 xl:px-48">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-[30%] flex flex-col relative h-full items-center justify-start px-10 gap-5 "
          >
            {/* <Image
              src={item.image}
              className="w-full lg:w-[18rem]"
              alt={`Gallery image ${index + 1}`}
            /> */}
            <div className="w-[20rem] md:w-full h-full aspect-square border-2 border-[#FDFD35] rounded-3xl overflow-hidden">
              <MiniCarousel images={item.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurSocialMedia;
