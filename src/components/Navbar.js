import { useState } from "react";
import NavList from "./NavList";
import Aloud from "../assets/aloud.svg";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="fixed font-inter w-full px-8 bg-customWhite z-10 top-6 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="mb-2 md:mb-0">
              <img src={Aloud} alt="Aloud Logo" className="w-[67px] md:w-24" />
            </div>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-gray-200 rounded-full md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-customOrangeLight"
              aria-controls="navbar-sticky"
              aria-expanded={isNavOpen}
              onClick={toggleNav}
            >
              <span>menu</span>
            </button>
          </div>

          <div
            className={`font-inter items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${
              isNavOpen
                ? "block opacity-100"
                : "hidden opacity-0 md:block md:opacity-100"
            }`}
            id="navbar-sticky"
          >
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
