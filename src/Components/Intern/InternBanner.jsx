import React from "react";
import teamBanner from "../../Assets/EventBanners/intern-banner.webp";

export default function InternBanner() {
  return (
    <div className="relative h-min">
      {/* banner container */}
      <div
        className={`relative flex items-center justify-center transition-opacity duration-1000
        }`}
      >
        {/*Banner  */}

        <img
          className="w-screen h-min object-cover"
          // style={{ filter: "sepia(1) hue-rotate(200deg) saturate(2)" }}
          src={teamBanner}
          alt="Slide 2"
        />
      </div>
    </div>
  );
}
