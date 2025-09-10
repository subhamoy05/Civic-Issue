import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 py-20 px-6 text-center text-white">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Ready to Make a Difference?</h2>
      <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
        Join thousands of citizens working together to create cleaner, more sustainable cities.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
        <Link
          to="/dashboard"
          className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl shadow hover:bg-green-100 focus:outline-none focus:ring-4 focus:ring-white transition"
          aria-label="View Live Dashboard"
        >
          View Live Dashboard →
        </Link>
        <Link
          to="/volunteer"
          className="border-2 border-white font-semibold px-8 py-4 rounded-xl shadow hover:bg-white hover:text-green-700 focus:outline-none focus:ring-4 focus:ring-white transition flex items-center justify-center gap-2"
          aria-label="Start Volunteering"
        >
          Start Volunteering <FaUserFriends />
        </Link>
      </div>
    </section>
  );
}
