import Script from "next/script";
import { createServicesItemListJsonLd } from "@/lib/seo/schema";
import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO, MAILTO } from "@/config/contact/Contact";

export const metadata = {
  title: "Oferta - Ranczo Patataj",
  description:
    "Zajęcia edukacyjne, warsztaty, urodziny wśród zwierzaków i oferta dla firm na Ranczo Patataj.",
};

export default function Oferta() {
  const servicesJsonLd = createServicesItemListJsonLd([
    {
      name: "Zajęcia edukacyjne dla szkół i przedszkoli",
      description:
        "Wycieczki edukacyjne na ranczo, kontakt ze zwierzętami, warsztaty kulinarne i manualne, gry terenowe oraz ognisko.",
    },
    {
      name: "Urodziny wśród zwierzaków na ranczu",
      description:
        "Organizacja przyjęć urodzinowych z alpakami i innymi zwierzętami, animacjami, zabawami na świeżym powietrzu i strefą zdjęć.",
    },
    {
      name: "Oferta integracyjna i eventy firmowe",
      description:
        "Kameralne eventy firmowe w naturze: obiekt na wyłączność, kontakt ze zwierzętami, przejażdżka bryczką, ognisko i rustykalna sala.",
    },
    {
      name: "Oferta szyta na miarę",
      description:
        "Sesje zdjęciowe, imprezy okolicznościowe, zaręczyny, pikniki rodzinne oraz wynajem przestrzeni na wydarzenia specjalne.",
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
        aria-label="Oferta Ranczo Patataj"
        aria-labelledby="oferta-heading"
        aria-describedby="oferta-lead"
        itemScope
        itemType="https://schema.org/OfferCatalog"
      >
        <h2
          id="oferta-heding"
          itemProp="name"
          className="text-center font-ultra text-2xl mb-2"
        >
          Nasza aktualna oferta
        </h2>
        <p
          id="oferta-lead"
          className="font-special py-2 text-center"
          itemProp="description"
        >
          🚌 Każdy pakiet możemy wzbogacić o transport, przyjedziemy prosto po
          Was! (oferta ustalana indywidualnie)
        </p>

        <div
          className="flex flex-col justify-center items-center"
          aria-label="Kontakt w sprawie oferty"
        >
          <a
            href={PHONETO}
            className="inline-flex items-center gap-2 hover:shadow-md font-special font-black md:text-xl px-4 py-2 hover:text-emerald-200  transition-all duration focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] "
            aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
            itemProp="telephone"
          >
            <FaPhone
              className="self-start animate-pulse"
              aria-hidden="true"
              focusable="false"
            />
            <span>{CONTACT.phoneDisplay}</span>
          </a>
          <a
            href={MAILTO}
            className="underline underline-offset-2 hover:text-[var(--c-primary)]"
            aria-label="Napisz wiadomość e-mail do Ranczo Patataj"
          >
            {CONTACT.email}
          </a>
        </div>

        <div
          className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          role="list"
          aria-label="Lista dostępnych pakietw"
        >
          {/* SZKOŁY I PRZEDSZKOLA */}
          <article
            className="rounded-3xl border border-amber-300/70 p-5 shadow-md flex flex-col"
            role="listitem"
            aria-labelledby="oferta-szkoly-heading"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Service"
          >
            <h3
              className="font-ultra text-lg mb-1 text-[var(--c-primary)] text-center"
              itemProp="name"
              id="oferta-szkoly-heading"
            >
              Dla szkół i przedszkoli
            </h3>
            <p
              className="text-sm italic py-3 font-special"
              itemProp="description"
            >
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
            <hr className="m-2 text-amber-300/70" />
            <p className=" text-xs  font-special">
              Idealne na wycieczki, zielone szkoły i integrację grup.
            </p>
          </article>

          {/*  URODZINY  */}
          <article
            className="rounded-3xl border border-pink-300/70 p-5 shadow-md flex flex-col"
            role="listitem"
            aria-labelledby="oferta-urodziny-heading"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Service"
          >
            <h3
              className="font-ultra text-lg mb-1 text-pink-600 text-center"
              id="oferta-urodziny-heading"
              itemProp="name"
            >
              Urodziny wśród zwierzaków
            </h3>
            <p
              className="text-sm italic py-3 font-special"
              itemProp="description"
            >
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
            <hr className="m-2 text-amber-300/70" />
            <p className=" text-xs font-special">
              Możliwość zamówienia tortu, poczęstunku oraz personalizowanych
              atrakcji.
            </p>
          </article>

          {/* OFERTA DLA FIRM */}
          <article
            className="rounded-3xl border border-emerald-300/70 p-5 shadow-md flex flex-col"
            role="listitem"
            aria-labelledby="oferta-firmy-heading"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Service"
          >
            <h3
              className="font-ultra text-lg mb-1 text-emerald-700 text-center"
              id="oferta-firmy-heading"
              itemProp="name"
            >
              Oferta dla firm
            </h3>
            <p
              className="text-sm italic py-3 font-special"
              itemProp="description"
            >
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
            <hr className="m-2 text-emerald-300/70" />
            <p className=" text-xs font-special">
              Świetna propozycja na integracje, małe eventy firmowe i spotkania
              w stylu slow.
            </p>
          </article>

          {/* KARTA: OFERTA SZYTA NA MIARĘ */}
          <article
            className=" rounded-3xl border border-blue-300/70 p-5 shadow-md flex flex-col  xl:col-span-3"
            role="listitem"
            aria-labelledby="oferta-szyta-heading"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Service"
          >
            <h3
              className="font-ultra text-lg mb-1 text-blue-300 text-center"
              id="oferta-szyta-heading"
              itemProp="name"
            >
              Oferta szyta na miarę
            </h3>
            <p
              className="text-sm italic py-3 font-special"
              itemProp="description"
            >
              Masz swój pomysł na wyjątkowy dzień na ranczu? Chętnie go
              zrealizujemy!
            </p>
            <ul className="font-special text-sm space-y-1">
              <li>
                📸 Sesje zdjęciowe z alpakami (rodzinne, narzeczeńskie,
                dziecięce)
              </li>
              <li>🎉 Imprezy okolicznościowe - chrzciny, komunie, rocznice</li>
              <li>💍 Romantyczne zaręczyny w otoczeniu natury</li>
              <li>🎬 Wynajem przestrzeni do nagrań i projektów kreatywnych</li>
              <li>🌳 Pikniki rodzinne i kameralne spotkania w plenerze</li>
            </ul>
            <hr className="m-2 text-blue-300/70" />
            <p className=" font-special">
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
