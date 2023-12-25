import React from "react";
import Header from "../Header";
import { Dropdown, DropdownItem } from "flowbite-react";
import PrimeButton from "../Buttons/PrimeButton";
import { IoIosArrowDown } from "react-icons/io";

const Homehero = () => {
  return (
    <section className="hero">
      {/* <Header /> */}
      <div className="  hero-content relative items-center flex flex-col ">
        <img
          className="absolute top-[-15px] left-[-38px] md:left-[254px]"
          alt="Vector"
          src="./Images/vector.svg"
        />
        <h1 className="  md:w-[637px] mb-10  [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[38.5px] md:text-[58px] tracking-[0] leading-[67px] ">
          No matter where you’re going to, we’ll take you there
        </h1>

        <div className="md:w-[720px]   h-[250px] md:h-[70px]  md:ml-[65px] flex p-2 justify-around md:items-center flex-col md:flex-row bg-[#f3f3f399] rounded-[5.22px] backdrop-blur-[-35.52px] backdrop-brightness-[50%] ">
          <p className="px-5 pt-5 md:p-1">Where To?</p>
          {/* large screen */}
          <div className="hide md:h-[33px] md:w-[2px] md:border-round md:bg-white mx-[10px]" />
          {/* mobile */}
          <hr className="md:hidden w-full border-t-2 border-gray-300 my-4" />

          <div className="hero-dropdown relative px-5 md:p-1 ">
            <p>Travel Type</p>

            <IoIosArrowDown
              size={20}
              className="absolute top-0 md:top-1 left-[320px] md:left-[70px] "
            />
          </div>
          {/* large screen */}
          <div className="hide md:h-[33px] md:w-[2px] md:border-round md:bg-white mx-[10px]" />
          {/* mobile devices line  */}
          <hr className="md:hidden w-full border-t-2 border-gray-300 my-2 " />

          <div className="hero-dropdown relative px-5 pb-5 md:p-1">
            <p>Travel Duration</p>
            <IoIosArrowDown
              size={20}
              className="absolute top-0 md:top-1 left-[320px] md:left-[95px]"
            />
          </div>

          <PrimeButton text="Submit" />
        </div>
      </div>
    </section>
  );
};

export default Homehero;
