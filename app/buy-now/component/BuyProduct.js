"use client";
import React, { useState } from "react";
import BannerImg from "../../../public/BuyNow/BuyNow.png";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";
import { TiTick } from "react-icons/ti";

const BuyProduct = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const colors = [
    { name: "Beige", value: "F6F7DF" },
    { name: "Black", value: "000" },
    { name: "Brown", value: "AA6F2F" },
    { name: "Pink", value: "FECDD1" },
    { name: "White", value: "FFF" },
  ];

  const cards = [
    {
      id: 1,
      title: "Finguard Door Guard",
      description: "With Finguard, we're",
      price: "1199/-",
    },
    {
      id: 3,
      title: "Finguard Door Guards",
      description: "With Finguard, we're",
      price: "3299/-",
    },
    {
      id: 5,
      title: "Finguard Door Guards",
      description: "With Finguard, we're",
      price: "4999/-",
    },
  ];
  const cardDescription = [
    {
      title: "Weight ",
      description: "900 grams",
    },
    {
      title: "Dimensions",
      description: "3 x 0.5 x 80 Inch",
    },
    {
      id: 5,
      title: "Colours",
      description: (
        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-[18px] h-[18px] rounded-full flex items-center justify-center "
              style={{
                border: "0.89px solid black",
                backgroundColor: `#${color.value}`,
              }}
            ></div>
          ))}
        </div>
      ),
    },
  ];
  const reviews = [{}, {}, {}];

  const getColorImage = (color) => {
    switch (color) {
      case "beige":
        return BannerImg;
      case "black":
        return BannerImg;
      case "brown":
        return BannerImg;
      case "pink":
        return BannerImg;
      case "white":
        return BannerImg;
      default:
        return BannerImg;
    }
  };

  return (
    <div className="h-full md:h-[calc(100vh-100px)] md:pt-[5vh] w-[100%] block md:flex justify-center items-center">
      <div className="w-full md:w-[48%] pt-6 md:pt-0 relative h-[calc(100vh-(100px+5vh))]">
        <h2 className="text-[#474350] text-xl pl-[10%] md:pl-[20%] md:text-3xl font-semibold">
          Finguard HS
        </h2>
        <h3 className="text-[#474350] pl-[10%] md:pl-[20%] text-[25px] md:text-[41px] font-semibold">
          Universal 180 Degree
        </h3>
        <div
          className="w-[50vw] h-[60vh] pl-[10%] md:pl-[20%] absolute hidden md:block z-0 left-0"
          style={{
            opacity: "0.5",

            background:
              "radial-gradient(50% 50% at 50% 50%, #F3AA5250.5%, rgba(252, 255, 235, 0.00)100%)",
          }}
        ></div>
        <Zoom>
          <Image
            className="mt-8 w-[80%] md:pl-[20%] mx-auto md:mx-0 md:w-[70%] h-fit"
            src={getColorImage(selectedColor)}
            alt=""
          />
        </Zoom>
        <div
          className="hidden md:block rounded-full aspect-square  absolute z-0  right-0 translate-x-1/2 top-1/2 -translate-y-1/2 text-3xl bg-[#FECDAA] p-5"
          style={{}}
        >
          <FaArrowRight />
        </div>
      </div>

      <div className="w-full md:w-[50%] bg-[#F6FFC5] h-fit md:h-[calc(100vh-(100px+5vh))] px-[10%] py-24 overflow-x-auto hidden-scrollbar">
        <h2 className="text-[#474350] font-bold text-[31px]">
          Buy This <span className="text-[#7B7B00]"> Product</span>
        </h2>
        <button
          className="w-[100%] py-3 rounded-full bg-[#FECDAA] mt-8"
          style={{
            boxShadow: "0px 4px 23.6px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Add to Cart
        </button>
        <button
          className="w-[100%] py-3 rounded-full bg-[#FDB582] mt-4"
          style={{
            boxShadow: "0px 4px 23.6px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Order Finguard Now
        </button>
        <h3 className="text-[#2C2C2C] text-[17px] font-normal mt-12">
          When it comes to <span className="font-semibold">safety,</span> the
          Finguard is a game-changer. It completely shields the gap on the
          door’s hinge side when open, effectively preventing{" "}
          <span className="font-semibold">finger-trapping accidents.</span>
        </h3>
        <h4 className="text-[#474350] text-3xl font-bold mt-16">
          <span className="text-[#7B7B00]">Choose Your </span>Package.
        </h4>
        <div className="mt-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              price={card.price}
              isSelected={card.id === selectedCard}
              onClick={handleCardClick}
            />
          ))}
        </div>
        <h3 className="text-[17px] font-normal mt-16">
          Want to See More <span className="font-semibold">Colours</span> of the{" "}
          <span className="font-semibold">
            Finguard HS Universal 180 Degree?
          </span>
        </h3>
        <h4 className="text-3xl font-bold text-[474350] mt-6">
          <span className="text-[#7B7B00]">Almost Done.</span> Choose Your
          Colour.
        </h4>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {colors.map((color) => (
            <div
              key={color.value}
              onClick={() => handleColorClick(color.value)}
              className={`flex relative flex-col items-center border-2 border-[#000] py-6 rounded-2xl ${
                selectedColor === color.value
                  ? "bg-[#FDFD35] shadow-inner"
                  : "bg-transparent"
              }`}
            >
              <div
                className={`aspect-square absolute right-2 top-2 p-2 shadow-inner rounded-full ${
                  selectedColor === color.value
                    ? "bg-[#FCFC35]"
                    : "bg-[#FCFFEE]"
                }`}
              >
                <TiTick
                  className={`${
                    selectedColor === color.value
                      ? "text-[#000]"
                      : "text-[#BDBD79]"
                  }`}
                />
              </div>
              <div
                className="rounded-full w-16 h-16 cursor-pointer"
                style={{
                  backgroundColor: `#${color.value}`,
                }}
              ></div>
              <p className="text-sm font-semibold mt-2">{color.name}</p>
            </div>
          ))}
        </div>
        <h5 className="text-[#474350] text-3xl font-bold mt-16">
          <span className="text-[#7B7B00]">Product </span>Description.
        </h5>
        <h6 className="text-[#2C2C2C] text-lg font-normal mt-6">
          When it comes to <span className="font-semibold">safety,</span> the
          Finguard is a game-changer. It completely shields the gap on the
          door’s hinge side when open, effectively preventing{" "}
          <span className="font-semibold">finger-trapping accidents.</span>
          <br />
          <br />
          <ul className="list-disc font-medium">
            <li>Material – rigid PVC</li>
            <li>Height – 6’8″ 208 cm (82 inches)</li>
            <li>Thickness – 1.5 mm</li>
            <li>Colour – Beige</li>
          </ul>
          <br />
          Introducing <span className="font-semibold">Finguard, </span>a door
          jamb protector designed to prevent{" "}
          <span className="font-semibold">finger-trapping accidents.</span> It
          covers the gap on the push side of doors when open, suitable for
          various door types like wood, metal, and{" "}
          <span className="font-semibold">UPVC,</span> including{" "}
          <span className="font-semibold">swing pivots. </span>Finguard blends
          seamlessly with your décor in a range of colors, ensuring both safety
          and aesthetics. These childproofing solutions boast easy installation,
          durability, and versatility, meeting stringent quality standards. The
          package includes a{" "}
          <span className="font-semibold">full-fitting kit</span> and a{" "}
          <span className="font-semibold">self-adhesive strip </span>
          for effortless installation, recommended for{" "}
          <span className="font-semibold">interior doors.</span>
          <br />
          <br />
          <span className="font-semibold">SKU: </span> N/A <br />
          <span className="font-semibold">Category: </span>Finguard India
          <br />
          <br />
          <span className="text-3xl text-[#474350] font-bold ">Benefits.</span>
          <br />
          <br />
          Cover entire gap of the{" "}
          <span className="font-semibold">hinge side, top to bottom,</span>{" "}
          where usually fingers get trapped.
          <br />
          <br />
          <span className="text-3xl text-[#474350] font-bold ">
            <span className="text-[#7B7B00]">Additional </span>Information.
          </span>
          <br />
          <br />
          {cardDescription.map((desc, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-5 py-3 w-full rounded-xl mb-4"
              style={{
                border: "0.839px solid #2C2C2C",
              }}
            >
              <p className="font-medium">{desc.title}</p>&nbsp;
              <span className="text-[#595959] font-medium">
                {desc.description}
              </span>
            </div>
          ))}
        </h6>
        <h5 className="text-[#474350] text-3xl font-bold mt-16">
          Reviews of <span className="text-[#7B7B00]">Finguard </span>
        </h5>
        <div className="mt-10">
          {reviews.map((index) => (
            <div
              key={index}
              className="bg-white h-28 shadow-inner w-full rounded-xl mb-4"
            ></div>
          ))}
        </div>
        <button
          className="w-[100%] py-3 rounded-full bg-[#FECDAA] mt-8"
          style={{
            boxShadow: "0px 4px 23.6px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Add to Cart
        </button>
        <button
          className="w-[100%] py-3 rounded-full bg-[#FDB582] mt-4"
          style={{
            boxShadow: "0px 4px 23.6px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Order Finguard Now
        </button>
      </div>
    </div>
  );
};

export default BuyProduct;
