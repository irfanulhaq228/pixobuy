import React from "react";

import logo from "../../assets/imgs/logo-4.png";

const Navbar = () => {
  return (
    <div className="linear-color h-[60px] sm:h-[70px] border-b fixed w-full flex justify-center px-[10px] sm:px-[20px] md:px-[40px]">
      <div className="flex items-center justify-between flex-1 max-w-[1400px]">
        <div className="flex items-center gap-[10px] sm:gap-[20px]">
          <img
            src={logo}
            alt=""
            className="h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] rounded-full"
          />
          <p className="text-white font-[600] text-[20px] sm:text-[25px]">
            Pixobuy
          </p>
        </div>
        <button className="colored-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
