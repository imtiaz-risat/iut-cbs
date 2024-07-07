import React from "react";
import ECPanel2024 from "./ECPanel2024";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";

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
                className="w-32 h-32 object-cover rounded-full border-[3.25px] border-red-900 mt-4"
              />
              <div className="p-4 text-center flex flex-col">
                <h2 className="font-bold text-xl mb-2">{member.name}</h2>
                <p className="text-zinc-700 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-light-blue-400"
                  >
                    {/* <FaFacebook size={24} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {/* <FaLinkedin size={24} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
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
          Sub-Executives <span className="text-red-900">2024</span>
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
