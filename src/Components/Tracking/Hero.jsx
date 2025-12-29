import React from "react";
import Logo from "../../../public/logi7.jpg";

function Hero() {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Logo}
            alt="Logistics"
            className="w-[80%] md:w-[90%] object-contain drop-shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Tracking Services
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Track shipments in real time with instant updates at every stage.
            Our smart tracking system ensures full visibility from pickup to
            delivery. Stay informed, stay in control..
          </p>

          <button className="px-7 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
