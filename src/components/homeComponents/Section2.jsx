import React from "react";

import img from "../../assets/imgs/logo-7.png";
import img2 from "../../assets/imgs/download-on-playstore.png";
import img3 from "../../assets/imgs/get-it-to-googleplay.png";
import mobileImg from "../../assets/imgs/sec-2-mobile-imgs.png";

const Section2 = React.forwardRef((props, ref) => {
  return (
    <div className="flex justify-center py-[50px] lg:py-[90px]" ref={ref}>
      <div className="max-w-[1300px] 2xl:max-w-[1400px] w-full flex flex-col xl:flex-row gap-[30px]">
        <div className="w-full xl:ps-[80px] flex justify-center xl:justify-start">
          <img src={mobileImg} className="sm:max-w-[600px] xl:max-w-full" />
        </div>
        <div className="w-full flex flex-col items-center xl:items-end gap-[30px] xl:pe-[80px] justify-center">
          <img src={img} className="max-w-[250px] sm:max-w-[300px]" />
          <p className="text-[40px] font-[700] leading-[50px] text-center xl:text-end max-w-[500px] text-gray-600">
            We'll Help You Find the Best Product
          </p>
          <p className="text-center xl:text-end max-w-[550px] font-[500] text-gray-500">
            Our Mission Is To Provide A Trusted Platform That Facilitates users
            with Geniune products with minimal Cost
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center xl:justify-end gap-[20px]">
            <img
              src={img2}
              className="w-[200px] rounded-lg transition-all duration-300 cursor-pointer hover:scale-[1.03]"
            />
            <img
              src={img3}
              className="w-[200px] rounded-lg transition-all duration-300 cursor-pointer hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section2;
