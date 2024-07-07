import React from "react";
import CBSlogo from "../../Assets/CBS-logo-black.png";

export default function AboutSection() {
  return (
    <div className="relative h-min bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex justify-center">
            <img
              src={CBSlogo}
              alt="About Image"
              className="w-auto max-w-[140px] h-auto md:max-w-[300px] sm:max-w-[200px]"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold font-mont mb-4">
              IUT Career and Business Society
            </h2>
            <p className="text-gray-700 leading-relaxed ">
              IUT CBS aims to prepare the students for their professional lives
              by engaging in various career and business related activities. It
              creates a platform for the students to develop communication
              skills as well as their professional attitude. This is
              accomplished through grooming sessions and seminars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
