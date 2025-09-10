import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <section className="container mx-auto my-24 px-6 text-center max-w-4xl">
        <h3 className="text-3xl font-extrabold mb-4">Our Focus Areas</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          We tackle urban cleanliness through comprehensive programs that address every aspect of city maintenance.
        </p>
      </section>
      <Testimonials />
      <CallToAction />
    </>
  );
}
