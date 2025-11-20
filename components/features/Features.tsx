"use client";
import Image from "next/image";
import { motion } from "motion/react";

const ANIMAL_FEATURES = [
  {
    src: "/avatar/brownFrontAlpaca.avif",
    alt: "Brązowa alpaka z przodu na ranczu edukacyjnym",
    label: "Zakochaj się w alpakach 😍",
  },
  {
    src: "/avatar/lamaFront.avif",
    alt: "Lama z profilu na wybiegu",
    label: "Zachwyć lamami🤗",
  },
  {
    src: "/avatar/darkSideAlpaca.avif",
    alt: "Ciemna alpaka z profilu podczas spaceru",
    label: "Poznaj alpakoterapię 🥰",
  },
  {
    src: "/avatar/horses.avif",
    alt: "Konie na padoku w gospodarstwie edukacyjnym",
    label: "Zaprzyjaźnij się z końmi💛",
  },
  {
    src: "/avatar/goat.avif",
    alt: "Koza na wybiegu na ranczu",
    label: "Odnajdź równowagę w obecności zwierząt⚖️",
  },
  {
    src: "/avatar/hen.avif",
    alt: "Kura w zagrodzie w otoczeniu natury",
    label: "Odkryj świat zwierząt z bliska🦚",
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
        className="text-center mx-auto mb-8 font-poppins font-bold text-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      >
        Gospodarstwo edukacyjne blisko Warszawy, w którym dzieci i dorośli
        poznają zwierzęta z bliska: alpaki, lamy, konie, kozy, kury pawie i
        wiele więcej.
      </motion.p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {ANIMAL_FEATURES.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.label}
              className={[
                "flex items-center gap-3 ",

                isEven ? "flex-row" : "flex-row-reverse",

                "md:flex-col md:text-center md:justify-center",
              ].join(" ")}
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.95,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={item.src}
                width={120}
                height={120}
                alt={item.alt}
                className="object-contain h-50 w-50 md:h-60  md:w-60 "
              />
              <span className="font-ultra  text-sm md:text-lg leading-snug">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
