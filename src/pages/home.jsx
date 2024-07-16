import React from "react";

import video from "../assets/video.mp4"
import logo from "../assets/imgs/logo-6.png"

import downArrow from "../assets/svgs/down-arrow.svg"

const Home = () => {
  return (
    <div className="relative">
      <video src={video} autoPlay loop muted playsInline className="h-[500px] w-full object-cover" />
      <div className="bg-[--main-color-blur] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <img src={logo} className="h-[200px] w-[200px]" />
        <p className="text-center text-white text-[40px] font-[700] mt-[-30px]">Pixobuy</p>
        <img src={downArrow} className="w-[50px] bg-white rounded-full p-2 cursor-pointer mt-[100px] animate-bounce-arrow" />
      </div>
    </div>
  );
};

export default Home;
