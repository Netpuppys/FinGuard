"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderLogo from "../../public/Global/Header/headerLogo.webp";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const BuyNow = () => {
    window.location.href = "/product/finguard-hs-universal-180-degree/";
  };
  const About = () => {
    window.location.href = "/about/";
  };
  const Testimonials = () => {
    window.location.href = "/testimonials/";
  };
  const Contact = () => {
    window.location.href = "/contact/";
  };
  const Home = () => {
    window.location.href = "/";
  };
  return (
    <Zoom>
      <div className="flex w-full box-border justify-between h-fit px-4 md:px-14 pt-5 md:pt-8 items-center font-[400]">
        <Link className="h-full w-fit" href="/">
          <Image
            className="h-[70px] w-[150px] xl:h-[55px] xl:w-[140px] 2xl:h-[68px] 2xl:w-[175px]"
            src={HeaderLogo}
            alt="Header Logo"
          />
        </Link>
        <div className="hidden md:flex justify-between w-[20rem] 2xl:w-[27.065rem] bg-[#FAFAC6] px-10 2xl:px-14 py-2 2xl:py-4 rounded-full">
          <button onClick={Home}>Home</button>
          <button onClick={About}>About</button>
          <button onClick={Testimonials}>Testimonials</button>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={Contact}
            className="bg-[#474350] px-8 2xl:px-10 py-2 2xl:py-4 rounded-full text-white"
          >
            Contact
          </button>
          <button
            onClick={BuyNow}
            className="bg-[#FECDAA] px-8 2xl:px-10 py-2 2xl:py-4 rounded-full text-black"
          >
            Buy Now
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl bg-[#FECDAA] rounded-full aspect-square p-4"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#FAFAC6] p-4 rounded-md mt-4 space-y-2">
          <button onClick={Home}>Home</button>
          <button onClick={About}>About</button>
          <button onClick={Testimonials}>Testimonials</button>
          <button onClick={Contact}>Contact</button>
          <button onClick={BuyNow}>Buy Now</button>
        </div>
      )}
    </Zoom>
  );
};

export default Header;
