import Script from "next/script";
import { createGalleryPageJsonLd } from "@/lib/seo/schema";

export const metadata = {
  title: "Galeria - Ranczo Patataj",
  description: "Zdjęcia z zajęć, warsztatów i życia na Ranczo Patataj.",
};

export default function GalleryPage() {
  const galleryJsonLd = createGalleryPageJsonLd({
    name: "Galeria - Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: "https://twojadomena.pl/gallery",
  });

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
