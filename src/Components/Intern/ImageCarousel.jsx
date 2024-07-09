import React from "react";
import pic1 from "../../Assets/Intern/1.jpg";
import pic2 from "../../Assets/Intern/2.jpg";
import pic3 from "../../Assets/Intern/3.jpg";
import pic4 from "../../Assets/Intern/4.jpg";
import pic5 from "../../Assets/Intern/5.jpg";
import pic6 from "../../Assets/Intern/6.jpg";
import pic7 from "../../Assets/Intern/7.jpg";
import pic8 from "../../Assets/Intern/8.jpg";

const ImageGallery = () => {
  return (
    <div className="bg-[#800000]">
      <div className="container mx-auto px-4 py-10 my-8">
        <h1 className="text-white text-center text-3xl lg:text-4xl font-bold mb-6">
          Moments Corner
        </h1>
        <div className="h-100 grid grid-cols-3 grid-row-4 md:grid-cols-6  md:grid-rows-2 gap-1">
          {/* keep the height = 1/2 of width for span-2 and h=w for span-1 */}
          <div className="aspect-[2/1] col-span-2 md:col-span-2 row-span-1 bg-red-300">
            <img src={pic1} className="aspect-[2/1] object-cover"></img>
          </div>
          <div className="aspect-square col-span-1 md:col-span-1 row-span-1 bg-red-500">
            <img src={pic2} className="aspect-square object-cover"></img>
          </div>
          <div className="aspect-square md:aspect-[2/1] col-span-1 md:col-span-2 row-span-1 bg-red-800">
            <img
              src={pic3}
              className="aspect-square md:aspect-[2/1] object-cover"
            ></img>
          </div>
          <div className="aspect-[2/1] md:aspect-square col-span-2 md:col-span-1 row-span-1 bg-red-200">
            <img
              src={pic4}
              className="aspect-[2/1] md:aspect-square object-cover"
            ></img>
          </div>
          <div className="aspect-[2/1] md:aspect-square col-span-2 md:col-span-1 row-span-1 bg-red-500">
            <img
              src={pic5}
              className="aspect-[2/1] md:aspect-square object-cover"
            ></img>
          </div>
          <div className="aspect-square md:aspect-[2/1] col-span-1 md:col-span-2 row-span-1 bg-red-800">
            <img
              src={pic6}
              className="aspect-square md:aspect-[2/1] object-cover"
            ></img>
          </div>
          <div className="aspect-square col-span-1 md:col-span-1 row-span-1 bg-red-600">
            <img src={pic7} className="aspect-square object-cover"></img>
          </div>
          <div className="aspect-[2/1] col-span-2 md:col-span-2 row-span-1 bg-red-300">
            <img src={pic8} className="aspect-[2/1] object-cover"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
