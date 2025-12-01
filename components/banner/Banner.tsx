import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";

export const metadata: Metadata = {
  // Podstawowy tytuł strony głównej
  title: "Ranczo Patataj - gospodarstwo edukacyjne dla szkół i rodzin",
  description:
    "Ranczo Patataj to gospodarstwo edukacyjne w Jastrzębi Starej koło Mogielnicy. Organizujemy warsztaty, spotkania ze zwierzętami, gry terenowe, ogniska i imprezy okolicznościowe dla szkół, przedszkoli i rodzin.",

  // Żeby Google wiedział który URL jest kanoniczny dla Home
  alternates: {
    canonical: "https://twojadomena.pl/",
  },

  // OG
  openGraph: {
    type: "website",
    url: "https://twojadomena.pl/",
    siteName: "Ranczo Patataj - Gospodarstwo Edukacyjne",
    title: "Ranczo Patataj - gospodarstwo edukacyjne dla szkół i rodzin",
    description:
      "Gospodarstwo edukacyjne w Jastrzębi Starej koło Mogielnicy. Warsztaty, spotkania ze zwierzętami, gry terenowe, ogniska i imprezy okolicznościowe dla szkół, przedszkoli i rodzin.",
    images: [
      {
        url: "https://twojadomena.pl/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Dzieci uczestniczące w warsztatach na Ranczo Patataj - gospodarstwo edukacyjne",
      },
    ],
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Ranczo Patataj - gospodarstwo edukacyjne dla szkół i rodzin",
    description:
      "Warsztaty edukacyjne, spotkania ze zwierzętami, gry terenowe i ogniska dla szkół, przedszkoli i rodzin w Ranczo Patataj.",
    images: ["https://twojadomena.pl/og-image-home.jpg"],
  },

  // sygnał dla robotów
  robots: {
    index: true,
    follow: true,
  },

  // opcj frazy kluczowe
  keywords: [
    "gospodarstwo edukacyjne",
    "warsztaty dla szkół",
    "wycieczki szkolne",
    "wyjazd integracyjny",
    "rodzinne atrakcje",
    "Ranczo Patataj",
    "Mogielnica",
  ],
};

export const Banner: React.FC = () => {
  return (
    <section
      className="pb-4"
      aria-labelledby="promo-heading"
      role="banner"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <article className="max-w-hd mx-auto relative">
        <div className="h-120 relative">
          <Image
            src="/images/polewies.avif"
            alt="Pejzaż Pół i lasów"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-black/45">
          <div className="flex h-full flex-col items-center justify-center px-4 py-6 text-center">
            <h1
              id="promo-heading"
              className="font-ultra text-[var(--c-primary)] text-lg md:text-2xl xl:text-3xl max-w-3xl mx-auto"
              itemProp="name"
            >
              Ranczo Patataj - gospodarstwo edukacyjne i rekreacyjne pod
              Warszawą
            </h1>

            <p className="mt-2 text-[0.75rem] md:text-base xl:text-lg text-white max-w-3xl font-curier">
              Spotkania ze zwierzętami, alpakoterapia, warsztaty, ogniska,
              zabawa i odpoczynek dla rodzin, szkół, grup zorganizowanych i
              wszystkich, którzy chcą odetchnąć od codzienności. Tylko godzinę
              drogi od Warszawy.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
              <Link
                href="/oferta"
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-emerald-500/80 hover:bg-emerald-500 border border-[var(--c-primary)] text-xs md:text-sm lg:text-base font-semibold text-white font-curier hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]"
              >
                Zobacz ofertę
              </Link>

              <Link
                href="/ranczo"
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white/80 hover:bg-white border border-[var(--c-primary)] text-xs md:text-sm lg:text-base font-semibold text-[var(--c-primary)] font-curier hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]"
              >
                Poznaj Ranczo
              </Link>
            </div>

            <div className="mt-3">
              <a
                href={PHONETO}
                className="inline-flex items-center justify-center gap-2 text-[0.7rem] md:text-sm text-white/90 font-curier underline-offset-2 hover:underline"
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
        </div>
      </article>
    </section>
  );
};
