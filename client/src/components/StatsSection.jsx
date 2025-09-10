import React from "react";
import { FaCheckCircle, FaMapMarkerAlt, FaUserFriends, FaCalendarAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaCheckCircle className="text-green-600 text-5xl mb-4" aria-hidden="true" />,
    number: "247",
    label: "Areas Cleaned",
    bgColor: "bg-green-100",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-600 text-5xl mb-4" aria-hidden="true" />,
    number: "1,834",
    label: "Issues Resolved",
    bgColor: "bg-blue-100",
  },
  {
    icon: <FaUserFriends className="text-purple-600 text-5xl mb-4" aria-hidden="true" />,
    number: "892",
    label: "Active Volunteers",
    bgColor: "bg-purple-100",
  },
  {
    icon: <FaCalendarAlt className="text-orange-600 text-5xl mb-4" aria-hidden="true" />,
    number: "15",
    label: "Upcoming Events",
    bgColor: "bg-orange-100",
  },
];

export default function StatsSection() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map(({ icon, number, label, bgColor }) => (
            <div
              key={label}
              className={`${bgColor} p-8 rounded-3xl shadow-lg flex flex-col items-center`}
              tabIndex={0}
              aria-label={`${number} ${label}`}
            >
              {icon}
              <p className="text-5xl font-extrabold text-gray-900">{number}</p>
              <p className="mt-1 text-xl font-medium text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
