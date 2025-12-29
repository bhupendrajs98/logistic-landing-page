import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo Section */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-2xl font-bold text-blue-600">SSL</h1>
          <p className="text-sm tracking-wide text-gray-600 -mt-1">Logistic</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
          <Link to="/services" className="hover:text-blue-600 cursor-pointer">Services</Link>
          <Link to="/tracking" className="hover:text-blue-600 cursor-pointer">Tracking</Link>
          <Link to="/pricing" className="hover:text-blue-600 cursor-pointer">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer">Contact</Link>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/signin">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-blue-600"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">

            <Link to="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
            <Link to="/services" className="hover:text-blue-600 cursor-pointer">Services</Link>
            <Link to="/tracking" className="hover:text-blue-600 cursor-pointer">Tracking</Link>
            <Link to="/pricing" className="hover:text-blue-600 cursor-pointer">Pricing</Link>
            <Link to="/contact" className="hover:text-blue-600 cursor-pointer">Contact</Link>

            <div className="flex flex-col gap-3 mt-4">
              <Link to="/signin">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
