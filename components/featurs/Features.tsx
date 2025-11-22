"use client";
import Image from "next/image";
import { motion } from "motion/react";

const ANIMAL_FEATURES = [
  {
    src: "/images/tbrown.avif",
    alt: "Kura w zagrodzie w otoczeniu natury",
    label: "Zakochaj się w alpakach 😍",
  },
  {
    src: "/images/tlam.avif",
    alt: "Kura w zagrodzie w otoczeniu natury",
    label: "Zachwyć lamami🤗",
  },
  {
    src: "/images/tduo.avif",
    alt: "Kura w zagrodzie w otoczeniu natury",
    label: "Zaprzyjaźnij się z końmi💛",
  },
  {
    src: "/images/tblack.avif",
    alt: "Kura w zagrodzie w otoczeniu natury",
    label: "Poznaj alpakoterapię 🥰",
  },
  {
    src: "/images/trio.avif",
    alt: "Kura w zagrodzie w otoczeniu natury",
    label: "Odnajdź równowagę w obecności zwierząt⚖️",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="mx-auto max-w-7xl px-4 py-8 "
    >
      <motion.h2
        id="features-heading"
        className="text-center font-ultra text-2xl md:text-3xl text-[var(--c-primary)] mb-2"
        initial={{ opacity: 0, x: -100, scale: 0.2 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Alpaki, konie, lamy… u nas zwierzęta mówią &bdquo;Dzień Dobry&rdquo;
        jako pierwsze.
      </motion.h2>
      <motion.p
        className="text-center mx-auto mb-8 font-poppins font-bold text-sm "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      >
        Gospodarstwo edukacyjne blisko Warszawy, w którym dzieci i dorośli
        poznają zwierzęta z bliska: alpaki, lamy, konie, kozy, kury pawie i
        wiele więcej.
      </motion.p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 md:gap-6
    md:[&>*:last-child:nth-child(odd)]:col-span-2
    md:[&>*:last-child:nth-child(odd)]:justify-self-center"
      >
        {ANIMAL_FEATURES.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.label}
              className={[
                "relative mx-4 flex items-center gap-3 md:justify-center md:justify-self-center",
                isEven
                  ? "flex-row md:flex-col"
                  : "flex-row-reverse md:flex-col",
                "md:text-center",
              ].join(" ")}
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.95,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
            >
              {/* POLAROID – postarzone zdjęcie */}
              <div
                className={[
                  "relative bg-[#fdf3e1] border border-neutral-300 rounded-sm",
                  "shadow-lg shadow-black/40 p-3 pb-7",
                  "transform transition-transform duration-300",
                  isEven ? "-rotate-2 md:-rotate-3" : "rotate-2 md:rotate-3",
                  "hover:rotate-0 hover:-translate-y-1 hover:scale-[0.97]",
                ].join(" ")}
              >
                <div className="relative overflow-hidden bg-neutral-900/70 aspect-[4/3] w-40 md:w-full">
                  <Image
                    src={item.src}
                    width={256}
                    height={192}
                    alt={item.alt}
                    className="
          w-full h-full object-cover
          sepia-[0.8] contrast-125 brightness-90
          hover:scale-105 transition-transform duration-500
        "
                  />

                  {/* lekko brudne / przydymione brzegi */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.25)_0,_transparent_60%)] mix-blend-multiply" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_40%,_rgba(0,0,0,0.6))] mix-blend-multiply" />
                  {/* drobne ziarno */}
                  <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light " />
                </div>

                {/* podpis jak na polaroidzie */}
                <p className="mt-2 text-center font-bold tracking-[0.25em] uppercase text-neutral-700 font-special">
                  {item.label}
                </p>
              </div>

              {/* Stara gazeta o zwierzętach – tekst obok / pod */}
              <motion.span
                className="
      font-ultra font-light md:text-sm leading-snug px-3 py-2
      bg-[#f5ebd5] text-neutral-800
      border border-neutral-300 rounded
      shadow-sm shadow-black/20
      md:mt-4
      bg-[repeating-linear-gradient(
        to_bottom,
        rgba(0,0,0,0.06) 0px,
        rgba(0,0,0,0.06) 1px,
        transparent 1px,
        transparent 5px
      )]
    "
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.95,
                  ease: "easeOut",
                  delay: 0.2 * index,
                }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
