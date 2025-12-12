import React from "react";

import Link from "next/link";

import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";
import { Card } from "@/ui/card/Card";

export const Hero: React.FC = () => {
  return (
    <section
      className="pb-4"
      aria-labelledby="promo-heading"
      role="banner"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <article className="max-w-hd mx-auto relative">
        <h1
          id="promo-heading"
          className="max-w-3xl mx-auto md:mt-8 md:mb-4 font-ultra  text-slate-900 dark:text-slate-50 text-lg md:text-2xl xl:text-3xl text-center"
          itemProp="name"
        >
          Ranczo Patataj - gospodarstwo edukacyjne.
        </h1>

        <Card className="md:my-8">
          <p className=" text-xs md:text-base xl:text-lg  max-w-5xl font-curier text-center">
            Ranczo Patataj to gospodarstwo edukacyjne w Jastrzębi Starej koło
            Mogielnicy, w województwie mazowieckim. Organizujemy wycieczki
            szkolne, warsztaty edukacyjne, spotkania ze zwierzętami i
            alpakoterapię dla szkół, przedszkoli, rodzin i grup zorganizowanych,
            zaledwie godzinę drogi od Warszawy.
          </p>
        </Card>

        <div className="relative w-full h-48 md:h-80  overflow-hidden rounded-xl">
          <video
            className="w-full h-full rounded-2xl shadow-xl"
            src="/videos/Film.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/trioAlpak.avif"
            aria-hidden="true"
            tabIndex={-1}
          ></video>
        </div>

        <div className="flex h-full flex-col items-center justify-between text-center gap-4 mt-4 md:mt-8">
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center pb-1">
            <div>
              <Link
                href="/oferta"
                className="mr-1 inline-flex items-center justify-center px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 border border-emerald-700/90 shadow-md hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]  text-xs md:text-sm lg:text-base text-white font-curier"
              >
                Zobacz ofertę
              </Link>

              <Link
                href="/ranczo"
                className="ml-1 inline-flex items-center justify-center px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-md hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] text-xs md:text-sm lg:text-base  font-curier text-white"
              >
                Poznaj Ranczo
              </Link>
            </div>

            <a
              href={PHONETO}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 border rounded-xl border-stone-900 bg-stone-800/80 hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] text-xs md:text-sm lg:text-base  font-semibold font-curier text-white"
              aria-label={`Zadzwoń pod numer ${CONTACT.phoneDisplay}, aby zarezerwować termin w Ranczo Patataj`}
              itemProp="telephone"
            >
              <FaPhone
                className="animate-pulse"
                aria-hidden="true"
              />
              <span>Zadzwoń: {CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
