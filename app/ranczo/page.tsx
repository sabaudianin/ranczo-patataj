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

      <section className="py-24 md:py-4 max-w-7xl mx-auto px-8">
        <div>
          <h2>Witajcie na naszym Ranczu</h2>
        </div>
      </section>
    </>
  );
}
