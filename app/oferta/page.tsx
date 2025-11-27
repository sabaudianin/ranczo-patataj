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

      <section
        className="py-24 md:py-12 max-w-7xl mx-auto px-4"
        id="oferta"
      >
        <h2 className="text-center font-ultra text-2xl mb-2">
          Nasza aktualna oferta
        </h2>
        <p className="font-semibold py-2 text-center">
          🚌 Każdy pakiet możemy wzbogacić o transport - przyjedziemy prosto do
          Was! (oferta ustalana indywidualnie)
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* KARTA: SZKOŁY I PRZEDSZKOLA */}
          <article className="rounded-3xl border border-[var(--c-primary)]/40 p-5 shadow-md flex flex-col">
            <h3 className="font-ultra text-lg mb-1 text-[var(--c-primary)]">
              Dla szkół i przedszkoli
            </h3>
            <p className="text-sm italic mb-3 font-special">
              Edukacyjne wycieczki w naturę - nauka przez doświadczenie, ruch i
              kontakt ze zwierzętami.
            </p>
            <ul className="font-special text-sm space-y-1">
              <li>
                🗸 Warsztaty kulinarne - przygotowanie prostych, zdrowych
                przekąsek
              </li>
              <li>
                🗸 Warsztaty manualne - kreatywne prace z naturalnych materiałów
              </li>
              <li>
                🗸 Zajęcia ze zwierzętami - głaskanie, karmienie, nauka empatii
              </li>
              <li>
                🗸 Alpakoterapia, lamoterapia, hipoterapia, dogoterapia,
                rodoterapia
              </li>
              <li>🗸 Edukacyjny spacer po ścieżce wśród łąk i pól</li>
              <li>🗸 Poznanie życia na wsi i pracy w gospodarstwie</li>
              <li>🗸 Gry i zabawy terenowe na świeżym powietrzu</li>
              <li>🗸 Ognisko z pieczeniem kiełbasek lub pianek</li>
            </ul>
            <p className="mt-4 text-xs  font-special">
              Idealne na wycieczki, zielone szkoły i integrację grup.
            </p>
          </article>

          {/* KARTA: URODZINY DZIECIĘCE */}
          <article className="rounded-3xl border border-pink-300/70 p-5 shadow-md flex flex-col">
            <h3 className="font-ultra text-lg mb-1 text-pink-600">
              Urodziny wśród zwierzaków
            </h3>
            <p className="text-sm italic mb-3 font-special">
              Magiczne przyjęcie urodzinowe na ranczu - więcej natury, w
              otoczeniu zwierząt, maksimum radości!
            </p>
            <ul className="font-special text-sm space-y-1">
              <li>
                🥳 Tematyczne dekoracje dopasowane do zainteresowań dziecka
              </li>
              <li>🥳 Spotkanie ze zwierzętami i wizyta w zagrodzie</li>
              <li>🥳 Spacer z alpakami lub końmi</li>
              <li>🥳 Animacje, gry i zabawy na świeżym powietrzu</li>
              <li>🥳 Strefa zdjęć - pamiątkowe fotografie z alpakami</li>
              <li>🥳 Plac zabaw, boisko i dużo przestrzeni do biegania</li>
              <li>🥳 Kameralna, rodzinna atmosfera w otoczeniu natury</li>
            </ul>
            <p className="mt-4 text-xs font-special">
              Możliwość zamówienia tortu, poczęstunku oraz personalizowanych
              atrakcji.
            </p>
          </article>

          {/* KARTA: OFERTA DLA FIRM */}
          <article className=" rounded-3xl border border-emerald-300/70 p-5 shadow-md flex flex-col">
            <h3 className="font-ultra text-lg mb-1 text-emerald-700">
              Oferta dla firm
            </h3>
            <p className="text-sm italic mb-3 font-special">
              Integracja, którą uczestnicy naprawdę zapamiętają. Idealne miejsce
              na eventy firmowe, integracje i spotkania w stylu slow!
            </p>
            <ul className="font-special text-sm space-y-1">
              <li>🏡 Obiekt na wyłączność - prywatna, kameralna przestrzeń</li>
              <li>🦙 Kontakt ze zwierzętami i spacery po zagrodzie</li>
              <li>🚃 Przejażdżka bryczką lub wozem</li>
              <li>🔥 Ognisko i strefa relaksu na świeżym powietrzu</li>
              <li>🏠 Rustykalna sala idealna na szkolenia i warsztaty</li>
              <li>🌿 Zimowy ogród i zielona przestrzeń zewnętrzna</li>
              <li>🤝 Programy integracyjne dopasowane do zespołu</li>
            </ul>
            <p className="mt-4 text-xs font-special">
              Świetna propozycja na integracje, małe eventy firmowe i spotkania
              w stylu slow.
            </p>
          </article>

          {/* KARTA: OFERTA SZYTA NA MIARĘ */}
          <article className=" rounded-3xl border border-amber-300/70 p-5 shadow-md flex flex-col md:col-span-2 xl:col-span-3">
            <h3 className="font-ultra text-lg mb-1 text-amber-700">
              Oferta szyta na miarę
            </h3>
            <p className="text-sm italic mb-3 font-special">
              Masz swój pomysł na wyjątkowy dzień na ranczu? Chętnie go
              zrealizujemy!
            </p>
            <ul className="font-special text-sm space-y-1">
              <li>
                📸 Sesje zdjęciowe z alpakami (rodzinne, narzeczeńskie,
                dziecięce)
              </li>
              <li>🎉 Imprezy okolicznościowe – chrzciny, komunie, rocznice</li>
              <li>💍 Romantyczne zaręczyny w otoczeniu natury</li>
              <li>🎬 Wynajem przestrzeni do nagrań i projektów kreatywnych</li>
              <li>🌳 Pikniki rodzinne i kameralne spotkania w plenerze</li>
            </ul>
            <p className="mt-4 font-special">
              Napisz do nas, opowiedz o swoich potrzebach, a my przygotujemy
              indywidualną propozycję, dopasowaną do liczby osób, wieku
              uczestników i budżetu.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
