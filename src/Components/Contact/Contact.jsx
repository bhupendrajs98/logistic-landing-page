import React from "react";
import Logo from "../../../public/logo.png";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* 2 Column Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT COLUMN — LOGO + CONTACT DETAILS */}
        <div className="space-y-8">
          
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-64 object-contain drop-shadow-md"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Contact Us
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Have questions? Our team is here to assist you. Reach out using 
              the information below.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>
                📍 <span className="font-medium">Address:</span> 123 Logistics Park, New Delhi, India
              </p>
              <p>
                📞 <span className="font-medium">Phone:</span> +91 98765-43210
              </p>
              <p>
                📧 <span className="font-medium">Email:</span> support@logistics.com
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — ONLY FORM */}
        <form className="space-y-5 bg-white shadow-xl p-8 rounded-2xl border">

          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
