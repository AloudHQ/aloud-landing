import React from "react";
import Aloud from "../assets/aloud.svg";

export default function Footer() {
  return (
    <footer className="font-inter pt-12 pb-4 text-gray-700">
      <div className="max-w-screen-lg mx-auto px-4 md:px-0">
        <div className="flex justify-between items-start md:items-center mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Aloud} alt="Aloud Logo" className="w-24" />
          </div>

          {/* Links Section */}
          <div className="flex gap-32 text-left">
            <div>
              <h4 className="pb-6 text-[#9B9B9B] text-[22px] font-medium">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#585656] hover:text-black">About us</a></li>
                <li><a href="#" className="text-[#585656] hover:text-black">Careers</a></li>
                <li><a href="#" className="text-[#585656] hover:text-black">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="pb-6 text-[#9B9B9B] text-[22px] font-medium">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#585656] hover:text-black">Blog</a></li>
                <li><a href="#" className="text-[#585656] hover:text-black">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="pb-6 text-[#9B9B9B] text-[22px] font-medium">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#585656] hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="text-[#585656] hover:text-black">Regulations</a></li>
                <li><a href="#" className="text-[#585656] hover:text-black">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Divider hidden on mobile */}
      <hr className="border-gray-300 my-4 w-full hidden md:block" />

      {/* Bottom Footer Section */}
      <div className="max-w-screen-lg mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
          {/* Copyright */}
          <p className="text-[#A4A4A4] mb-4 md:mb-0">© Aloud Inc 2024</p>

          {/* Description */}
          <p className="text-[#A4A4A4] text-[13px] text-left max-w-lg leading-tight">
            Aloud, a technology service provider registered in Nigeria (Company No. 14369984), is dedicated to revolutionizing the way you connect. Our platform empowers you to engage in real-time, voice-only conversations, fostering authentic and immersive experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
