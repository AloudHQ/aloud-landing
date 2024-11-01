import React from "react";
import FeatureCard from "../components/FeatureCard";
import Ellipse1 from "../assets/Ellipse 1.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse3 from "../assets/Ellipse 3.png";
import Ellipse4 from "../assets/Ellipse 4.png";
import Ellipse5 from "../assets/Ellipse 5.png";
import AudioFeatureCard from "../components/AudioFeatureCard";
import GridSection from "../components/GridSection";

const Body = () => {
  return (
    <main className="mt-20 max-w-screen-lg mx-auto px-4">
      <div>
        {/* Overlapping Images Section */}
        <div className="flex justify-center items-center mt-56 relative">
          <img src={Ellipse1} className="absolute ml-[-7rem]" alt="" />
          <img src={Ellipse2} className="absolute ml-[-2rem]" alt="" />
          <img src={Ellipse3} className="absolute ml-[2rem]" alt="" />
          <img src={Ellipse4} className="absolute ml-[6rem]" alt="" />
          <img src={Ellipse5} className="absolute ml-[10rem]" alt="" />
        </div>

        <div className="flex font-inter flex-col items-center mt-24 space-y-8">
          {/* Main Heading */}
          <p className="text-[42px] text-customTransparentBlue -tracking-3 font-inter font-semibold text-center leading-tight md:text-[84px] ">
            Voice Only. Pure <br /> Connection.
          </p>

          <p className="text-[13px] text-customGray -tracking-3 text-center leading-tight font-inter font-normal md:text-[29px]">
            Connect with voices, not screens. Experience the <br />
            raw power of voice-only communication.
          </p>

          <button className="w-[120px] h-[37px] text-[10px] -tracking-3t px-4 py-2 font-inter font-medium text-customWhite bg-customTransparentBlue rounded-[36px] hover:bg-customGray md:text-[25px] md:w-[263px] md:h-[72px]">
            Get Started
          </button>
        </div>

        <div className="flex justify-center items-center mt-20">
          <div className="w-8/12 md:mt-20 mx-auto">
            <p className="text-[17px] md:text-[32px] -tracking-3 text-customGray text-center leading-tight font-inter font-medium">
              Aloud is a unique voice-only chat app designed to foster
              authentic, real-time conversations. Forget the distractions of
              text and video; here, your voice is the star.
            </p>
          </div>
        </div>
      </div>

      <FeatureCard />

      <div className="flex flex-col p-4 justify-center items-center md:justify-start md:pl-4 py-12">
  <div className="text-center w-full leading-8 md:text-left">
    <h2 className="text-[32px] font-semibold -tracking-3 text-[#7C7C7C] mb-4 md:whitespace-nowrap">
      Reimagine the way you connect.
    </h2>
    <p className="text-[#9B9B9B] mt-12 mx-auto w-5/6 md:w-[45%] text-[19px] -tracking-3 leading-[26px] font-medium text-center md:text-left">
      Join live, interactive roundtable discussions on a variety of topics. Connect with like-minded individuals from around the world and share your insights.
    </p>
  </div>
</div>



      <AudioFeatureCard />
      <GridSection />
    </main>
  );
};

export default Body;
