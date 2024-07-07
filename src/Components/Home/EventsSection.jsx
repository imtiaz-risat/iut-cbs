import React from "react";
import internCover from "../../Assets/EventCovers/INTERN-cover.png";
import careerExpoCover from "../../Assets/EventCovers/CareerExpo-cover.png";
import biznationCover from "../../Assets/EventCovers/Biznation-cover.png";
import neotalkCover from "../../Assets/EventCovers/NeoTalk-cover.png";

const events = [
  {
    id: 1,
    title: "Biznation",
    description:
      "An inter-university business competition that brings together the brightest minds from various universities, fostering a spirit of healthy competition and collaboration.",
    image: biznationCover,
  },
  {
    id: 2,
    title: "Career Expo",
    description:
      "An exclusive in-house career fair tailored for the fresh graduates of IUT, offering them unique opportunities to network with potential employers and explore diverse career paths.",
    image: careerExpoCover,
  },
  {
    id: 3,
    title: "Intern",
    description:
      "An intra-IUT business competition designed specifically for the freshmen of IUT, providing them with an exciting platform to showcase their entrepreneurial skills and innovative business ideas.",
    image: internCover,
  },
  {
    id: 4,
    title: "NeoTalk",
    description:
      "The orientation program organized by IUTCBS for the latest batch of students, aimed at welcoming them into the IUT community and providing insights about IUTCBS.",
    image: neotalkCover,
  },
];

export default function EventsSection() {
  return (
    <div className="bg-pink-600 text-white px-8 py-6">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Flagship Events</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event) => (
            <div className="bg-white max-w-72 text-black rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="font-bold text-xl mb-2">{event.title}</h2>
                <p className="text-zinc-700 mb-4 flex-grow">
                  {event.description}
                </p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 mt-auto">
                  Know more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
