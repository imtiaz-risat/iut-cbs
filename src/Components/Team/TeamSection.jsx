import React from "react";
import ECPanel2024 from "./ECPanel2024";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function TeamSection() {
  return (
    <div className="bg-gray-100 py-8">
      {/* EXECUTIVE PANEL 2024 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 justify-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-8 bg-black">
          Executive Panel <span className="text-red-900">2024</span>
        </h1>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {ECPanel2024.map((member, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mt-4"
              />
              <div className="p-4 text-center flex flex-col">
                <h2 className="font-bold text-xl mb-2">{member.name}</h2>
                <p className="text-zinc-700 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SUB-EXECUTIVES 2024 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-8 bg-black">
          Sub-Executives 2024 <span className="text-red-900">2024</span>
        </h1>

        <div className="text-center text-xl"> Will be added...</div>
        {/* <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {ECPanel2024.map((member, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mt-4"
              />
              <div className="p-4 text-center flex flex-col">
                <h2 className="font-bold text-xl mb-2">{member.name}</h2>
                <p className="text-zinc-700 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
