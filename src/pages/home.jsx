import React, { useState } from "react";
import video from "../assets/video.mp4";
import logo from "../assets/imgs/logo-6.png";
import downArrow from "../assets/svgs/down-arrow.svg";

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative">
      {!isVideoLoaded && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black">
          <p className="text-white text-[40px] font-[700]">Loading...</p>
        </div>
      )}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="h-[500px] w-full object-cover"
        onLoadedData={() => setIsVideoLoaded(true)}
      />
      {isVideoLoaded && (
        <div className="bg-[--main-color-blur] absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <img src={logo} className="h-[200px] w-[200px]" />
          <p className="text-center text-white text-[40px] font-[700] mt-[-30px]">Pixobuy</p>
          <img src={downArrow} className="w-[50px] bg-white rounded-full p-2 cursor-pointer mt-[100px] animate-bounce-arrow" />
        </div>
      )}
    </div>
  );
};

export default Home;
