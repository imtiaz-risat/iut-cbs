import React, { useEffect, useState } from "react";
import cover1 from "../Assets/HeroCovers/1.jpg";
import cover2 from "../Assets/HeroCovers/2.jpg";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-min">
      {/* slider container */}
      <div
        className={`relative flex items-center justify-center transition-opacity duration-1000
        }`}
      >
        <img
          className="w-screen h-min object-cover"
          src={cover2}
          alt="Slide 2"
        />

        {/* image slides */}
        <div
          className={`absolute flex items-center justify-center transition-opacity duration-1000 ${
            currentSlide === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            className="w-screen h-min object-cover"
            src={cover1}
            alt="Slide 1"
          />
        </div>
        <div
          className={`absolute flex items-center justify-center transition-opacity duration-1000 ${
            currentSlide === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            className="w-screen h-min object-cover"
            src={cover2}
            alt="Slide 2"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
