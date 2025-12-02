"use client";
import Image from "next/image";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const AlpakoTerapy = () => {
  return (
    <section
      id="alpakoterapia"
      aria-labelledby="alpakoterapia-title"
      className="max-w-5xl mx-auto py-4 px-2 "
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-6 md:gap-10 items-center"
      >
        {/* LEWA KOLUMNA – TEKST */}
        <div className="text-center md:text-left font-special md:text-xl">
          <motion.h2
            id="alpakoterapia-title"
            variants={item}
            className="text-[var(--c-primary)] font-semibold"
          >
            Czy znacie alpakoterapię?
          </motion.h2>

          <motion.p
            variants={item}
            className="text-[var(--c-primary)] font-bold"
          >
            Nie? Nasze alpaki są w tym najlepsze!
          </motion.p>

          <motion.div
            variants={item}
            className="font-curier text-xs md:text-base py-2 space-y-2"
          >
            <p>
              <b>Alpakoterapia</b> to naturalna forma wsparcia emocjonalnego i
              wyciszenia zarówno dla dzieci, jak i dorosłych.
            </p>

            <p>Bliski kontakt z alpakami:</p>
            <ul className="list-disc list-inside text-left text-[0.7rem] md:text-sm">
              <li>pomaga redukować stres,</li>
              <li>poprawia samopoczucie,</li>
              <li>wspiera równowagę psychiczną,</li>
              <li>zachęca do otwartości i buduje poczucie bezpieczeństwa.</li>
            </ul>
          </motion.div>

          <motion.p
            variants={item}
            className="font-curier text-xs md:text-base"
          >
            Alpakoterapia to łagodna i bezpieczna terapia oparta na obcowaniu ze
            zwierzętami, idealna dla osób, które potrzebują chwili wytchnienia,
            relaksu oraz harmonii z naturą.
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="relative w-full aspect-[4/3] md:aspect-[3/4] max-h-[420px] mx-auto   p-2"
        >
          <Image
            src="/images/lamastar.avif"
            fill
            alt="Ładna lama patrzy na Ciebie"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
