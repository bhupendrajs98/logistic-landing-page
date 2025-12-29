import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Plus & Minus icons
import Logi2 from "../../../public/logi2.webp";

const trackingPoints = [
  {
    title: "Real-Time Shipment Tracking",
    description:
      "Track your shipment live from pickup to delivery. Get accurate movement updates at every stage. Stay informed without needing to contact support."
  },
  {
    title: "Live Location Updates",
    description:
      "View the exact location of your package on the map. Our GPS-enabled system shows the most accurate route. Know exactly where your shipment is at any moment."
  },
  {
    title: "Instant SMS/Email Alerts",
    description:
      "Receive automatic notifications on shipment status. Get alerts for dispatch, transit, delays, and delivery. Never miss an important update about your package."
  },
  {
    title: "Proof of Delivery (POD)",
    description:
      "Access digital proof immediately after delivery. Includes recipient details, signature, and timestamp. Helps maintain clear and transparent records."
  },
  {
    title: "24/7 Tracking Support",
    description:
      "Our support team is available around the clock. Get help with tracking issues anytime you need. We ensure complete assistance until delivery is done."
  }
];

function Points() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:flex md:gap-12 items-start">
      
      {/* Left Side - Accordion */}
      <div className="md:w-1/2 space-y-4">
        {trackingPoints.map((point, index) => (
          <div key={index} className="border rounded-lg shadow-sm p-4">
            
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {index + 1}. {point.title}
              </h2>
              <span className="text-blue-600">
                {activeIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
              </span>
            </div>

            {activeIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">{point.description}</p>
            )}

          </div>
        ))}
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img src={Logi2} alt="Tracking" className="w-full object-contain rounded-lg shadow-lg" />
      </div>

    </div>
  );
}

export default Points;
