"use client";

import React, { useEffect, useRef, useState } from "react";
import RightArrow from "../../public/HomePage/Necessary/arrow.png";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

const videos = [
  "https://i.vimeocdn.com/video/1696746239-bb25f3c523804394b4fd6e072156f485af636d429ad93c84ee6317e7d64ee21e-d.mp4",
  "https://i.vimeocdn.com/video/1696746239-bb25f3c523804394b4fd6e072156f485af636d429ad93c84ee6317e7d64ee21e-d.mp4",
];
const titles = ["Why is it Necessary?", "How to Install"];

const Necessary = () => {
  const divRef = useRef(null);
  const containerRef = useRef(null);
  const [video, setVideo] = useState(videos);
  const [width, setWidth] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const videoRefs = useRef([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current.clientWidth;
      setWidth(divWidth);
    }
  }, []);

  const handleNextClick = () => {
    if (isButtonDisabled) return;

    if (containerRef.current) {
      containerRef.current.scrollBy({ left: width, behavior: "smooth" });
    }

    setVideo((prev) => [
      ...prev,
      "https://i.vimeocdn.com/video/1696746239-bb25f3c523804394b4fd6e072156f485af636d429ad93c84ee6317e7d64ee21e-d.mp4",
    ]);

    // Update the title index
    setIndex((prevIndex) => (prevIndex + 1) % titles.length);

    // Disable the button and set a timeout to enable it again after 750ms
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 750);
  };

  useEffect(() => {
    // Play the first video when the component mounts
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  useEffect(() => {
    // Play the newly added video
    if (videoRefs.current.length > 0) {
      const lastVideoRef = videoRefs.current[videoRefs.current.length - 1];
      if (lastVideoRef) {
        lastVideoRef.play();
      }
    }
  }, [video]);

  return (
    <div>
      <div
        className="w-[50vw] h-[50vh] absolute right-0"
        style={{
          opacity: "0.6",
          background:
            "radial-gradient(50% 50% at 50% 50%, #32F5CA 0%, #FCFFEB 100%)",
        }}
      ></div>

      <div className="flex md:pt-8 flex-col items-center justify-center">
        <h2 className="w-fit ml-10 md:ml-24 mx-auto text-left text-[#474350] text-[25px] xl:text-[42px] 2xl:text-[54px] font-bold">
          <Zoom>{titles[index]}</Zoom>
        </h2>

        <Zoom>
          <div className="md:ml-24 w-fit h-fit flex items-center justify-center overflow-x-hidden">
            <div
              ref={divRef}
              className="md:w-3/4 h-[50vh] md:h-[70vh] my-12 overflow-hidden flex flex-col md:flex-row gap-10 items-center justify-center"
            >
              <div
                ref={containerRef}
                className="w-fit h-full flex overflow-x-hidden md:rounded-3xl"
              >
                {video.map((item, id) => (
                  <video
                    key={id}
                    src={item}
                    className="h-full object-cover"
                    controls
                    ref={(el) => (videoRefs.current[id] = el)}
                  />
                ))}
              </div>

              <button
                disabled={isButtonDisabled}
                className="z-10 w-fit h-fit"
                onClick={handleNextClick}
              >
                <Image className="z-10 h-auto w-auto" src={RightArrow} alt="" />
              </button>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Necessary;
