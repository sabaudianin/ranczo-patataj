import Script from "next/script";
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

export default function Home() {
  const webPageJsonLd = createWebPageJsonLd({
    name: "Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: "https://twojadomena.pl/",
    description:
      "Ranczo Patataj to gospodarstwo edukacyjne dla szkół, rodzin i grup zorganizowanych. Warsztaty, spotkania ze zwierzętami, gry terenowe, ogniska i imprezy okolicznościowe.",
  });

  const localBusinessJsonLd = createLocalBusinessJsonLd({
    name: "Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: "https://twojadomena.pl",
    telephone: CONTACT.phoneRaw,
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
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />

      <Script
        id="home-localbusiness-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
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
