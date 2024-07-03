import React from "react";
import teamBanner from "../../Assets/Team/team-bw.png";

export default function TeamCollageBanner() {
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
          src={teamBanner}
          alt="Slide 2"
        />
      </div>
    </div>
  );
}
