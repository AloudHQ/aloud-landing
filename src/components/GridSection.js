import React from "react";

export default function GridSection() {
  return (
    <div>
      <div className="md:flex gap-5 font-inter md:items-start mt-16 mb-8">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-[#7C7C7C] text-[32px] font-semibold mb-2">
            Coming Soon
          </h2>
          <p className="text-[#9B9B9B]">
            We’re working on more ways to enhance the post-booking travel
            experience.
          </p>
        </div>

        <div className="md:w-2/3 flex flex-col space-y-6">
          <div className="bg-[#FFD4C7] rounded-[27px] px-12 pt-20 pb-6 w-[554px] h-[430px] flex flex-col justify-between">
            <p className="text-[#F6224C] text-[18px]">
              Never miss a word. Our real-time transcription feature will
              automatically convert your voice conversations into text, making
              it easier to follow along and reference later.
            </p>
            <h3 className="text-[#FC5D5D] text-[42px] font-medium text-lg mt-4">
              Real-time Transcription
            </h3>
          </div>

          <div className="bg-[#FFE7A1] rounded-[27px] px-12 pt-20 pb-6 w-[554px] h-[430px] flex flex-col justify-between ">
            <p className="text-[#FF3D00] text-[18px] mb-4">
              Engage your audience and gather real-time feedback with our
              interactive voting feature. Cast your vote and see the results
              instantly.
            </p>
            <h3 className="text-[#FF3D00] text-[42px] font-medium text-lg mt-4">
              Interactive Voting
            </h3>
          </div>

          <div className="bg-[#B6FFBC] rounded-[27px] px-12 pt-20 pb-6 w-[554px] h-[430px] flex flex-col justify-between ">
            <p className="text-[#158B1F] text-[18px] mb-4">
              Have fun and connect with others through a variety of voice-based
              games. Test your knowledge, skills, and creativity in a unique and
              interactive way.
            </p>
            <h3 className="text-[#158B1F] font-medium text-[42px] mt-4">
              Engaging Voice Games
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
