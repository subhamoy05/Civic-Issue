import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
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
        <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          <Link to="/report" className="hover:text-green-600 transition-colors">Report</Link>
          <Link to="/admin" className="hover:text-green-600 transition-colors">Admin</Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-7 h-7 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-2 font-semibold text-gray-700 bg-white shadow">
          <Link to="/" className="hover:text-green-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/report" className="hover:text-green-600 transition-colors" onClick={() => setMenuOpen(false)}>Report</Link>
          <Link to="/admin" className="hover:text-green-600 transition-colors" onClick={() => setMenuOpen(false)}>Admin</Link>
        </div>
      )}
    </nav>
  );
}
