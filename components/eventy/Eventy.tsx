"use client";
import { useState } from "react";
import { PolaroidCard } from "@/ui/polaroid/Polaroid";

export const Eventy = () => {
  //markiza
  const [stopScroll, setStopScroll] = useState(false);
  const cardData = [
    {
      title: "Unlock Your Creative Flow",
      image: "/images/car1.jpg",
    },
    {
      title: "Design Your Digital Future",
      image: "/images/car2.jpg",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: "/images/car5.jpg",
    },
    {
      title: "Think Big, Code Smart",
      image: "/images/car10.jpg",
    },
    {
      title: "Stół na ranczu",
      image: "/images/stol.jpg",
    },
    {
      title: "Ognisko na dworze",
      image: "/images/ognisko.avif",
    },
    {
      title: "Warszaty Kulinarne",
      image: "/images/work.avif",
    },
    {
      title: "Warszaty z dziecmi",
      image: "/images/pierogi.avif",
    },
    {
      title: "Impreza urodzinowa",
      image: "/images/lilo.avif",
    },
    {
      title: "Sala na warsztaty",
      image: "/images/sala.jpg",
    },
    {
      title: "Przejażdzka bryczką",
      image: "/images/woz.avif",
    },
  ];
  //koniec markizy

  return (
    <section className="space-y-12">
      <div className="max-w- mx-auto">
        <div className="h-56 w-80 bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
          <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div className="z-10 flex flex-col items-center gap-2">
              <span className="text-6xl font-bold"></span>
              <p className=""></p>
            </div>
          </div>
        </div>
      </div>

      <PolaroidCard
        src="/images/lamawest.jpg"
        alt="Zachód słońca na Ranczo Patataj"
        caption="Zachód słońca na ranczu"
      />

      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <div
        className="overflow-hidden w-full relative max-w-6xl mx-auto "
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-amber-500/20 to-transparent" />
        <div
          className="marquee-inner flex w-fit "
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 20500 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="mx-4 w-56 group"
              >
                {/* POLAROIDOWA RAMKA */}
                <div className="relative h-[12rem] bg-[#fdf7e5] border border-neutral-300 rounded-sm shadow-lg shadow-black/40 p-3 pb-8 transform -rotate-2 group-hover:rotate-1 group-hover:-translate-y-1 group-hover:scale-95 transition-transform duration-300">
                  {/* WŁAŚCIWE "ZDJĘCIE" */}
                  <div className="relative h-full overflow-hidden bg-neutral-900/70">
                    <img
                      src={card.image}
                      title="card"
                      alt={card.title}
                      className="w-full h-full object-cover sepia brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Delikatne przyciemnienie / vintydżowy overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 mix-blend-multiply" />

                    {/* Twój overlay z tytułem przy hoverze */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg font-semibold text-center drop-shadow">
                        {card.title}
                      </p>
                    </div>
                  </div>

                  {/* PODPIS JAK NA POLAROIDZIE */}
                  <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 font-amatic">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-amber-500/20  to-transparent" />
      </div>
    </section>
  );
};
