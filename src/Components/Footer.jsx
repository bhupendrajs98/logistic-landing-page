import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shree Sawariya Logistic</h3>
            <p className="text-gray-400">
              Your reliable logistics partner providing fast, secure, and efficient transportation solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-500">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-twitter-square text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2025 Shree Sawariya Logistic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
