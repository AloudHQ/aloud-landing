import { useState, useEffect } from "react";
import gsap from "gsap";
import NavList from "./NavList";
import Aloud from "../assets/aloud.svg";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Animate navbar on mount
    gsap.from("nav", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Animate menu items
    gsap.from(".nav-item", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5
    });
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="fixed font-inter w-full px-8 bg-customWhite z-10 top-0 start-0">
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
