"use client"
//@ts-nocheck
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
  "/C1.png",
  "/C2.png",
  "/C3.png",
  "/C4.png",
  "/C5.png",
  "/C6.png",
];

export default function FeaturedProducts() {
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carouselRef.current) {
      // Duplicate images to ensure seamless loop and no visible repeat
      const totalImages = images.length * 4; // 4x for seamlessness
      const duration = totalImages * 3;
      gsap.to(carouselRef.current, {
        x: `-=${carouselRef.current.scrollWidth / 2}`,
        duration,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => {
            if (!carouselRef.current) return x;
            return `${parseFloat(x) % (carouselRef.current.scrollWidth / 2)}px`;
          },
        },
      });
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] px-4 md:px-6 lg:px-8 py-8 md:py-14 section-divider">
      <h2 className="fancy-mission text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 text-center drop-shadow-lg">
        Featured Products
      </h2>
      <div className="relative w-full overflow-hidden mb-6 sm:mb-10" style={{height: 'min(280px, 60vw)'}}>
        <div
          ref={carouselRef}
          className="flex w-max"
          style={{ willChange: "transform" }}
        >
          {Array(4).fill(images).flat().map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Featured Product"
              className="h-[240px] xs:h-[320px] sm:h-[420px] md:h-[540px] lg:h-[680px] w-auto object-contain select-none pointer-events-none"
              draggable={false}
              style={{marginRight: '0px'}}
            />
          ))}
        </div>
        {/* Fade effect on sides */}
        <div className="absolute left-0 top-0 h-full w-16 xs:w-24 sm:w-32 md:w-40 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 xs:w-24 sm:w-32 md:w-40 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none" />
      </div>
      <a
        href="/Product%20list.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="relative px-4 xs:px-6 sm:px-10 py-2 xs:py-3 sm:py-5 rounded-lg sm:rounded-2xl font-extrabold text-white text-sm xs:text-base sm:text-xl md:text-2xl shadow-2xl bg-gradient-to-r from-[#60ad5e] via-[#fbc02d] to-[#60ad5e] border-0 overflow-hidden flex items-center gap-2 xs:gap-3 sm:gap-4 transition-all duration-300 hover:scale-105 hover:shadow-3xl focus:outline-none"
        style={{
          boxShadow: '0 4px 32px 0 rgba(96,173,94,0.15), 0 1.5px 8px 0 rgba(251,192,45,0.12)'
        }}
      >
        <span className="relative z-10 flex items-center gap-1 xs:gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block mr-1 xs:mr-2">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="4" y="17" width="16" height="4" rx="2" fill="#fff" fillOpacity="0.2"/>
          </svg>
          Download Complete Product List
        </span>
        <span className="absolute inset-0 z-0 pointer-events-none animate-shine" />
      </a>
      <style jsx>{`
        .animate-shine {
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 40%, transparent 100%);
          animation: shine 2.5s linear infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .fancy-mission {
          background: linear-gradient(90deg, #60ad5e 0%, #fbc02d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        a:hover .relative.z-10 {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}
