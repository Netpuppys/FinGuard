"use client";
import React from "react";
import Nahar from "../../public/HomePage/Clients/Nahar.png";
import Learning from "../../public/HomePage/Clients/Learning.png";
import Early from "../../public/HomePage/Clients/Early.png";
import Educon from "../../public/HomePage/Clients/Educon.png";
import GSIS from "../../public/HomePage/Clients/GSIS.png";
import JBCN from "../../public/HomePage/Clients/JBCN.png";
import { Zoom } from "react-awesome-reveal";
import Image from "next/image";
function Clients() {
  const clients = [
    {
      image: Nahar,
    },
    {
      image: Learning,
    },
    {
      image: Early,
    },
    {
      image: Educon,
    },
    {
      image: GSIS,
    },
    {
      image: JBCN,
    },
  ];
  return (
    <div className="w-full h-fit flex flex-col justify-end">
      <Zoom>
        <h3 className="text-[#474350] text-[25px] md:text-[54px] font-bold px-10 md:px-24 z-10">
          Our Trusted Clients
        </h3>
      </Zoom>

      <div className="pt-12 md:pt-16 z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b-2 border-[#334F7D] z-10">
          {clients.map((feature) => (
            <div
              key={feature.image}
              className="border-[#334F7D] flex flex-col justify-center border-t-2 border-l-2 z-10 -ml-[2px] py-8 px-[18%] cursor-pointer border-collapse"
            >
              <Zoom>
                <Image
                  src={feature.image}
                  alt=""
                  className="w-[100%] md:w-[70%] mx-[auto] h-auto z-10 "
                />
              </Zoom>
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-[400px] h-[400px] absolute hidden md:block left-[55%]  z-0"
        style={{
          opacity: "0.5",
          transform: "translateY(50%)",
          background:
            "radial-gradient(50% 50% at 50% 50%, #EB615B 0%, #FCFFEB 100%)",
        }}
      ></div>
    </div>
  );
}

export default Clients;
