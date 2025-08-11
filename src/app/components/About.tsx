"use client"
import React from "react";
export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-6 md:py-10 animate-fade-in section-divider">
      <h2 className="fancy-mission text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-8 text-center drop-shadow-lg animate-slide-down">
    About Us
      </h2>
      <style jsx>{`
        .fancy-mission {
          background: linear-gradient(90deg, #60ad5e 0%, #fbc02d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
      <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 text-center max-w-xl md:max-w-2xl text-primary/90 animate-fade-in delay-200">
        <span className="font-bold text-accent">Pumithila Pvt. Ltd.</span> is an ISO 9001:2015 certified healthcare company dedicated to the marketing of Allopathic and Ayurvedic medicines.
      </p>
      <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 text-center max-w-xl md:max-w-2xl text-primary/90 animate-fade-in delay-300">
        With a strong presence in the healthcare sector, we focus on quality, affordability, and accessibility, especially for the economically disadvantaged.
      </p>
      <p className="text-base sm:text-lg md:text-xl mb-0 text-center max-w-xl md:max-w-2xl text-primary/90 animate-fade-in delay-400">
        Our mission is to ensure that every individual, regardless of income, has access to safe and effective treatments. We work hand-in-hand with doctors, pharmacies, and online platforms to reach patients across India.
      </p>
      {/* Animations using Tailwind CSS custom classes */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease;
        }
        .animate-slide-down {
          animation: slideDown 1s cubic-bezier(.42,0,.58,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
