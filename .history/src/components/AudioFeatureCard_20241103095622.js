import React from "react";
import Group8 from "../assets/group8.png";

const AudioFeatureCard = () => {
  return (
    <div className="flex justify-center items-center -mt-32 min-h-screen">
      <div className="h-[536px] mb-4 bg-[#E6E8FF] font-inter rounded-[27px] py-8 px-16 flex flex-col justify-between items-center w-[340px] md:w-[1024px] md:h-[540px] md:flex-row">
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-[32px] font-medium -tracking-3 text-black mb-4  mx-auto md:w-full md:whitespace-nowrap md:mx-0 md:text-[45px]">
            Voice-Only: <br/> A Bridge for All
          </h3>
          <p className="text-[16px] text-[#858180] -tracking-3 mb-8">
            Voice-only communication offers a unique advantage for individuals
            with visual impairments. By eliminating the need for visual cues, it
            creates a more inclusive and accessible experience.
          </p>
          <button className="bg-[#8289FC] w-[223px] h-[62px] text-white py-3 px-6 rounded-full text-lg hidden sm:block">
            Read Blog
          </button>
        </div>
        <div className="flex flex-col gap-6 items-center md:gap-4">
  <div className="md:flex md:flex-col md:gap-4">
    {/* Container for the two images with a gap */}
    <div className="md:w-64 md:h-12 flex flex-col gap-4 items-center justify-center">
      <img src={Group8} alt="" />
      <img src={Group8} alt="" />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default AudioFeatureCard;


