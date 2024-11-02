import React from "react";
import Aloud from "../assets/aloud.svg";

export default function Footer() {
  return (
    <footer className="font-inter pt-12 pb-4 text-gray-700">
      <div className="max-w-screen-lg mx-auto px-4 md:px-0 text-center">
        <div className="flex flex-col justify-between items-center mb-8 md:flex-row">
          {/* Logo */}
          <div className="flex-shrink-0 mb-16 md:mb-0">
            <img
              src={Aloud}
              alt="Aloud Logo"
              className="w-[122px] mx-auto md:w-24"
            />
          </div>

          <div className="flex flex-col text-left gap-16 md:flex-row md:gap-32 md:mb-12">
            <div>
              <h4 className="pb-6 text-[#9B9B9B] text-[22px] font-semibold">
                Company
              </h4>
              <ul className="space-y-2 font-semibold">
                <li>
                  <a href="#" className="text-[#585656] hover:text-black">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#585656] hover:text-black">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#585656] hover:text-black">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="pb-6 text-[#9B9B9B] text-[22px] font-semibold">
                Resources
              </h4>
              <ul className="space-y-2 font-semibold">
                <li>
                  <a href="#" className="text-[#585656] hover:text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#585656] hover:text-black">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="pb-6 text-[#9B9B9B] text-[22px] font-semibold">
                Legal
              </h4>
              <ul className="space-y-2 font-semibold">
                <li>
                  <a href="#" className="text-[#585656] hover:text-black">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#585656] hover:text-black">
                    Regulations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#585656] hover:text-black">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-12 w-full  md:block" />

      <div className="flex flex-col max-w-screen-lg mb-4 mx-auto px-4 md:px-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-sm space-y-4 md:space-y-0">
          <p className="text-[#A4A4A4]">© Aloud Inc 2024</p>

          <p className="text-[#A4A4A4] text-[13px] max-w-lg leading-tight md:text-left">
            Aloud, a technology service provider registered in Nigeria (Company
            No. 14369984), is dedicated to revolutionizing the way you connect.
            Our platform empowers you to engage in real-time, voice-only
            conversations, fostering authentic and immersive experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
