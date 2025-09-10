import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4">
          <svg
            width="36"
            height="36"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-green-600"
          >
            <circle cx="32" cy="32" r="30" stroke="#22C55E" strokeWidth="4" />
            <path
              d="M20 36L28 44L44 28"
              stroke="#22C55E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 12C25 18 18 26 18 34"
              stroke="#22C55E"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-2xl font-extrabold text-green-700 select-none">
            Civic-Issue
          </span>
        </Link>
        <div className="space-x-8 hidden md:flex font-semibold text-gray-700">
          <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          <Link to="/report" className="hover:text-green-600 transition-colors">Report</Link>
          <Link to="/admin" className="hover:text-green-600 transition-colors">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
