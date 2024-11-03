import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.3'
    );
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8">
      <h1 
        ref={headingRef}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
      >
        Voice Only. Pure Connection.
      </h1>
      <p 
        ref={textRef}
        className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8"
      >
        Connect with voices, not screens. Experience the raw power of voice-only communication.
      </p>
      <button 
        ref={buttonRef}
        className="bg-customPurpleLight text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-customPurpleDark transition-all duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
