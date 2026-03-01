"use client";
import React from "react";
import { Card } from "@/ui/card/Card";
import { motion } from "motion/react";

export const Social = () => {
  return (
    <section className="mx-auto max-w-6xl py-8 space-y-10">
      <Card className=" border-none bg-stone-50/50 dark:bg-stone-900/30">
        <div className="flex flex-col items-center text-center space-y-4">
          <h6 className="font-ultra text-xl md:text-3xl text-stone-900 dark:text-stone-50">
            Zostańmy w kontakcie!
          </h6>

          <p className="font-curier text-sm md:text-base max-w-2xl text-stone-600 dark:text-stone-400">
            Zobacz, co aktualnie dzieje się w naszym gospodarstwie - od nowych
            urodzin alpak po relacje z wycieczek szkolnych i ognisk.
            Promocje i wydarzenia ogłaszamy najpierw tutaj:
          </p>

          <nav
            className="flex items-center justify-center gap-10 pt-4"
            aria-label="Media społecznościowe Ranczo Patataj"
          >
            {[
              {
                href: "https://www.instagram.com/ranczopatataj",
                label: "Instagram",
                iconClass: "bg-[url('/icons/ig.avif')]"
              },
              {
                href: "https://www.facebook.com/PatatajRanczo/",
                label: "Facebook",
                iconClass: "bg-[url('/icons/fb.avif')]"
              }
            ].map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                className="group flex flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-2"
                aria-label={`Profil Ranczo Patataj na ${social.label}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`${social.iconClass} w-12 h-12 md:w-14 md:h-14 bg-cover shadow-lg rounded-2xl group-hover:shadow-emerald-200/50 transition-shadow`}
                  aria-hidden="true"
                />
                <span className="font-ultra text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-stone-600 transition-colors">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </nav>
        </div>
      </Card>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <p className="font-special text-sm md:text-xl text-center leading-relaxed text-stone-800 dark:text-stone-200">
          Zapraszamy rodziny, szkoły i firmy na
          <span className="text-emerald-700 dark:text-emerald-500 font-bold"> warsztaty, ogniska i wspólne chwile </span>
          w sercu Mazowsza. Blisko Warszawy, a jednak w zupełnie innym świecie.
        </p>
      </motion.div>
    </section>
  );
};