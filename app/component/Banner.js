"use client";
import React from "react";
import BannerImg from "../../public/HomePage/Banner/bannerImg.png";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
const Banner = () => {
  const BuyNow = () => {
    window.location.href = "/buy-now";
  };
  return (
    <div className="block mt-20 md:mt-0 md:flex max-w-full justify-between">
      <div className="w-[90%] z-10 pl-5 mx-auto md:w-[60%] self-center md:pl-[8rem]">
        <Zoom>
          <h2 className="text-[#FE4446] text-md xl:text-xl 2xl:text-2xl">
            SMART PROTECTION FOR TINY HANDS
          </h2>
          <h3 className="text-[#474350] text-[18px] xl:text-[42px] 2xl:text-[54px] font-medium">
            Protecting Little Fingers:
          </h3>
          <h4 className="text-[#474350] text-[25px] xl:text-[60px] 2xl:text-[76px] font-semibold md:-mt-5">
            One Door at a Time!
          </h4>

          <div className="hidden md:block border-l-2 border-[#FE4446] px-7 py-3">
            <h5 className="text-[#2C2C2C] xl:text-[15px] 2xl:text-[17px]">
              With Finguard, we&apos;re not just guarding doors. We&apos;re
              guarding childhood, one finger at a time. We&apos;re guarding
              smiles, giggles, and the carefree exploration of your little ones.
              Because every child deserves a home where curiosity is encouraged,
              And every parent deserves peace of mind. <br />
              Ready to transform your home into a safe haven? Let&apos;s protect
              those precious little fingers together.
            </h5>
            <button
              onClick={BuyNow}
              className="bg-[#FECDAA] rounded-3xl xl:px-6 xl:py-2 2xl:px-8 2xl:py-3 mt-4"
            >
              Buy Now
            </button>
          </div>
        </Zoom>
      </div>

      <div className="overflow-hidden md:w-[35%]">
        <Zoom>
          <Image
            className="-mt-12 md:mt-0 z-0 md:pt-10 w-full h-auto overflow-hidden"
            src={BannerImg}
            alt=""
          />
        </Zoom>
      </div>
      <div className="md:hidden border-t-2 w-[80%] border-[#FE4446] mx-auto py-8 flex flex-col justify-center items-center">
        <h5 className="text-[#000] text-lg text-center">
          With Finguard, we&apos;re not just guarding doors. We&apos;re guarding
          childhood, one finger at a time. We&apos;re guarding smiles, giggles,
          and the carefree exploration of your little ones. Because every child
          deserves a home where curiosity is encouraged, And every parent
          deserves peace of mind. <br />
          Ready to transform your home into a safe haven? Let&apos;s protect
          those precious little fingers together.
        </h5>
        <button
          onClick={BuyNow}
          className="bg-[#FECDAA] rounded-3xl px-8 py-2 mt-4"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
