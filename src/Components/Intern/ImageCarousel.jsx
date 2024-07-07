import React from "react";

const images = [
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x600?text=Image+2",
  "https://via.placeholder.com/400x800?text=Image+3",
  "https://via.placeholder.com/1200x800?text=Image+4",
  "https://via.placeholder.com/600x600?text=Image+5",
  "https://via.placeholder.com/800x1200?text=Image+6",
  "https://via.placeholder.com/800x400?text=Image+7",
  "https://via.placeholder.com/800x800?text=Image+8",
  "https://via.placeholder.com/1200x600?text=Image+9",
  "https://via.placeholder.com/600x1200?text=Image+10",
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto p-4 mt-8">
      <h1 className="text-center text-3xl lg:text-4xl font-bold mb-6">
        Moments Corner
      </h1>
      <div className="grid grid-cols-3 grid-row-4 md:grid-cols-6  md:grid-rows-2 gap-1">
        {/* keep the height = 1/2 of width for span-2 and h=w for span-1 */}
        <div className="h-48 col-span-2 md:col-span-2 row-span-1 bg-red-300">
          box1
        </div>
        <div className="h-48 col-span-1 md:col-span-1 row-span-1 bg-red-300">
          box2
        </div>
        <div className="h-48 col-span-1 md:col-span-2 row-span-1 bg-red-300">
          box3
        </div>
        <div className="h-48 col-span-2 md:col-span-1 row-span-1 bg-red-300">
          box4
        </div>
        <div className="h-48 col-span-2 md:col-span-1 row-span-1 bg-red-300">
          box5
        </div>
        <div className="h-48 col-span-1 md:col-span-2 row-span-1 bg-red-300">
          box6
        </div>
        <div className="h-48 col-span-1 md:col-span-1 row-span-1 bg-red-300">
          box7
        </div>
        <div className="h-48 col-span-2 md:col-span-2 row-span-1 bg-red-300">
          box8
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
