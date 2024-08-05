"use client";
import React from "react";
import FinguardLogo from "../../public/Global/Header/headerLogo.webp";
import Image from "next/image";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

const socialMediaIcons = [
  { component: FaTwitter },
  { component: FaFacebook },
  { component: FaYoutube },
  { component: FaGoogle },
];

const footerSections = [
  {
    title: "Get Started",
    links: [
      {
        title: "About",
        url: "/about/",
      },
      {
        title: "Query",
        url: "/contact/",
      },
      {
        title: "Products",
        url: "/product/finguard-hs-universal-180-degree/",
      },
    ],
  },
  {
    title: "Useful",
    links: [
      {
        title: "Privacy Policy",
        url: "/privacy-policy/",
      },
      {
        title: "Terms & Conditions",
        url: "/terms-conditions/",
      },
      {
        title: "Refund & Shipping",
        url: "/return-refund-and-shipping/",
      },
    ],
  },
  {
    title: "Get In Touch",
    links: [
      {
        title: "customercare@finguardindia.com",
        url: "mailto:customercare@finguardindia.com",
      },
    ],
  },
];

function Footer() {
  return (
    <Zoom>
      <div className="flex mt-0 md:mt-24 mb-10 flex-col items-center justify-center">
        <Image
          src={FinguardLogo}
          alt="Finguard Logo"
          className="w-[50%] md:w-[10%] h-auto"
        />
        <h4 className="text-[#3A3A3A] text-[16px] w-[85%] md:w-[60%] py-6 text-center">
          Finguard India is a leading manufacturer of child safety products. Our
          products are premium and mostly used in schools, preschools, Pharma
          companies. Kindly visit our website for more information.
        </h4>
        <div className="flex gap-4">
          {socialMediaIcons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <div key={index} className="p-[6px] rounded-lg bg-[#E0E0E0]">
                <IconComponent
                  className="text-[27px]"
                  style={{ color: "#334F7D" }}
                />
              </div>
            );
          })}
        </div>
        <div className="w-[85%] md:w-[70%] flex flex-wrap justify-center items-center md:justify-between text-center py-6">
          {footerSections.map((section, index) => (
            <div
              key={index}
              className={`${
                section.title === "Get In Touch" ? "w-[100%]" : "w-[50%]"
              } md:w-[33%]`}
            >
              <h2 className="text-[#232323] font-semibold text-[16px] py-4">
                {section.title}
              </h2>
              {section.links.map((link, linkIndex) => (
                <h3
                  key={linkIndex}
                  className="text-[#3A3A3A] font-[400] py-4 text-[16px]"
                >
                  <a href={link.url}>{link.title}</a>
                </h3>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Zoom>
  );
}

export default Footer;
