import React, { useEffect, useRef } from "react";
import Video from "../../../assets/Videos/Video.mp4";

const SectionOne = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current != undefined && videoRef.current.play();
  }, [videoRef.current]);
  return (
    <div className=" h-[80vh] relative w-full flex flex-col gap-4 items-center justify-center z-10">
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        className="absolute top-0 object-cover left-0 w-full h-full -z-10"
        src={Video}
      ></video>

      <h1 className=" relative z-99 text-6xl uppercase font-bold text-white">
        Adventure Awaits
      </h1>
      <p className="relative z-99 text-white text-3xl">
        What are you waiting for?
      </p>
      <div className="flex gap-3">
        <button className=" w-[11vw] border-black border-solid bg-black  relative z-99 text-white text-xl uppercase ">
          Get Started
        </button>
        <button className=" w-[11vw] border-white border-solid bg-white  relative z-99 text-black text-xl uppercase">
          Watch Tralier
        </button>
      </div>
    </div>
  );
};

export default SectionOne;
