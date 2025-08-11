"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current && textRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40, rotate: -6, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.3,
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[40vh] px-4 py-8 md:py-14 section-divider"
    >
      <h2
        ref={textRef}
        className="fancy-mission text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-4 md:mb-8 drop-shadow-lg"
      >
    Our Mission
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-xl md:max-w-2xl text-primary/90 font-semibold animate-fade-in">
        "To make quality healthcare accessible to all, with a special focus on those living at the grassroots level of society."
      </p>
      <div className="mt-8 w-full flex justify-center">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="animate-spin-slow">
          <circle cx="60" cy="60" r="50" stroke="#60ad5e" strokeWidth="8" opacity="0.3" />
          <circle cx="60" cy="60" r="35" stroke="#fbc02d" strokeWidth="6" opacity="0.5" />
          <circle cx="60" cy="60" r="20" stroke="#2e7d32" strokeWidth="4" opacity="0.7" />
        </svg>
      </div>
      <style jsx>{`
        .fancy-mission {
          background: linear-gradient(90deg, #60ad5e 0%, #fbc02d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
