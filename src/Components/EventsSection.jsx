import React from "react";
import internCover from "../Assets/EventCovers/INTERN-cover.png";
import careerExpoCover from "../Assets/EventCovers/CareerExpo-cover.png";
import biznationCover from "../Assets/EventCovers/Biznation-cover.png";
import neotalkCover from "../Assets/EventCovers/NeoTalk-cover.png";

export default function EventsSection() {
  return (
    <div className="bg-pink-600 text-white px-8 py-6">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Flagship Events</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <img
              src={biznationCover}
              alt="Biznation"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">Biznation</h2>
              <p className="text-zinc-700 mb-4">
                An inter-university business competition that brings together
                the brightest minds from various universities, fostering a
                spirit of healthy competition and collaboration.
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                Know more
              </button>
            </div>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <img
              src={careerExpoCover}
              alt="Career Expo"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">Career Expo</h2>
              <p className="text-zinc-700 mb-4">
                An exclusive in-house career fair tailored for the fresh
                graduates of IUT, offering them unique opportunities to network
                with potential employers and explore diverse career paths.
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                Know more
              </button>
            </div>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <img
              src={internCover}
              alt="Intern"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">Intern</h2>
              <p className="text-zinc-700 mb-4">
                An intra-IUT business competition designed specifically for the
                freshmen of IUT, providing them with an exciting platform to
                showcase their entrepreneurial skills and innovative business
                ideas.
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                Know more
              </button>
            </div>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <img
              src={neotalkCover}
              alt="NeoTalk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">NeoTalk</h2>
              <p className="text-zinc-700 mb-4">
                The orientation program organized by IUTCBS for the latest batch
                of students, aimed at welcoming them into the IUT community and
                providing insights about IUTCBS.
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
