import Image from "next/image";

const SLIDES = [
  {
    src: "/images/stol.avif",
    alt: "Ogród Zimowy",
  },
  {
    src: "/images/ognisko.avif",
    alt: "Ognisko na dworze",
  },
  {
    src: "/images/sala.avif",
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
    src: "/images/bryczka.avif",
    alt: "Przejażdzka bryczką",
  },
  {
    src: "/images/plac.avif",
    alt: "Plac zabaw",
  },
  {
    src: "/images/altana.avif",
    alt: "Altana na zewnątrz",
  },
  {
    src: "/images/domBokNew.avif",
    alt: "Zaciszna przestrzeń",
  },
  {
    src: "/images/lamawest.jpg",
    alt: "Wybieg dla zwierząt",
  },
];

export const MiniGallery = () => {
  return (
    <section
      className="py-4"
      aria-labelledby="mini-gallery-heading"
      role="region"
    >
      <h5
        id="mini-gallery-heading"
        className="text-center text-base md:text-xl font-ultra tracking-wide text-[var(--c-primary)] mb-2"
      >
        Zobacz, jak wyglądają nasze niektóre atrakcje:
      </h5>

      {/* Dostępna dla czytników ekranu lista opisów zdjęć */}
      <ul className="sr-only">
        {SLIDES.map((card, index) => (
          <li key={index}>{card.alt}</li>
        ))}
      </ul>

      <div className="relative flex gap-2 justify-center md:gap-4 py-4 max-w-6xl mx-auto  ">
        <div
          className="overflow-hidden w-full overflow-x-auto overflow-y-hidden flex items-stretch snap-x snap-mandatory no-scrollbar touch-pan-x"
          aria-hidden="true"
        >
          {/* gradient po lewej */}
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-amber-500/20 to-transparent z-10" /> */}
          {/* gradient po prawej */}
          {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-amber-500/20 to-transparent z-10" /> */}

          <div className="flex scrollbar-none marquee-track">
            {[...SLIDES, ...SLIDES].map((card, index) => (
              <div
                key={index}
                className="mx-4 w-56 group"
              >
                {/* POLAROIDOWA RAMKA */}
                <div className="relative h-[12rem] bg-[#fdf7e5] border border-neutral-300 rounded-sm shadow-lg shadow-black/40 p-3 pb-8 transform -rotate-2 group-hover:rotate-1 group-hover:-translate-y-1 group-hover:scale-95 transition-transform duration-300">
                  <div className="relative h-full overflow-hidden bg-neutral-900/70">
                    <Image
                      src={card.src}
                      fill
                      sizes="auto"
                      alt={card.alt}
                      className=" object-cover sepia brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* vinoverlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 mix-blend-multiply" />
                  </div>

                  <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 font-special">
                    {card.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-amber-500/20  to-transparent" /> */}
      </div>
    </section>
  );
};
