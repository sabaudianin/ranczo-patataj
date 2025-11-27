"use client";
import { useState } from "react";

import Image from "next/image";

const SLIDES = [
  {
    src: "/images/stol.jpg",
    alt: "Ogród Zimowy",
  },
  {
    src: "/images/ognisko.avif",
    alt: "Ognisko na dworze",
  },
  {
    src: "/images/work.avif",
    alt: "Warszaty Kulinarne",
  },
  {
    src: "/images/manual.avif",
    alt: "Warszaty Manualne",
  },
  {
    src: "/images/lilo.avif",
    alt: "Imprezy urodzinowe",
  },
  {
    src: "/images/sala.jpg",
    alt: "Sala na warsztaty",
  },
  {
    src: "/images/woz.avif",
    alt: "Przejażdzka bryczką",
  },
  {
    src: "/images/plac.avif",
    alt: "Plac zabaw",
  },
];

export const MiniGallery = () => {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <section
      className=""
      aria-labelledby="mini-gallery-heading"
      role="region"
    >
      <h2
        id="mini-gallery-heading"
        className="text-center text-base md:text-xl font-ultra tracking-wide text-[var(--c-primary)] mb-2"
      >
        Zobacz, jak wyglądają nasze niektóre atrakcje:
      </h2>

      {/* Dostępna dla czytników ekranu lista opisów zdjęć */}
      <ul className="sr-only">
        {[...SLIDES, ...SLIDES].map((card, index) => (
          <li key={index}>{card.alt}</li>
        ))}
      </ul>

      <div className="flex gap-2 justify-center md:gap-4 py-4">
        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto "
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
          onFocus={() => setStopScroll(true)}
          onBlur={() => setStopScroll(false)}
          aria-hidden="true"
        >
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-amber-500/20 to-transparent" />
          <div
            className="marquee-inner flex w-fit "
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: SLIDES.length * 4500 + "ms",
            }}
          >
            <div className="flex">
              {SLIDES.map((card, index) => (
                <div
                  key={index}
                  className="mx-4 w-56 group"
                >
                  {/* POLAROIDOWA RAMKA */}
                  <div className="relative h-[12rem] bg-[#fdf7e5] border border-neutral-300 rounded-sm shadow-lg shadow-black/40 p-3 pb-8 transform -rotate-2 group-hover:rotate-1 group-hover:-translate-y-1 group-hover:scale-95 transition-transform duration-300">
                    {/* WŁAŚCIWE "ZDJĘCIE" */}
                    <div className="relative h-full overflow-hidden bg-neutral-900/70">
                      <Image
                        src={card.src}
                        fill
                        sizes="auto"
                        alt={card.alt}
                        loading="eager"
                        className=" object-cover sepia brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Delikatne przyciemnienie / vintydżowy overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 mix-blend-multiply" />

                      {/* Twój overlay z tytułem przy hoverze */}
                      <div className="absolute inset-0 flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-semibold text-center drop-shadow">
                          {card.alt}
                        </p>
                      </div>
                    </div>

                    {/* PODPIS JAK NA POLAROIDZIE */}
                    <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 font-special">
                      {card.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-amber-500/20  to-transparent" />
        </div>
      </div>
    </section>
  );
};
