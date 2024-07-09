import React from "react";

export default function DetailsAndVideo() {
  return (
    <div className="bg-white flex flex-col lg:flex-row items-center justify-between p-10 lg:px-20">
      <div className="text-left lg:max-w-lg  mb-8 lg:mb-0 lg:mr-8">
        <h2 className="text-2xl lg:text-3xl text-[#800000] font-extrabold mb-4">
          <span className="text-white bg-[#800000]">INTERN</span> An Intra-IUT
          Novice Business Case Competition
        </h2>
        <p className="text-lg mb-6">
          IUT Career and Business Society (IUT CBS) proudly presents the sixth
          edition of the highly anticipated Intra-University Business Case
          Competition, "INTERN 2024." This exclusive event for Batch '22 offers
          an exceptional platform for freshers to delve into the realm of
          real-time business analytics.
        </p>
        <a
          href="#"
          className="inline-block bg-[#800000] text-white py-3 px-6 rounded hover:bg-red-900 transition"
        >
          Visit INTERN 2024
        </a>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute aspect-video top-0 left-0 w-full h-full rounded shadow-lg"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src="https://youtube.com/embed/QOuY2VTlUiQ?autoplay=0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
