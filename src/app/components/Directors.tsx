"use client"
import React from "react";

const directors = [
  {
    name: "Mr. Avinash Kumar Mishra",
    title: "Director",
    img: "/avinash-dir.jpg",
    highlights: [
      "12+ years of pharmaceutical industry experience",
      "Former Sales Representative & Area Manager at top pharma companies",
      "Visionary leader focused on affordable healthcare",
    ],
  },
  {
    name: "Mrs. Anjali Anand Mishra",
    title: "Deputy Director",
    img: "/anajli-dir.jpg",
    highlights: [
      "B.Sc. DMLT & B.Pharma",
      "5 years in pharmaceutical production, 2 years in pathology labs",
      "Expert in quality control and R&D",
    ],
  },
  {
    name: "Mr. Ambuj Bharadwaj",
    title: "Director",
    img: "/ambuj-dir.jpg",
    highlights: [
      "Masters in Mass Communication & Journalism (Delhi University)",
      "Skilled in strategic communication and brand growth",
    ],
  },
];

export default function Directors() {

  return (
    <section id="directors" className="w-full flex flex-col items-center justify-center py-10 md:py-20 px-4 sm:px-6 md:px-8 section-divider">
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 sm:mb-10">
        Our Directors
      </h2>
      <div className="w-full max-w-7xl pb-2 sm:pb-4">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full justify-center items-stretch">
          {directors.map((d, i) => (
            <div
              key={d.name}
              className="w-full sm:min-w-[340px] sm:max-w-[420px] sm:w-[380px] rounded-3xl shadow-lg border border-primary/30 flex flex-col items-stretch justify-center mx-auto hover:scale-105 transition-transform duration-300 overflow-hidden relative"
              style={{
                minHeight: '520px',
                maxHeight: '900px',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <div
                className="w-full flex items-center justify-center relative group"
                style={{
                  height: '320px',
                  minHeight: '220px',
                  maxHeight: '420px',
                  padding: '0.5rem 0 0.5rem 0',
                  marginTop:
                    typeof window !== 'undefined' && window.innerWidth <= 640
                      ? (i === 0 ? '-30px' : i === 1 ? '-10px' : '0px')
                      : '0px',
                }}
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-[95%] h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    objectPosition:
                      typeof window !== 'undefined' && window.innerWidth <= 640
                        ? (i === 0 ? 'top 20%' : i === 1 ? 'top' : 'center')
                        : 'center',
                  }}
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full flex-1 p-6 sm:p-8" style={{ minHeight: '220px', maxHeight: '390px' }}>
                <h3 className="text-2xl font-bold text-primary mb-2">{d.name}</h3>
                <p className="text-lg font-semibold text-primary/80 mb-4">{d.title}</p>
                <ul className="list-none space-y-2">
                  {d.highlights.map((h, idx) => (
                    <li key={idx} className="text-sm text-gray-700 font-medium">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .fancy-mission {
          background: linear-gradient(90deg, #60ad5e 0%, #fbc02d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .animate-glaze-name-soft {
          position: relative;
          animation: glazeNameSoft 3s linear infinite;
        }
        @keyframes glazeNameSoft {
          0% { filter: brightness(1.03) drop-shadow(0 0 2px #fbc02d44); }
          50% { filter: brightness(1.08) drop-shadow(0 0 6px #fbc02d66); }
          100% { filter: brightness(1.03) drop-shadow(0 0 2px #fbc02d44); }
        }
        @media (max-width: 640px) {
          #directors .w-full.flex.items-center.justify-center {
            height: 220px !important;
            min-height: 160px !important;
            max-height: 260px !important;
          }
          #directors img {
            height: 100% !important;
            min-height: 160px !important;
            max-height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
