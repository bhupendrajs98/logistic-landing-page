import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "₹499",
    features: [
      "Local deliveries within city",
      "1-2 day delivery time",
      "Basic tracking available",
    ],
  },
  {
    title: "Standard",
    price: "₹999",
    features: [
      "Pan-city deliveries",
      "Same-day delivery options",
      "Real-time tracking",
      "Customer support 24/7",
    ],
  },
  {
    title: "Premium",
    price: "₹1999",
    features: [
      "Nationwide deliveries",
      "Express delivery in 24 hrs",
      "Full tracking with notifications",
      "Dedicated support manager",
      "Insurance for packages",
    ],
  },
];

function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Our Pricing Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-between hover:scale-105 transform transition"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h2>
            <p className="text-3xl font-extrabold text-blue-600 mb-6">{plan.price}</p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600 flex items-center">
                  <span className="mr-2 text-blue-600 font-bold">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
