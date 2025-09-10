import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-10">
        <div>
          <div className="flex items-center mb-3">
            <div className="bg-green-600 rounded-lg p-2 mr-3" aria-hidden="true">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.32 15.91C7.21 17.27 5 14.91 5 11.9V6.87c0-.24.2-.44.44-.44h4.41c.38 0 .65.39.51.75a6.09 6.09 0 01-3.33 3.57c.17.44.41.86.73 1.24.83.99 2.08 1.41 3.15 2.12s1.53 1.66.8 2.7a5.13 5.13 0 01-1.44.88z" fill="#fff" />
              </svg>
            </div>
            <h4 className="text-green-400 font-bold text-lg">Clean City</h4>
          </div>
          <p className="mb-3 text-sm max-w-xs">
            Making our cities cleaner and more sustainable through community engagement and civic responsibility.
          </p>
          <p className="text-xs text-gray-500">&copy; 2025 Clean City Initiative. All rights reserved.</p>
        </div>

        <nav aria-label="Footer Quick Links" className="flex flex-col gap-2">
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <Link to="/report" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Report Issue
          </Link>
          <Link to="/dashboard" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Issue Dashboard
          </Link>
          <Link to="/volunteer" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Volunteer
          </Link>
          <Link to="/blog" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Blog
          </Link>
        </nav>

        <nav aria-label="Footer Support Links" className="flex flex-col gap-2">
          <h5 className="font-semibold mb-2">Support</h5>
          <Link to="/contact" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Contact Us
          </Link>
          <Link to="/help" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Help Center
          </Link>
          <Link to="/privacy" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            Terms of Service
          </Link>
        </nav>

        <div>
          <h5 className="font-semibold mb-2">Connect</h5>
          <div className="flex space-x-5 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Email" className="hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
