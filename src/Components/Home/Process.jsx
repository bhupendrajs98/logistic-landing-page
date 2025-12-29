import React from "react";
import { FaSignInAlt, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import Logi5 from "../../../public/logi5.avif";
import Logi4 from "../../../public/logi4.avif";


function Process() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">

      {/* LEFT CONTENT */}
      <div className="md:w-1/2 w-full">

        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          The Process
        </h1>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8">

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-blue-600 text-6xl mb-5">
              <FaSignInAlt />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Sign Up</h3>
            <p className="text-gray-600 leading-relaxed">
              Register and receive your personal USA shipping address where we receive your items securely.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-blue-600 text-6xl mb-5">
              <FaShoppingCart />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Make Your Orders
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Order from any online store and simply use your unique USA address for shipment.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-blue-600 text-6xl mb-5">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Track Shipments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We track and deliver your shipments safely to your destination in West Africa.
            </p>
          </div>

        </div>

        {/* Button */}
        <button className="mt-10 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
          Get Started
        </button>
      </div>

      {/* RIGHT IMAGE */}
<div className="md:w-1/2 w-full flex flex-col gap-6">
        <img
          src={Logi5}
          alt="Process Image"
          className="rounded-2xl shadow-xl object-cover w-full"
        />
         <img
          src={Logi4}
          alt="Process Image"
          className="rounded-2xl shadow-xl object-cover w-full"
        />
      </div>

    </div>
  );
}

export default Process;
