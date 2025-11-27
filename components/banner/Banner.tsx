import React from "react";

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
      className=""
      aria-labelledby="promo-heading"
      role="banner"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <article className="max-w-hd mx-auto ">
        <div
          className="bg-[url('/images/polewies.avif')] bg-cover bg-center bg-no-repeat object-scale-down h-100 "
          aria-hidden="true"
        >
          <div className="relative bg-black/50 px-2 py-4">
            <h1
              id="promo-heading"
              className=" font-ultra text-center text-[var(--c-primary)] text-xl md:text-2xl xl:text-3xl mx-auto "
              itemProp="name"
            >
              <span className="block ">
                Ranczo Patataj - gospodarstwo edukacyjne
              </span>
              <span className="block text-sm md:text-base xl:text-lg  text-white pt-1">
                dla szkół, rodzin i grup zorganizowanych
              </span>
            </h1>

            <a
              href={PHONETO}
              className="absolute right-2 -bottom-14 z-20  py-2 px-4 bg-[var(--c-primary)]/50 hover:scale-105 transition-all duration border border-[var(--c-primary)] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]  text-xs md:text-xl font-semibold text-white font-curier "
              aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
              itemProp="telephone"
            >
              <div className="flex justify-center items-center">
                <FaPhone
                  className="self-start animate-pulse"
                  aria-hidden="true"
                />
                <span className="ml-2">
                  <span className="inline lg:hidden">Zarezerwuj termin</span>

                  <span className="hidden lg:inline">
                    {CONTACT.phoneDisplay}
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
