import React from "react";
import img from "../../assets/imgs/logo-6.png";
import { Facebook, InstagramIcon, MailCheckIcon } from "lucide-react";

const Footer = () => {
  const handleEmailClick = (email) => {
    const emailUrl = `mailto:${email}`;
    window.location.href = emailUrl;
  };
  return (
    <div className="bg-[--main-color] w-full flex flex-col md:flex-row items-center justify-center md:justify-evenly pt-[25px] pb-[50px] px-[15px]">
      <div className="">
        <img src={img} className="w-[200px]" />
        <p className="text-center text-white text-[30px] sm:text-[50px] font-[700] sm:font-[800]">
          Pixobuy
        </p>
      </div>
      <div className="mt-[50px] md:mt-0">
        <div
          className="text-white font-[500] flex items-center gap-4 cursor-pointer w-[215px]"
          onClick={() => handleEmailClick("pixobuy@gmail.com")}
        >
          <MailCheckIcon className="text-white text-[25px]" />
          <span>pixobuy@gmail.com</span>
        </div>
        <a
          className="text-white font-[500] flex items-center gap-4 cursor-pointer mt-[15px] w-[220px]"
          href="https://www.instagram.com/pixo.buy?igsh=MWdxdTczMTZlNWlwNg=="
          target="__blank"
        >
          <InstagramIcon className="text-white text-[25px]" />
          <span>pixo.buy</span>
        </a>
        <a
          className="text-white font-[500] flex items-center gap-4 cursor-pointer mt-[15px] w-[220px]"
          href="https://www.facebook.com/profile.php?id=61562388000429&mibextid=ZbWKwL"
          target="__blank"
        >
          <Facebook className="text-white text-[25px]" />
          <span>pixo Buy</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
