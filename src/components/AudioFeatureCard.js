import React from "react";
import Group8 from "../assets/group8.png"

const AudioFeatureCard = () => {
  return (
    <div className="w-[1024px] h-[540px] mb-11 bg-[#E6E8FF] font-inter rounded-[27px] py-32 px-16 flex justify-between items-center">
      <div className="max-w-md">
        <h3 className="text-[45px] font-medium -tracking-3 text-black mb-4 w-full">
          Voice-Only: A Bridge for All
        </h3>
        <p className="text-[16px] text-gray-600 -tracking-3 mb-8">
          Voice-only communication offers a unique advantage for individuals
          with visual impairments. By eliminating the need for visual cues, it
          creates a more inclusive and accessible experience.
        </p>
        <button className="bg-[#8289FC] w-[223px] h-[62px] text-white py-3 px-6 rounded-full text-lg">
          Read Blog
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-64 h-12 flex flex-col gap-4 items-center justify-center ">
        <img src={Group8} className="" alt="" />
        <img src={Group8} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AudioFeatureCard;
