"use client"
import React from "react";

const categories = [
  "Cold, Fever, and Cough Relief",
  "Digestive Health Solutions (constipation, gas, acidity)",
  "Skin & Hair Care",
  "Gum & Dental Care",
  "Joint & Bone Pain Relief",
  "Ayurvedic Tonics & Immune Boosters",
];

export default function ProductCategories() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40vh] px-4 py-8 md:py-14 section-divider">
      <h2 className="fancy-mission text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-8 text-center drop-shadow-lg">
        Product Categories
      </h2>
      <ul className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
        {categories.map((cat, i) => (
          <li key={cat} className="bg-white/80 rounded-xl shadow-lg p-4 text-lg md:text-xl font-semibold text-primary border border-primary/20 hover:scale-105 transition-transform duration-200">
            {cat}
          </li>
        ))}
      </ul>
      <a
        href="/Product%20list.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="px-8 py-4 rounded-xl bg-primary text-white font-bold shadow-lg hover:bg-accent hover:text-primary transition-all duration-200 scale-100 hover:scale-105 border-2 border-primary hover:border-accent text-center text-xl md:text-2xl"
      >
        Download the Product List
      </a>
      <style jsx>{`
        .fancy-mission {
          background: linear-gradient(90deg, #60ad5e 0%, #fbc02d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
