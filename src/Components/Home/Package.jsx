import React from "react";
import Logi2 from "../../../public/logi2.webp";

function Package() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">

      {/* Left Content */}
      <div className="md:w-1/2 w-full space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Are You Interested in Package Forwarding?
        </h1>

        <p className="text-gray-600">
          There are some additional terms and conditions guiding package forwarding:
        </p>

        <p className="text-gray-700 font-medium">
          1. Do not use this service for fraudulent activities.
        </p>

        <p className="text-gray-600 font-medium">
          2. Send a copy of your identification (passport, national ID, etc.) to 
          <span className="font-semibold text-blue-600"> customerservice@lorem.com</span>.
          If no ID is provided, an additional 20% fee of your commodity’s worth will be charged. 
          This is to protect our company against unauthorized transactions.
        </p>

        <p className="text-gray-600 font-medium">
         3. If you choose the “pay later” option at checkout, for Naira transactions, 
          please make it payable to the provided company account.
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={Logi2}
          alt="Package Forwarding"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

    </div>
  );
}

export default Package;
