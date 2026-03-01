"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Card } from "@/ui/card/Card";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export const AlpakoTerapy = () => {
  return (
    <section
      id="alpakoterapia"
      aria-labelledby="alpakoterapia-title"
      className="max-w-6xl mx-auto py-4 md:py-16 relative"
    >

      <div className="mb-10 text-center">
        <motion.h4
          id="alpakoterapia-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-emerald-800 dark:text-emerald-400 font-ultra text-2xl md:text-4xl mb-2"
        >
          Alpakoterapia w Ranczo Patataj
        </motion.h4>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="tracking-widest text-amber-600 text-lg md:text-xl font-ultra"
        >
          - Nie znacie alpakoterapii? <br /> -Nasze alpaki są w tym najlepsze!
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-4 md:gap-8 items-center"
      >
        <div className="space-y-4">
          <motion.div variants={item}>
            <Card className="p-4 bg-white/60 dark:bg-stone-900/60 border-none shadow-sm">
              <h5 className="font-ultra text-amber-700 mb-2 uppercase tracking-tighter">Czym jest alpakoterapia?</h5>
              <p className="font-curier text-sm md:text-base leading-relaxed text-stone-700 dark:text-stone-300">
                To naturalna forma wsparcia emocjonalnego i wyciszenia. U nas na Ranczu Patataj
                spotkania z alpakami pomagają się zrelaksować, otworzyć i poczuć bezpiecznie
                każdemu, niezależnie od wieku.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item} className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-3xl border border-emerald-100 dark:border-emerald-900/30">
            <p className="font-ultra text-emerald-900 dark:text-emerald-300 text-sm mb-4">
              Co daje bliski kontakt z naszymi alpakami?
            </p>
            <ul className="space-y-3">
              {[
                "Redukcja stresu i napięcia",
                "Poprawa samopoczucia i uśmiech",
                "Wsparcie równowagi psychicznej",
                "Budowanie poczucia bezpieczeństwa"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-curier text-xs md:text-sm text-stone-600 dark:text-stone-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <Card className="p-4 bg-stone-100/40 dark:bg-stone-800/40 border-dashed border-stone-300 dark:border-stone-700 shadow-none">
              <p className="font-curier text-xs md:text-sm italic text-stone-500">
                Idealna forma relaksu dla szkół, przedszkoli i rodzin z całego Mazowsza. Przyjedźcie i zrelaksujcie się całą swoją firmą.
              </p>
            </Card>
          </motion.div>
        </div>


        <motion.div
          variants={item}
          className="relative group p-2"
        >
          <div className="relative aspect-3/4 max-h-[500px] w-full bg-white p-3 pb-12 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-stone-200">
            <div className="relative h-full w-full overflow-hidden rounded-sm bg-stone-100">
              <Image
                src="/images/slodka-alpaka-ranczo-patataj.avif"
                fill
                alt="Alpaka na Ranczo Patataj podczas zajęć alpakoterapii"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover sepia-[0.1] group-hover:sepia-0 transition-all duration-700"
              />
              <div className="absolute inset-0 shadow-[inner_0_0_40px_rgba(0,0,0,0.1)]" />
            </div>

            <p className="absolute bottom-3 left-0 w-full text-center font-playwrite text-stone-400 text-lg">
              Nasza słodka terapeutka
            </p>
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm -rotate-3 border border-white/50 z-20" />
        </motion.div>
      </motion.div>
    </section>
  );
};