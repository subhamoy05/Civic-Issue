import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    rating: 5,
    quote:
      "Clean City has transformed how our neighborhood approaches cleanliness. The reporting system is so easy to use!",
    name: "Sarah Johnson",
    role: "Community Volunteer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rating: 5,
    quote:
      "I've seen incredible improvements in our area. The volunteer events bring the community together beautifully.",
    name: "Michael Chen",
    role: "Local Business Owner",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    rating: 5,
    quote:
      "This platform makes it so simple to contribute to a cleaner city. The progress tracking keeps me motivated!",
    name: "Emily Rodriguez",
    role: "Environmental Advocate",
    img: "https://randomuser.me/api/portraits/women/17.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-900">What Our Community Says</h2>
        <p className="text-center mb-16 text-lg text-gray-600 max-w-3xl mx-auto">
          Real stories from volunteers and citizens who are making a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map(({ rating, quote, name, role, img }, idx) => (
            <article
              key={idx}
              tabIndex={0}
              className="bg-white p-8 rounded-3xl shadow-lg flex flex-col"
              aria-label={`Testimonial by ${name}, ${role}`}
            >
              <div className="flex mb-4 text-yellow-400" aria-hidden="true">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <blockquote className="italic flex-grow text-gray-800 mb-6">{quote}</blockquote>
              <div className="flex items-center gap-4">
                <img src={img} alt={`${name}`} className="w-14 h-14 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-gray-500">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
