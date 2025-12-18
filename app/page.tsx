import Script from "next/script";
import type { Metadata } from "next";
import {
  createLocalBusinessJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo/schema";
import { CONTACT } from "@/config/contact/Contact";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { Features } from "@/components/featurs/Features";
import { Cta } from "@/components/cta/Cta";
import { Final } from "@/components/final/Final";
import { MiniGallery } from "@/ui/miniGallery/MiniGallery";
import { Social } from "@/components/social/Social";
import { Poster } from "@/components/poster/Poster";
import { AlpakoTerapy } from "@/components/alpakoterapy/AlpakoTerapy";
import { Atrakcje } from "../components/atrakcje/Atrakcje";
import { Visit } from "@/components/visit/Visit";
import { Hero } from "@/components/hero/Hero";

export const metadata: Metadata = {
  // Podstawowy tytuł strony głównej
  title: "Ranczo Patataj - gospodarstwo edukacyjne dla szkół i rodzin",
  description:
    "Ranczo Patataj to gospodarstwo edukacyjne w Jastrzębi Starej koło Mogielnicy. Organizujemy warsztaty, spotkania ze zwierzętami, gry terenowe, ogniska i imprezy okolicznościowe dla szkół, przedszkoli i rodzin.",

  // Żeby Google wiedział który URL jest kanoniczny dla Home
  alternates: {
    canonical: "/",
  },

  // OG
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ranczo Patataj - Gospodarstwo Edukacyjne",
    title: "Ranczo Patataj - gospodarstwo edukacyjne dla szkół i rodzin",
    description:
      "Gospodarstwo edukacyjne w Jastrzębi Starej koło Mogielnicy. Warsztaty, spotkania ze zwierzętami, gry terenowe, ogniska i imprezy okolicznościowe dla szkół, przedszkoli i rodzin.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ranczo Patataj - gospodarstwo edukacyjne z alpakami, mazowieckie niedaleko Warszawy",
      },
    ],
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Ranczo Patataj - gospodarstwo edukacyjne dla szkół i rodzin",
    description:
      "Warsztaty edukacyjne, spotkania ze zwierzętami, gry terenowe i ogniska dla szkół, przedszkoli i rodzin w Ranczo Patataj.",
    images: ["/og.jpg"],
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
    "Alpaki",
  ],
};

export default function Home() {
  const webPageJsonLd = createWebPageJsonLd({
    name: "Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: "https://ranczopatataj.pl",
    description:
      "Ranczo Patataj to gospodarstwo edukacyjne dla szkół, rodzin i grup zorganizowanych. Warsztaty, spotkania ze zwierzętami, gry terenowe, ogniska i imprezy okolicznościowe.",
  });

  const localBusinessJsonLd = createLocalBusinessJsonLd({
    name: "Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: "https://ranczopatataj.pl",
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    image: "https://ranczopatataj.pl/og.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jastrzębia Stara 9",
      addressLocality: "Mogielnica",
      postalCode: "05-640",
      addressCountry: "PL",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/PatatajRanczo/",
      "https://www.instagram.com/ranczopatataj",
    ],
  });

  return (
    <>
      <Script
        id="home-webpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />

      <Script
        id="home-localbusiness-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <section className="relative px-2 pt-24 md:pt-0 pb-4 dark:bg-black bg-[var(--background)] mx-auto ">
        <Hero />
        <Atrakcje />
        <AlpakoTerapy />
        <MiniGallery />
        <Visit />
        <Cta />
        <Poster />
        <Social />
        <Features />
        <Testimonial />
        <Final />
      </section>
    </>
  );
}
