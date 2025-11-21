import Script from "next/script";
import { createAboutPageJsonLd } from "@/lib/seo/schema";

export const metadata = {
  title: "O nas  Ranczo Patataj",
  description:
    "Poznaj historię Rancza Patataj, nasze wartości i misję gospodarstwa edukacyjnego.",
};

export default function Ranczo() {
  const aboutJsonLd = createAboutPageJsonLd({
    name: "O nas - Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: "https://twojadomena.pl/onas",
  });

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
