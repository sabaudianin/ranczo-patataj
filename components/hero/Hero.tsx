import React from "react";

import Link from "next/link";

import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";
import { Card } from "@/ui/card/Card";

export const Hero: React.FC = () => {
  return (
    <section
      className="mb-6"
      aria-labelledby="promo-heading"
      role="banner"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <article className="max-w-hd mx-auto relative">
        <h1
          id="promo-heading"
          className="max-w-3xl mx-auto md:mt-8 md:mb-4 font-ultra   text-lg md:text-2xl xl:text-3xl text-center text-[var(--c-primary)]"
          itemProp="name"
        >
          Ranczo Patataj - gospodarstwo edukacyjne.
        </h1>

        <Card className="md:my-8">
          <p className="md:text-sm xl:text-lg  max-w-5xl mx-auto font-curier text-center">
            Ranczo Patataj to gospodarstwo edukacyjne w Jastrzębi Starej koło
            Mogielnicy, w województwie mazowieckim. Organizujemy wycieczki
            szkolne, warsztaty edukacyjne, spotkania ze zwierzętami i
            alpakoterapię dla szkół, przedszkoli, rodzin i grup zorganizowanych,
            zaledwie godzinę drogi od Warszawy.
          </p>
        </Card>

        <div className="relative w-full h-48 md:h-80 overflow-hidden rounded-xl">
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

        <div className="w-full flex flex-col md:flex-row gap-2 items-center justify-center my-4">
          <div className="flex justify-center items-center gap-4">
            <Link
              href="/oferta"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 border border-emerald-700/90 shadow-md hover:scale-101 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] text-sm lg:text-md text-white font-curier font-semibold"
            >
              Zobacz ofertę
            </Link>

            <Link
              href="/ranczo"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-md hover:scale-101 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] text-sm lg:text-md  font-curier text-white font-semibold"
            >
              Poznaj Ranczo
            </Link>
          </div>
          <div className="text-center">
            <a
              href={PHONETO}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--c-primary)] rounded-xl bg-stone-700/80 hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2  hover:scale-101 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] lg:text-md  font-semibold font-curier text-white"
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
