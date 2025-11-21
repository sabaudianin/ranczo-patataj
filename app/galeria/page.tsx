// app/gallery/page.tsx
import Script from "next/script";

export default function GalleryPage() {
  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Galeria – Nazwa Twojej Firmy",
    url: "https://twojadomena.pl/gallery",
  };

  return (
    <>
      <Script
        id="gallery-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />

      <section className="grid place-items-center">GALERIA TU BEDZIE</section>
    </>
  );
}
