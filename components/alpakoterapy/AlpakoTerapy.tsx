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
      className="max-w-5xl mx-auto pt-4"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center font-special p-2 md:text-xl
      "
      >
        <motion.p
          variants={item}
          className="text-[var(--c-primary)] font-semibold"
        >
          Czy znacie Alpakoterapię ?
        </motion.p>
        <motion.p
          variants={item}
          className="text-[var(--c-primary)] font-bold"
        >
          {" "}
          - Nie?? Nasze Alpaki są w tym najlepsze{" "}
        </motion.p>
        <motion.p
          variants={item}
          className="font-curier text-xs md:text-base py-2"
        >
          <b>Alpakoterapia</b> - naturalna forma wsparcia emocjonalnego,
          wyciszenia dla dzieci i dorosłych. Bliski kontakt z alpakami pomaga
          redukować stres, poprawia samopoczucie i wspiera równowagę psychiczną.
        </motion.p>
        <motion.p
          variants={item}
          className="font-curier text-xs md:text-base"
        >
          Alpakoterapia to łagodna i bezpieczna terapia oparta na obcowaniu z
          alpakami, idealne dla osób potrzebujących wytchnienia, relaksu oraz
          chwili harmonii z naturą.{" "}
        </motion.p>
      </motion.div>
      <div className="relative h-100 flex">
        <Image
          src="/images/lamastar.avif"
          fill
          alt="Ładna lama patrzy na Ciebie"
          sizes="100vw"
          className="object-contain  max-h-100 rounded-2xl "
        />
      </div>
    </section>
  );
};
