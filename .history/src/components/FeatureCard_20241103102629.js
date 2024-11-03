import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';

const FeatureCard = ({ item }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        x: 10,
        duration: 0.1,
        yoyo: true,
        repeat: 5,
        ease: "power1.inOut"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div ref={cardRef} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
};

export default FeatureCard;
