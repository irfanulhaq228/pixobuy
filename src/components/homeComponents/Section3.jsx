import React from "react";
import { Carousel } from "antd";

const Section3 = () => {
  return (
    <div className="bg-gray-200 py-[40px]">
      <p className="text-center text-[30px] sm:text-[40px] font-[700] text-gray-600">
        Our Dedication
      </p>
      <Carousel arrows infinite autoplay>
        <div className="flex justify-center items-center w-full py-[30px]">
          <div className="flex justify-center">
            <p
              className="text-center px-[20px] md:w-[500px] lg:w-[600px] xl:w-[700px] font-[500] text-[15px] sm:text-[17px]"
              style={{ fontFamily: "Montserrat" }}
            >
              We Are Committed To Maintaining The Highest Standards Of Security,
              Privacy, And Authenticity. Our Team Diligently Verifies User
              Profiles And Employs Strict Measures To Ensure A Safe And
              Respectful Environment For All Our Members. We Value Diversity &
              Strive To Create A Space Where Individuals From All Walks Of Life
              Can Connect, Irrespective Of Their Background Or Ethnicity.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full py-[30px]">
          <div className="flex justify-center">
            <p
              className="text-center px-[20px] md:w-[500px] lg:w-[600px] xl:w-[700px] font-[500] text-[15px] sm:text-[17px]"
              style={{ fontFamily: "Montserrat" }}
            >
              We Are Committed To Maintaining The Highest Standards Of Security,
              Privacy, And Authenticity. Our Team Diligently Verifies User
              Profiles And Employs Strict Measures To Ensure A Safe And
              Respectful Environment For All Our Members. We Value Diversity &
              Strive To Create A Space Where Individuals From All Walks Of Life
              Can Connect, Irrespective Of Their Background Or Ethnicity.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full py-[30px]">
          <div className="flex justify-center">
            <p
              className="text-center px-[20px] md:w-[500px] lg:w-[600px] xl:w-[700px] font-[500] text-[15px] sm:text-[17px]"
              style={{ fontFamily: "Montserrat" }}
            >
              We Are Committed To Maintaining The Highest Standards Of Security,
              Privacy, And Authenticity. Our Team Diligently Verifies User
              Profiles And Employs Strict Measures To Ensure A Safe And
              Respectful Environment For All Our Members. We Value Diversity &
              Strive To Create A Space Where Individuals From All Walks Of Life
              Can Connect, Irrespective Of Their Background Or Ethnicity.
            </p>
          </div>
        </div>
      </Carousel>
      <p className="text-center text-[23px] sm:text-[30px] font-[700] text-[--main-color] cursor-pointer hover:underline mt-[25px]">
        Download Now
      </p>
    </div>
  );
};

export default Section3;
