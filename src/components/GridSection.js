import React from "react";

export default function GridSection() {
  return (
    <div className="flex flex-col items-center -mt-28 gap-6 mx-auto px-4 md:px-0 md:w-[1024px]">
      <div className="w-full flex flex-col items-center font-inter mt-2 mb-8 md:flex-row md:mt-16 md:items-start">
        <div className="w-full pl-8 md:w-1/2 pr-8 md:pl-2">
          <h2 className="text-[#7C7C7C] text-[32px] -tracking-3 font-semibold mb-2 text-center md:text-left">
            Coming Soon
          </h2>
          <p className="text-[#9B9B9B] text-[19px] leading-6 -tracking-3 mx-auto text-center w-3/4 md:text-left md:mx-0">
            We’re working on more ways to enhance the post-booking travel
            experience.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 gap-12 mt-8 md:w-[654px] md:gap-6">
          <div className="bg-[#FFD4C7] mx-auto w-[340px] text-left leading-6 rounded-[27px] p-8 h-[430px] flex flex-col justify-between md:p-12 md:w-[514px]">
            <p className="text-[#F6224C] text-[17px] w-10/12 md:text-[18px]">
              Never miss a word. Our real-time transcription feature will
              automatically convert your voice conversations into text, making
              it easier to follow along and reference later.
            </p>
            <h3 className="text-[#FF3D00] whitespace-nowrap text-[24px] font-medium mt-4 md:text-[42px]">
              Real-time Transcription
            </h3>
          </div>

          <div className="bg-[#FFE7A1] mx-auto w-[340px] rounded-[27px] leading-6 p-8 h-[430px] flex flex-col justify-between md:p-12 md:w-[514px]">
            <p className="text-[#FF3D00] text-[17px] w-10/12 md:text-[18px]">
              Engage your audience and gather real-time feedback with our
              interactive voting feature. Cast your vote and see the results
              instantly.
            </p>
            <h3 className="text-[#FF3D00] whitespace-nowrap text-[24px] font-medium mt-4 md:text-[42px]">
              Interactive Voting
            </h3>
          </div>

          <div className="bg-[#B6FFBC] mx-auto w-[340px] rounded-[27px] leading-6 p-8 h-[430px] flex flex-col justify-between md:p-12 md:w-[514px]">
            <p className="text-[#158B1F] text-[17px] w-10/12 md:text-[18px]">
              Have fun and connect with others through a variety of voice-based
              games. Test your knowledge, skills, and creativity in a unique and
              interactive way.
            </p>
            <h3 className="text-[#158B1F] text-[24px] whitespace-nowrap w-full font-medium mt-4 md:text-[42px]">
              Engaging Voice Games
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
