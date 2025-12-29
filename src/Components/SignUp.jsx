import React from "react";
import Logo from "../../public/logo.png";

function SignUp() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* 2 Column Layout */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - LOGO + DESCRIPTION */}
        <div className="space-y-6 text-center md:text-left">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Logo}
              alt="Logo"
              className="w-72 md:w-80 object-contain drop-shadow-lg"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Create your SSL Logistics account to manage shipments effortlessly.
            Fast, secure, and trusted logistics service at your fingertips.
          </p>
        </div>

        {/* RIGHT SIDE - SIGN UP FORM */}
        <div className="bg-white shadow-xl p-10 rounded-2xl border w-full max-w-md mx-auto">

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Create Account
          </h1>

          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Create a password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Re-enter your password"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign Up
            </button>

            {/* Extra Links */}
            <p className="text-sm text-gray-500 text-center mt-3">
              Already have an account?{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Sign In
              </span>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
