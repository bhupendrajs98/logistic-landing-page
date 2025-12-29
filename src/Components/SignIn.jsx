import React from "react";
import Logo from "../../public/logo.png";

function SignIn() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* 2 Column Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - LOGO */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="Logo"
            className="w-72 md:w-80 object-contain drop-shadow-lg"
          />
        </div>

        {/* RIGHT SIDE - SIGN IN FORM */}
        <div className="bg-white shadow-xl p-10 rounded-2xl border w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Sign In
          </h1>

          <form className="space-y-6">

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
                placeholder="Enter your password"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign In
            </button>

            {/* Extra Links */}
            <p className="text-sm text-gray-500 text-center mt-3">
              Don’t have an account?{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Sign Up
              </span>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}

export default SignIn;
