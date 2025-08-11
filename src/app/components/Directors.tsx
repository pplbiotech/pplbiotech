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
    <section id="directors" className="w-full flex flex-col items-center justify-center py-10 md:py-20 px-2 sm:px-4 section-divider">
      <h2 className="text-center mb-8 sm:mb-10">
        <span className="block text-4xl sm:text-5xl md:text-6xl font-extrabold fancy-mission" style={{filter: 'brightness(1.15)'}}>
          Our Directors
        </span>
      </h2>
      <div className="w-full max-w-7xl pb-2 sm:pb-4">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full justify-center items-stretch">
          {directors.map((d, i) => (
            <div
              key={d.name}
              className="w-full sm:min-w-[340px] sm:max-w-[420px] sm:w-[380px] bg-gradient-to-br from-[#e8f5e9] via-[#fffde7] to-[#e3f2fd] rounded-2xl sm:rounded-[2rem] shadow-2xl border-2 border-primary/20 flex flex-col items-stretch justify-center mx-auto hover:scale-105 transition-transform duration-300 overflow-hidden"
              style={{minHeight: '520px', maxHeight: '900px', display: 'flex', flexDirection: 'column'}}
            >
              <div
                className="w-full flex items-center justify-center"
                style={{
                  height: '320px',
                  minHeight: '220px',
                  maxHeight: '420px',
                  padding: '0.5rem 0 0.5rem 0',
                  marginTop:
                    typeof window !== 'undefined' && window.innerWidth <= 640
                      ? (i === 0 ? '-18px' : i === 1 ? '-10px' : '0px')
                      : '0px',
                }}
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-[98%] h-full object-cover rounded-xl sm:rounded-[1.5rem]"
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    objectPosition:
                      typeof window !== 'undefined' && window.innerWidth <= 640
                        ? (i === 0 ? 'top' : i === 1 ? 'top' : 'center')
                        : 'center',
                  }}
                />
              </div>
              <div style={{height: '18px', width: '100%'}} />
              <div className="flex flex-col items-start justify-center w-full flex-1 p-4 sm:p-6 md:p-8" style={{minHeight: '220px', maxHeight: '390px'}}>
                <div className="relative mb-2 w-full" style={{marginTop: 0, marginBottom: '1rem'}}>
                  <span className="fancy-mission text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-sm animate-glaze-name-soft relative z-10 block text-left" style={{whiteSpace: 'normal', wordBreak: 'break-word'}}>
                    {d.name}
                  </span>
                </div>
                <div className="text-base xs:text-lg md:text-xl font-extrabold text-primary bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 px-4 py-2 rounded-full mb-2 sm:mb-3 shadow-md w-full text-left">
                  {d.title}
                </div>
                <ul className="list-disc list-inside text-sm xs:text-base md:text-lg text-gray-700 font-medium text-left mx-auto max-w-md space-y-2 w-full">
                  {d.highlights.map((h, idx) => (
                    <li key={idx}>
                      {h.split(/(\b(?:pharmaceutical|healthcare|quality control|R&D|production|pathology|Sales Representative|Area Manager|leader|communication|brand growth|Mass Communication|Journalism|B\.Sc\.|DMLT|B\.Pharma|Delhi University)\b)/gi).map((part, i) =>
                        /^(pharmaceutical|healthcare|quality control|R&D|production|pathology|Sales Representative|Area Manager|leader|communication|brand growth|Mass Communication|Journalism|B\.Sc\.|DMLT|B\.Pharma|Delhi University)$/i.test(part)
                          ? <span key={i} className="bg-yellow-300 text-primary font-bold px-1 rounded-md shadow-sm">{part}</span>
                          : part
                      )}
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
