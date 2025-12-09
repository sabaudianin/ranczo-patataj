"use client";
import { MiniCarousel } from "@/ui/miniCarousel/MiniCarousel";
import Image from "next/image";

// import { useState } from "react";

// const FILTERS = [
//   "Wszystko",
//   "Dla dzieci",
//   "Na zewnątrz",
//   "Warsztaty",
//   "Imprezy",
// ] as const;
const ATTRACTIONS = [
  {
    icon: "🌿",
    title: "Spotkania ze zwierzętami",
    description:
      "Alpaki, lamy, konie, kucyki, kozy, owce, kury, pawie i wiele innych. Dzieci i dorośli mogą je karmić, głaskać i z bliska zobaczyć, jak wygląda codzienna opieka nad nimi.",
    className: "bg-emerald-300/50 border border-emerald-500",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
  {
    icon: "🏡",
    title: "Rustykalna sala i przestrzeń na zewnątrz",
    description:
      "Do Waszej dyspozycji jest przytulna sala idealna na warsztaty i spotkania, przeszklona przestrzeń w stylu ogrodu zimowego oraz duży teren na zewnątrz. Dzięki temu możecie cieszyć się ranczem niezależnie od pogody i pory roku.",
    className: "bg-indigo-300/50 border border-indigo-500",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
  {
    icon: "🎨",
    title: "Warsztaty kulinarne i manualne",
    description:
      "Proste przepisy, praca z naturalnymi składnikami, lepienie, tworzenie własnych pamiątek oraz eko-warsztaty. Dzieci uczą się przez działanie, jest dużo kreatywności i zero nudy.",
    className: "bg-red-300/50 border border-red-500",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
  {
    icon: "🔥",
    title: "Ognisko i piknik na świeżym powietrzu",
    description:
      "Przygotowujemy miejsce na ognisko i przestrzeń do pikniku. To idealne zwieńczenie wizyty, rodzinnego wyjazdu lub integracji przy wspólnym pieczeniu i rozmowach.",
    className: "bg-orange-100/50 border border-orange-500 shadow-xl",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
  {
    icon: "🎉",
    title: "Urodziny i imprezy okolicznościowe",
    description:
      "Organizujemy urodziny wśród zwierząt, rodzinne spotkania oraz kameralne imprezy firmowe. Możemy połączyć atrakcje ze zwierzętami, warsztaty i swobodną zabawę, tworząc scenariusz dopasowany do Waszej grupy.",
    className: "bg-sky-300/50 border border-sky-500 md:col-span-2",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
];
export const Atrakcje = () => {
  // const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("Wszystko");

  // const filtered = ATTRACTIONS.filter((item) =>
  //   activeFilter === "Wszystko" ? true : item.tags?.includes(activeFilter)
  // );

  return (
    <section
      id="atrakcje"
      aria-labelledby="atrakcje-title"
      className="max-w-5xl mx-auto py-4 px-4 md:px-0"
    >
      <div className="text-center mb-6">
        <h2
          id="atrakcje-title"
          className="text-[var(--c-primary)] font-ultra tracking-wide text-base md:text-2xl"
        >
          Co u nas przeżyjesz?
        </h2>
        <p className="font-curier text-xs md:text-base mt-2 max-w-2xl mx-auto">
          Zapraszamy na dzień pełen prawdziwych doświadczeń, wśród zwierząt,
          zieleni i przytulnych rustykalnych wnętrz. Bez pośpiechu, za to z dużą
          dawką natury i dobrej energii.
        </p>
      </div>

      <MiniCarousel />
      <div className="text-center mb-6 max-w-3xl mx-auto">
        <p className="font-special  md:text-base ">
          Możecie wpaść tylko na chwilę albo zostać na cały dzień. Wybierzcie
          to, co najbardziej pasuje do Was, a my zajmiemy się resztą.
        </p>
      </div>

      {/* <div className="grid gap-4 md:gap-6 md:grid-cols-2 text-xs md:text-base font-curier">
        {ATTRACTIONS.map((item) => (
          <div
            key={item.title}
            className={`
            flex gap-3 p-3 md:p-4 rounded-2xl shadow-sm
            sepia-[0.3] contrast-125 brightness-90 saturate-75
            ${item.className}
          `}
          >
            <div className="text-2xl md:text-3xl mt-1">{item.icon}</div>
            <div>
              <h3 className="font-ultra  py-2 ">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="flex flex-wrap gap-2 justify-center mb-6">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                text-xs md:text-sm px-3 py-1 rounded-full border
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[var(--c-primary)] text-white border-[var(--c-primary)] shadow-sm"
                    : "bg-white/60 text-slate-800 border-slate-200 hover:bg-white"
                }
              `}
            >
              {filter}
            </button>
          );
        })}
      </div> */}

      {/* GRID KART */}

      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
        {ATTRACTIONS.map((item) => (
          <article
            key={item.title}
            className={` snap-center min-w-[260px] max-w-[280px]
        flex-shrink-0
              group relative flex gap-3 p-3 md:p-4 rounded-2xl
              shadow-[0_10px_30px_rgba(15,23,42,0.08)]
              backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)]
                sepia-[0.2] contrast-125 brightness-95 saturate-75
              ${item.className}
            `}
          >
            {/* akcent pod kartą */}
            <div
              className="pointer-events-none absolute inset-x-4 bottom-0 h-1 
                            bg-gradient-to-r from-black/10 via-black/0 to-black/10 
                            opacity-0 group-hover:opacity-100 blur-xl"
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center justify-center rounded-full 
                              bg-white/70 backdrop-blur px-3 py-1 text-xl md:text-2xl 
                              shadow-sm mb-2"
              >
                <span>{item.icon}</span>
              </div>

              <h3 className="font-ultra py-1 md:py-2 text-sm md:text-lg">
                {item.title}
              </h3>

              <p className="text-[11px] md:text-[15px] leading-relaxed line-clamp-4 md:line-clamp-none">
                {item.description}
              </p>
              {/* 
              {item.tags && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-xs px-2 py-0.5 rounded-full 
                                 bg-black/5 border border-black/5 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )} */}
            </div>
          </article>
        ))}
      </div>

      {/* Wersja desktop*/}

      <div className="hidden md:grid md:grid-cols-2 gap-4 md:gap-6">
        {ATTRACTIONS.map((item) => (
          <article
            key={item.title}
            className={`
              group relative flex gap-3 p-3 md:p-4 rounded-2xl
              shadow-[0_10px_30px_rgba(15,23,42,0.08)]
              backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)]
              ${item.className}
            `}
          >
            {/* akcent pod kartą */}
            <div
              className="pointer-events-none absolute inset-x-4 bottom-0 h-1 
                            bg-gradient-to-r from-black/10 via-black/0 to-black/10 
                            opacity-0 group-hover:opacity-100 blur-xl"
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center justify-center rounded-full 
                              bg-white/70 backdrop-blur px-3 py-1 text-xl md:text-2xl 
                              shadow-sm mb-2"
              >
                <span>{item.icon}</span>
              </div>

              <h3 className="font-ultra py-1 md:py-2 text-sm md:text-lg">
                {item.title}
              </h3>

              <p className="text-[11px] md:text-[15px] leading-relaxed line-clamp-4 md:line-clamp-none">
                {item.description}
              </p>

              {/* {item.tags && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-xs px-2 py-0.5 rounded-full 
                                 bg-black/5 border border-black/5 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )} */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
