import React from "react";
import Image from "next/image";
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
        {/* <div
          className="bg-[url('/images/polewies.avif')] bg-cover bg-center bg-no-repeat object-scale-down h-100 "
          aria-hidden="true"
        > */}
        <div className="h-120 relative">
          <Image
            src="/images/polewies.avif"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute top-0 bg-black/50 px-2 py-4 w-full">
          <h1
            id="promo-heading"
            className=" font-ultra text-center text-[var(--c-primary)]  md:text-2xl xl:text-3xl mx-auto "
            itemProp="name"
          >
            <span className="block ">
              Ranczo Patataj - gospodarstwo edukacyjne dla szkół, rodzin i grup
              zorganizowanych
            </span>
            <span className="block text-sm md:text-base xl:text-lg  text-white pt-1">
              Twoje ulubione miejsce na rodzinny wypad poza miasto, tylko
              godzinę od Warszawy. Zapraszamy przedszkola, szkoły, rodziny i
              grupy na spotkania ze zwierzętami, warsztaty, ogniska i wyjątkowe
              wydarzenia wśród natury.
            </span>
          </h1>
        </div>
        <h3 className=" p-4 font-ultra text-[var(--c-primary)] uppercase text-center md:text-2xl">
          Twoje ulubione miejsce na rodzinny wypad poza miasto, tylko godzinę od
          Warszawy.
        </h3>
        <div className=" p-2 md:w-1/2 lg:w-1/4 mx-auto">
          <a
            href={PHONETO}
            className="inline-flex w-full items-center justify-center gap-2 py-2 px-4 bg-emerald-500/50 hover:bg-emerald-500 hover:scale-105 transition-transform duration-200 border border-[var(--c-primary)] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] text-xs md:text-xl font-semibold text-white font-curier"
            aria-label={`Zadzwoń pod numer ${CONTACT.phoneDisplay}, aby zarezerwować termin w Ranczo Patataj`}
            itemProp="telephone"
          >
            <FaPhone
              className="animate-pulse"
              aria-hidden="true"
            />
            <span className="ml-1">
              <span className="inline lg:hidden">Zarezerwuj termin</span>
              <span className="hidden lg:inline">{CONTACT.phoneDisplay}</span>
            </span>
          </a>
        </div>
      </article>
    </section>
  );
};
