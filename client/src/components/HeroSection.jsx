import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523978591478-c753949ff840?auto=format&fit=crop&w=1600&q=80')",
      }}
      aria-label="Hero section showcasing civic collaboration"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-900/50"></div>
      <div className="relative z-10 max-w-4xl px-6 text-white">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Together for a <span className="text-green-400">Cleaner City 🌍</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-10 drop-shadow-md max-w-3xl mx-auto">
          Report civic issues instantly and help improve your community.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 focus:bg-green-600 transition text-white font-semibold px-8 py-4 rounded-xl shadow-lg cursor-pointer select-none">
            <Link to="/report" aria-label="Report an Issue">
              Report an Issue <FaMapMarkerAlt size={22} />
            </Link>
          </div>
          <div className="inline-flex items-center gap-3 border-2 border-green-400 hover:border-green-500 focus:border-green-500 transition text-green-400 hover:text-green-500 font-semibold px-8 py-4 rounded-xl shadow cursor-pointer select-none">
            <Link to="/volunteer" aria-label="Join as Volunteer">
              Join as Volunteer <FaUserFriends size={22} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
