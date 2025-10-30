import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 text-center py-24 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Simplify <span className="text-red-600">Domain Connections</span> — Instantly.
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        DomainConnectHub automates DNS setup, verification, and tracking across platforms — 
        so you never deal with confusing records again.
      </p>
      <div className="mt-8">
        <NavLink to="/connect" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
          Get Started Free
        </NavLink>
        <NavLink to="/about" className="ml-4 border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition">
          Learn More
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;