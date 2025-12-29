import React from "react";

function Choose() {
  const sections = [
    {
      title: "Why Choose Us?",
      content:
        "We’re a young, innovative logistics startup committed to making shipping fast, simple, and reliable for everyone."
    },
    {
      title: "Our Mission",
      content:
        "To simplify logistics with technology-driven solutions. To provide hassle-free delivery services for businesses and individuals alike."
    },
    {
      title: "Key Strengths",
      content:
        "Focus on agility, innovation, and customer-first mindset: Fast & Flexible – Quick responses, adaptable solutions. Transparent Tracking – Know your shipment’s status anytime. Friendly Support – Personal touch with every customer. Affordable & Smart – Cost-effective solutions for startups & small businesses."
    },
    {
      title: "Why Trust a Startup Like Us",
      content:
        "Although we are new, we are driven by innovation and the latest technology. Personalized service, not a generic corporate machine. Passionate team dedicated to customer satisfaction."
    },
    {
      title: "How We Work?",
      content:
        "1. Place your shipment request. 2. Pickup & dispatch quickly. 3. Real-time tracking via app or website. 4. Delivery with care & confirmation."
    },
    {
      title: "Call to Action / Engagement",
      content:
        "Be part of our growing community. Experience startup-speed logistics today.",
      isCTA: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      {sections.map((section, index) => (
        <div key={index} className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
          {section.isCTA && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Get Started
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Choose;
