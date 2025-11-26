import Script from "next/script";
import {
  createLocalBusinessJsonLd,
  createContactPageJsonLd,
} from "@/lib/seo/schema";
import { CONTACT } from "@/config/contact/Contact";
import { ContactForm } from "./contactForm/ContactForm";

export default function Contact() {
  const contactJsonLd = createContactPageJsonLd({
    name: "Kontakt - Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: "https://twojadomena.pl/contact",
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
  });

  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <section
        id="contact"
        className="grid py-22 max-w-7xl mx-auto p-1  font-play"
      >
        <h2 className="p-2 text-xl font-special text-center">
          Gospodarstwo Edukacyjne - RANCZO PATATAJ
        </h2>
        <p className="text-center font-play pb-2">Skontaktuj się z nami :</p>

        <p className="text-center font-curier">
          Telefonicznie : {CONTACT.phoneDisplay}
        </p>
        <p className="text-center font-curier">Emailem : {CONTACT.email}</p>
        <p className="text-center py-2">lub wypełnij formularz kontaktowy:</p>

        <ContactForm />
        <h3 className="p-2 text-xl font-curier font-semibold text-center">
          Znajdz nas na mapie:
        </h3>
        <address className="text-center py-1 ">
          <p>Jastrzębia Stara 9, 05-640 Mogielnica, Polska</p>
        </address>
        <iframe
          id="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.053794512001!2d20.75453567767068!3d51.67715837185244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471904e4c6dda33f%3A0x62b7aa2c83ef1bda!2sJastrz%C4%99bia%20Stara%209%2C%2005-640%20Jastrz%C4%99bia%20Stara!5e0!3m2!1spl!2spl!4v1763727884546!5m2!1spl!2spl"
          width="100%"
          height="200"
          loading="lazy"
          className="rounded md:h-100"
        ></iframe>
      </section>
    </>
  );
}
