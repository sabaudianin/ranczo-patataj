"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full pb-8 md:py-12 overflow-hidden"
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-center">


          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left ">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <span className="font-ultra text-amber-500 uppercase tracking-[3px]">
                Witaj w Jastrzębi Starej
              </span>
              <h1
                id="hero-heading"
                className="font-ultra text-3xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-50 leading-tight"
              >
                Ranczo Patataj <br />
                <span className="font-curier text-2xl md:text-4xl lg:text-5xl text-emerald-700 dark:text-emerald-500 block mt-2">
                  gospodarstwo edukacyjne
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-curier text-sm md:text-base text-stone-700 dark:text-stone-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Miejsce, gdzie natura spotyka się z edukacją. Organizujemy
              <span className="text-stone-700 dark:text-stone-200 font-ultra"> wycieczki szkolne, warsztaty i alpakoterapię </span>
              zaledwie godzinę drogi od Warszawy. Poczuj spokój mazowieckiej wsi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 items-center lg:items-start"
            >
              <Link
                href="/oferta"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500/70 text-white font-ultra text-xs md:text-sm hover:bg-amber-800/60 transition-all shadow-lg"
              >
                ZOBACZ OFERTĘ
              </Link>
              <Link
                href="/ranczo"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 bg-stone-100 border-stone-200 text-stone-900 font-ultra text-xs md:text-sm hover:border-amber-400 transition-all"
              >
                POZNAJ RANCZO
              </Link>
            </motion.div>
          </div>


          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group p-2"
            >

              <div className="relative aspect-4/5 md:aspect-square bg-white p-3 pb-10 shadow-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500 border border-stone-100">
                <div className="relative h-full w-full overflow-hidden rounded-sm bg-stone-200">

                  <video
                    className="absolute h-full min-w-[120%] w-auto max-w-none object-cover animate-pan-video"
                    src="/videos/alpaki-mogielnica.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/alpaki-na-ranczu-patataj-mazowieckie.avif"
                  />

                  <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
                </div>

                <p className="absolute bottom-2 left-0 w-full text-center font-curier text-stone-500 text-sm md:text-base">
                  Nasze radosne trio alpak
                </p>
              </div>


              <motion.a
                whileHover={{ scale: 1.05 }}
                href={PHONETO}
                className="absolute -bottom-8 right-4 md:-right-4 flex items-center gap-3 px-5 py-3 bg-emerald-600/90 text-white rounded-xl shadow-xl font-curier font-bold text-sm md:text-base group"
              >
                <FaPhone className="animate-bounce group-hover:animate-none" />
                <span>{CONTACT.phoneDisplay}</span>
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};