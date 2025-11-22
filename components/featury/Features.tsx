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

      <div className="grid grid-cols-1  md:grid-cols-2 md:gap-6">
        {ANIMAL_FEATURES.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.label}
              className={[
                "flex items-center gap-3 rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.7)_0,_rgba(34,197,94,0.3)_40%,_transparent_75%)]",

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
            >
              <Image
                src={item.src}
                width={120}
                height={120}
                alt={item.alt}
                className="object-contain h-50 w-50 md:h-80  md:w-80 rounded-2xl "
              />
              <motion.span
                className="font-ultra  font-light md:text-lg leading-snug px-2 "
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
