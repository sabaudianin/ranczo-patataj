// app/onas/page.tsx
import Script from "next/script";

export default function Ranczo() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "O nas – Nazwa Twojej Firmy",
    url: "https://twojadomena.pl/onas",
  };

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <section className="grid place-items-center">
        NASZE RANCZO - O NAS{" "}
      </section>
    </>
  );
}
