import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "aos/dist/aos.css"; 
import FeatureCard from "../components/FeatureCard";
import Ellipse1 from "../assets/Ellipse 1.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse3 from "../assets/Ellipse 3.png";
import Ellipse4 from "../assets/Ellipse 4.png";
import Ellipse5 from "../assets/Ellipse 5.png";
import AudioFeatureCard from "../components/AudioFeatureCard";
import GridSection from "../components/GridSection";

const Body = () => {
  const featureCardsRef = useRef(null);
  const audioFeatureRef = useRef(null);
  const gridSectionRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate feature cards
    gsap.from(featureCardsRef.current.children, {
      scrollTrigger: {
        trigger: featureCardsRef.current,
        start: "top center+=100",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });

    // Animate audio feature card
    gsap.from(audioFeatureRef.current, {
      scrollTrigger: {
        trigger: audioFeatureRef.current,
        start: "top center+=100",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
    });

    // Animate grid section
    gsap.from(gridSectionRef.current.children, {
      scrollTrigger: {
        trigger: gridSectionRef.current,
        start: "top center+=100",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
    });

    // Text color animation
    gsap.to(descriptionRef.current, {
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top center+=200",
        end: "center center",
        scrub: true,
      },
      color: "var(--transparent-blue)", // Using CSS variable to match logo color
      ease: "power1.inOut",
      duration: 1,
    });
    
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 400,
      delay: 100,
      easing: "ease-in-out",
      reset: false,
    });

    sr.reveal(".reveal", { interval: 200 });

    AOS.init({
      duration: 800, 
      easing: 'ease-in-out',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="mt-20 max-w-screen-lg mx-auto px-4">
      <div>
        {/* Overlapping Images Section */}
        <div
          className="flex justify-center items-center mt-56 relative"
          data-aos="fade-up" 
        >
          <img src={Ellipse1} className="absolute ml-[-7rem]" alt="" />
          <img src={Ellipse2} className="absolute ml-[-2rem]" alt="" />
          <img src={Ellipse3} className="absolute ml-[2rem]" alt="" />
          <img src={Ellipse4} className="absolute ml-[6rem]" alt="" />
          <img src={Ellipse5} className="absolute ml-[10rem]" alt="" />
        </div>

        <div className="flex font-inter flex-col items-center mt-24 space-y-8 reveal">
          {/* Main Heading */}
          <p className="text-[42px] text-customTransparentBlue -tracking-3 font-inter font-semibold text-center md:leading-[106px] md:text-[84px]">
            Voice Only. Pure <br /> Connection.
          </p>

          <p className="text-[13px] text-customGray -tracking-3 text-center leading-tight font-inter font-normal md:text-[29px]">
            Connect with voices, not screens. Experience the <br />
            raw power of voice-only communication.
          </p>
          <button className="reveal w-[120px] h-[37px] text-[10px] -tracking-3t px-4 py-2 font-inter font-medium text-customWhite bg-customTransparentBlue rounded-[36px] hover:bg-customGray md:text-[25px] md:w-[263px] md:h-[72px]">
            Get Started
          </button>
        </div>

        <div className="flex justify-center items-center mt-20 reveal">
          <div className="w-8/12 md:mt-20 mx-auto">
            <p 
              ref={descriptionRef}
              className="text-[17px] md:text-[32px] -tracking-3 text-customGray text-center leading-tight font-inter font-medium transition-colors duration-500"
            >
              Aloud is a unique voice-only chat app designed to foster
              authentic, real-time conversations. Forget the distractions of
              text and video; here, your voice is the star.
            </p>
          </div>
        </div>
      </div>

      <div ref={featureCardsRef}>
        <FeatureCard />
      </div>
      <div ref={featureSectionRef}>
        <FeatureSection />
      </div>

      <div ref={audioFeatureRef}>
        <AudioFeatureCard />
      </div>
      
      <div ref={gridSectionRef}>
        <GridSection />
      </div>
    </main>
  );
};

export default Body;