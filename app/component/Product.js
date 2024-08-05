"use client";
import Image from "next/image";
import React from "react";
import product from "../../public/HomePage/Product/product.png";
import { Zoom } from "react-awesome-reveal";
function Product() {
  const BuyNow = () => {
    window.location.href = "/product/finguard-hs-universal-180-degree/";
  };
  return (
    <div className="flex flex-col ">
      <div
        className=" w-[40vw] h-[40vh] absolute z-0 -ml-[15%]"
        style={{
          opacity: "0.6",
          background:
            "radial-gradient(50% 50% at 50% 50%, #F3AA52 0%, #FCFFEB 100%)",
        }}
      ></div>
      <div
        className=" w-[40vw] h-[40vh] absolute z-0 right-0"
        style={{
          opacity: "0.6",
          background:
            "radial-gradient(50% 50% at 50% 50%, #F3AA52 0%, #FCFFEB 100%)",
        }}
      ></div>
      <Zoom>
        <h3 className="w-fit my-8 py-5 ml-10 md:ml-24 text-[25px] xl:text-[45px] 2xl:text-[54px] text-[#474350] font-bold text-left relative  after:content-[''] after:absolute after:w-[90%] after:h-[2px] after:bg-[#334F7D] after:bottom-0 after:left-[5%]">
          Product Specifications
        </h3>
        <div className="flex flex-col-reverse md:flex-row justify-between px-10 md:px-24 z-10">
          <div className="text-[#313131] text-left text-[18px] md:text-[23px] w-[100%] pt-12 md:w-[50%] self-center ">
            <strong> Finguard HS Universal 180 degree – </strong>is applied on
            the hinge side of the doors, for doors having thickness up to 65 mm.
            and for the opening of 180 degree. Also can be applied on the glass
            doors with pivot hinges at the bottom.
            <br />
            <br />
            <strong>Material –</strong> Rigid PVC Product Height – 208 cm (82
            inches) Product Thickness – 1.5 mm Available
            <br />
            <br />
            <strong>Colors –</strong> Beige, Brown, Pink, Black, White Tested
            for 5,00,000 opening and closing movements Quick and easy to apply
            with pre-installed double side tape
            <br />
            <br />
            <strong>Benefit – </strong>Covers the entire gap of the hinge side.
            Top to bottom, where usually fingers get trapped.
            <br />
            <br />
            <div className="flex z-10 pb-24 gap-3">
              <Zoom>
                <button className="z-10 bg-[#474350] text-white px-6 py-2 md:px-10 md:py-3 rounded-full">
                  Contact
                </button>
                <button
                  onClick={BuyNow}
                  className="z-10 bg-[#FECDAA] text-black px-6 md:px-10 py-2 md:py-3 rounded-full"
                >
                  Buy Now
                </button>
              </Zoom>
            </div>
          </div>

          <Image src={product} alt="" className="w-[100%] md:w-[40%] h-fit" />
        </div>
      </Zoom>
    </div>
  );
}

export default Product;
