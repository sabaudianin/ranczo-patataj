import Script from "next/script";
import { createServicesItemListJsonLd } from "@/lib/seo/schema";

export const metadata = {
  title: "Oferta - Ranczo Patataj",
  description: "Zajęcia edukacyjne, warsztaty i atrakcje na Ranczo Patataj.",
};

export default function Oferta() {
  const servicesJsonLd = createServicesItemListJsonLd([
    {
      name: "Zajęcia edukacyjne dla szkół i przedszkoli",
      description:
        "Program dostosowany do wieku dzieci, kontakt ze zwierzętami, zabawy ruchowe.",
    },
    {
      name: "Warsztaty tematyczne na ranczu",
      description:
        "Zajęcia o życiu na wsi, opiece nad zwierzętami i przyrodzie.",
    },
    {
      name: "Urodziny na ranczu",
      description:
        "Organizacja przyjęć urodzinowych z animacjami i atrakcjami na świeżym powietrzu.",
    },
  ]);

  return (
    <>
      <Script
        id="services-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <div className="py-24 md:py-4 max-w-7xl mx-auto px-4">
        <h1 className="text-center font-ultra text-xl">
          Nasza aktualna oferta:
        </h1>
        <p className="font-semibold py-2 text-center">
          🚌 Każdą ofertę możemy uzupełnić możliwością transportu !!
        </p>
        <hr className="m-2" />
        <ul className="p-2 font-special">
          <span className="font-semibold">
            {" "}
            Oferta dla szkół i przedszkoli:
          </span>
          <li className="text-xs"></li>
          <li>🗸 Warsztaty kulinarne</li>
          <li>🗸 Warsztaty manualne</li>
          <li>
            🗸 Zajecia ze zwierzętami w zagrodzie, głaskanie, przytulanie,
            karmienie
          </li>
          <li>
            🗸 Lamoterapia, alpakoterapia, hipoterapia, dogoterapia i rodoterapia
          </li>
          <li>🗸 Spacer po edukacyjnej ścieżce wśród łąk i pól</li>
          <li>🗸 Poznanie życia na wsi</li>

          <li>🗸 Gry i zabawy terenowe</li>
          <li>🗸 Ognisko i pieczenie kiełbasek</li>
        </ul>
        <hr className="m-2" />
        <ul className="px-2 py-4 font-special">
          <span className="font-semibold">Oferta Urodzinowa</span>
          <li>🥳 Tematyczne dekoracje</li>
          <li>🥳 Zwierzaki, wizyta w zagrodzie , spacer ze zwierzętami</li>
          <li>🥳 Animacje i gry na świeżym powietrzu </li>
          <li> 🥳 Przestrzeń do zdjęć i rodzinnych pamiątek </li>
          <li>🥳 Kameralną, magiczną atmosferę</li>
          <li>🥳 Plac zabaw, boisko</li>
        </ul>

        <hr className="m-2" />
        <ul className="px-2 py-4 font-special list-disc">
          <span className="font-semibold">Oferta dla Firm</span>
          <li>Obiekt na wyłączność</li>
          <li>Obcowanie ze zwierzętami, wizyta w zagrodzie</li>
          <li>Przejażdżka bryczką</li>
          <li>Ognisko </li>
          <li>Rustykalna Sala</li>
          <li>Zimowy ogród </li>
          <li>Prywatna przestrzeń zewnętrzna</li>
          <li>Gwarantujemy sielski klimat i bliskość natury</li>
        </ul>
        <hr className="m-2" />
        <ul className="font-special">
          <span>Każdą oferte można dostosować do własnych potrzeb</span>
          <li>Sesje zdjęciowe</li>
          <li>Imprezy okolicznościowe</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
