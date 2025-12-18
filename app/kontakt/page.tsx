import Script from "next/script";
import Image from "next/image";
import { SITE } from "@/lib/seo/site";

import {
  createLocalBusinessJsonLd,
  createContactPageJsonLd,
} from "@/lib/seo/schema";
import { CONTACT, MAILTO, PHONETO } from "@/config/contact/Contact";
import { Card } from "@/ui/card/Card";

export default function Contact() {
  const localBusinessJsonLd = createLocalBusinessJsonLd({
    name: SITE.legalName,
    url: `${SITE.url}/`,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
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

  const contactJsonLd = {
    ...createContactPageJsonLd({
      name: "Kontakt - Ranczo Patataj",
      url: `${SITE.url}/kontakt`,
    }),
    mainEntity: localBusinessJsonLd,
  };

  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <section
        id="contact"
        className="pt-24 md:py-12  max-w-7xl mx-auto p-2 pb-8"
      >
        <h2 className=" text-xl font-special text-center pt-8">
          Gospodarstwo Edukacyjne
        </h2>
        <div className="w-full relative h-20">
          <Image
            src="/images/ranczoZnak.avif"
            alt="Znak Ranczo Patataj z alpakami, w Jastrzębiej starej , koło Mogielnicy , w wojewódzstwie mazowieckim , niedaleko Warszawy"
            fill
            className="object-contain filter sepia-[0.6] contrast-125 brightness-90 saturate-75 rounded-2xl"
          />
        </div>

        <div className="md:flex md:flex-row md:justify-around items-center ">
          <address className="text-center">
            <Card>
              <p className="text-center pb-2">Skontaktuj się z nami :</p>
              <a
                href={PHONETO}
                className="block hover:text-emerald-400 0 transition-all duration text-xs md:text-base font-curier "
                aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
              >
                <span itemProp="telephone">📞 {CONTACT.phoneDisplay}</span>
              </a>
              <a
                href={MAILTO}
                className="block hover:text-[var(--c-primary)] text-xs md:text-base font-curier py-2"
              >
                <span itemProp="email">📧&nbsp;&nbsp;{CONTACT.email}</span>
              </a>
              <p className="py-2 text-xs md:text-base">
                📍 Jastrzębia Stara 9, 05-640 Mogielnica, Polska
              </p>
            </Card>
          </address>
          <div className="flex justify-center items-center gap-8">
            <a
              href="https://www.instagram.com/ranczopatataj"
              className="p-2"
              aria-label="Profil Ranczo Patataj na Instagramie"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <p
                className="bg-[url('/icons/ig.avif')] w-8 h-8 md:h-12 md:w-12 bg-cover"
                aria-hidden="true"
              />{" "}
            </a>
            <a
              href="https://www.facebook.com/PatatajRanczo/"
              className="p-2"
              aria-label="Profil Ranczo Patataj na Facebooku"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <p
                className="bg-[url('/icons/fb.avif')] w-8 h-8 md:h-12 md:w-12 bg-cover "
                aria-hidden="true"
              />{" "}
            </a>
          </div>
        </div>

        <div
          id="mapa"
          className="py-2"
        >
          <h3 className="p-2 text-xl font-curier font-semibold text-center">
            Znajdz nas na mapie:
          </h3>

          <address className="text-center pb-2 ">
            <p>Jastrzębia Stara 9, 05-640 Mogielnica, Polska</p>
          </address>
          <iframe
            id="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.053794512001!2d20.75453567767068!3d51.67715837185244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471904e4c6dda33f%3A0x62b7aa2c83ef1bda!2sJastrz%C4%99bia%20Stara%209%2C%2005-640%20Jastrz%C4%99bia%20Stara!5e0!3m2!1spl!2spl!4v1763727884546!5m2!1spl!2spl"
            width="100%"
            height="200"
            loading="lazy"
            className="rounded md:h-100"
            title="Mapa Dojazdu do Rancza Patataj"
          ></iframe>
        </div>
        <div className="w-full relative h-40 rounded-2xl mt-8">
          <Image
            src="/images/rancz.avif"
            alt="Ranczo widok z ulicy"
            fill
            className="object-cover filter sepia-[0.6] contrast-125 brightness-90 saturate-75 rounded-2xl"
          />
        </div>
      </section>
    </>
  );
}
