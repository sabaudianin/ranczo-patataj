"use client";
import { CONTACT, MAILTO } from "@/config/contact/Contact";
import { motion } from "motion/react";

export const Poster = () => {
  return (
    <section
      className="relative max-w-5xl mx-auto py-10 px-2"
      aria-labelledby="schools-offer-heading"
    >
      <div className="relative overflow-hidden bg-stone-50 dark:bg-stone-900/40 border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-3xl p-6 md:p-10 shadow-sm">
        {/* Dekoracyjny element w tle */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.h6
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-stone-900 dark:text-stone-50 font-ultra text-lg md:text-2xl lg:text-3xl max-w-3xl leading-tight"
            id="schools-offer-heading"
          >
            Oferta dla szkół i przedszkoli <br className="hidden md:block" />
            <span className="text-emerald-700 dark:text-emerald-500 italic font-playwrite text-base md:text-xl">
              – Edukacja przez bliskość natury –
            </span>
          </motion.h6>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl mt-6 space-y-4"
          >
            <p className="font-curier text-sm md:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
              Organizujemy wycieczki szkolne, wizyty przedszkoli oraz warsztaty
              edukacyjne w Jastrzębi Starej koło Mogielnicy. Nasz program
              łączy zabawę z nauką empatii i wiedzą o zwierzętach.
            </p>

            <p className="font-curier text-sm md:text-base text-stone-600 dark:text-stone-400">
              Napisz do nas, aby otrzymać szczegółową ofertę dopasowaną
              do wieku i potrzeb Waszej grupy.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-8 group"
          >
            <a
              href={MAILTO}
              className="inline-flex flex-col items-center gap-1 group-hover:text-emerald-600 transition-colors"
              aria-label="Napisz wiadomość e-mail do Ranczo Patataj"
            >
              <span className="text-xs font-ultra uppercase tracking-widest text-stone-400 group-hover:text-emerald-500">Napisz do nas:</span>
              <span className="font-special text-lg md:text-2xl border-b-2 border-amber-400 pb-1">
                {CONTACT.email}
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};