import Script from "next/script";
import Image from "next/image";
import { createAboutPageJsonLd } from "@/lib/seo/schema";
import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO, MAILTO } from "@/config/contact/Contact";

export const metadata = {
  title: "O nas  Ranczo Patataj",
  description:
    "Poznaj historię Rancza Patataj, nasze wartości i misję gospodarstwa edukacyjnego.",
};

export default function Ranczo() {
  const aboutJsonLd = createAboutPageJsonLd({
    name: "O nas - Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: "https://twojadomena.pl/ranczo",
  });

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <section className="pt-24 md:py-4 max-w-7xl mx-auto px-3">
        <h1
          id="ranczo-heading"
          className="font-ultra text-2xl md:text-3xl text-center mb-4"
        >
          Ranczo Patataj to miejsce, do którego chce się wracać
        </h1>
        <p className="font-special text-center max-w-3xl mx-auto text-sm md:text-base">
          Ranczo Patataj to kameralne, rodzinne miejsce, w którym łączymy
          bliskość natury, kontakt ze zwierzętami i spokojną, sielską atmosferę.
          To przestrzeń stworzona do odpoczynku, zabawy oraz mądrego poznawania
          świata przez dzieci i dorosłych.
        </p>
        <div className=" w-full text-center">
          <Image
            src="/avatar/horseSide.avif"
            height={160}
            width={160}
            alt="Avatar dwóch koni"
            className="mx-auto h-auto w-auto"
          />
        </div>
        {/* MISJA  */}
        <article
          className="grid gap-8 md:grid-cols-2 items-start mb-12"
          aria-label="Misja i wartości Rancza"
        >
          <div>
            <h2 className="font-ultra text-xl mb-3">Nasza misja</h2>

            <p className="font-special text-sm md:text-base mb-3">
              Wierzymy, że kontakt z naturą i zwierzętami wycisza, uczy
              wrażliwości i pomaga złapać oddech od codziennego pośpiechu.
              Dlatego tworzymy miejsce, w którym można:
            </p>
            <ul className="font-special text-sm md:text-base list-disc list-inside space-y-1">
              <Image
                src="/avatar/brown.avif"
                height={60}
                width={60}
                alt="Avatar brazowej alpaki"
                className="float-right md:float-left md:mr-2 h-auto w-auto"
              />
              <li>spędzić czas z alpakami, końmi i innymi zwierzętami,</li>
              <li>poczuć prawdziwą atmosferę wsi i gospodarstwa,</li>
              <li>doświadczyć spokoju, którego tak brakuje w mieście,</li>
              <li>uczyć dzieci szacunku do przyrody i żywych istot.</li>
            </ul>
            <div className="clear-both" />
          </div>

          <div>
            <h2 className="font-ultra text-xl mb-3">
              Dlaczego alpaki i zwierzaki?
            </h2>
            <p className="font-special text-sm md:text-base mb-3">
              Alpaki i inne mieszkające u nas zwierzęta są łagodne, ciekawe
              świata i przyjazne ludziom. Ich obecność:
            </p>
            <ul className="font-special text-sm md:text-base list-disc list-inside space-y-1">
              <Image
                src="/avatar/black.avif"
                height={90}
                width={90}
                alt="Avatar czarnej alpaki"
                className="float-left aspect-[3/4] mr-2 h-auto w-auto"
              />
              <li>pomaga redukować stres i napięcie,</li>
              <li>dodaje odwagi dzieciom nieśmiałym lub wrażliwym,</li>
              <li>ułatwia integrację grupy i buduje więzi,</li>
              <li>
                sprawia, że każdy wyjazd staje się niezapomnianą przygodą.
              </li>
            </ul>
            <div className="clear-both" />
          </div>
        </article>

        {/*  DLA KOGO */}
        <article
          className="mb-12"
          aria-label="Dla kogo jest Ranczo Patataj"
        >
          <h2 className="font-ultra text-xl mb-3 text-center">
            Dla kogo jest nasze ranczo?
          </h2>
          <div className="grid gap-6 md:grid-cols-3 font-special text-sm md:text-base">
            <div className="rounded-3xl border border-amber-300/60 bg-amber-300/10 p-4 h-full">
              <h3 className="font-ultra text-base mb-2">
                Dla szkół i przedszkoli
              </h3>
              <p>
                Miejsce idealne na wycieczki edukacyjne, zielone szkoły i
                wyjazdy integracyjne. Dzieci poznają życie na wsi, uczą się
                poprzez zabawę i przeżywają prawdziwą przygodę w naturze.
              </p>
            </div>
            <div className="rounded-3xl border border-pink-300/60 p-4 h-full bg-pink-300/10">
              <h3 className="font-ultra text-base mb-2">Dla rodzin i dzieci</h3>
              <p>
                Weekendowy wypad, rodzinny spacer z alpakami, urodziny wśród
                zwierzaków, a to wszystko tworzy wyjątkowe wspomnienia i
                zacieśnia relacje najbliższych.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-300/60 p-4 h-full bg-emerald-300/10">
              <h3 className="font-ultra text-base mb-2">
                Dla firm i dorosłych
              </h3>
              <p>
                Kameralne eventy, integracje w stylu slow, spotkania z dala od
                biura. Przy ognisku, w rustykalnej sali lub w ogrodzie, tak
                rodzą się dobre pomysły i lepsza atmosfera w zespole.
              </p>
            </div>
          </div>
        </article>

        {/* ATMOSFERA */}
        <article
          className="mb-6"
          aria-label="Atmosfera na Ranczo Patataj"
        >
          <h2 className="font-ultra text-xl mb-3">
            Co wyróżnia Ranczo Patataj?
          </h2>
          <ul className="font-special text-sm md:text-base list-disc list-inside space-y-1">
            <Image
              src="/avatar/lamaFront.avif"
              height={60}
              width={60}
              alt="Avatar lamy z przodu"
              className="float-right h-auto w-auto"
            />
            <li>
              Kameralne, rodzinne podejście, tu każdy gość jest dla nas ważny.
            </li>
            <li>
              Bliskość natury, łąki, przestrzeń, świeże powietrze i prawdziwy
              spokój.
            </li>
            <li>
              Zwierzęta, które znają ludzi i są przyzwyczajone do kontaktu z
              dziećmi.
            </li>
            <li>
              Możliwość połączenia wypoczynku, edukacji i terapii przez kontakt
              ze zwierzętami.
            </li>
            <li>
              Duża elastyczność - dopasowujemy program do wieku, potrzeb i
              oczekiwań grupy.
            </li>
          </ul>
          <div className="clear-both" />
        </article>

        <Image
          src="/avatar/goat.avif"
          height={100}
          width={100}
          alt="Po prostu GOAT"
          className="mx-auto h-auto w-auto"
        />

        {/* KONTAKT */}
        <article
          className="mt-8"
          aria-label="Kontakt z Ranczo Patataj"
        >
          <h2 className="font-ultra text-xl mb-2 text-center">
            Chcesz nas odwiedzić?
          </h2>
          <p className="font-special text-center text-sm md:text-base mb-4 max-w-2xl mx-auto">
            Napisz lub zadzwoń, opowiedz nam o swojej grupie, a my pomożemy
            zaplanować idealną wizytę na Ranczo Patataj, niezależnie, czy
            szukasz wycieczki, urodzin, czy kameralnego spotkania w naturze.
          </p>

          <div className="flex flex-col justify-center items-center gap-2">
            <a
              href={PHONETO}
              className="inline-flex items-center gap-2 hover:shadow-md font-special font-black md:text-xl px-4 py-2 hover:text-emerald-200 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]"
              aria-label="Zadzwoń do Ranczo Patataj"
            >
              <FaPhone
                className="self-start"
                aria-hidden="true"
                focusable="false"
              />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={MAILTO}
              className="underline underline-offset-2 hover:text-[var(--c-primary)] font-special text-sm"
              aria-label="Napisz wiadomość e-mail do Ranczo Patataj"
            >
              {CONTACT.email}
            </a>
          </div>
        </article>
        <Image
          src="/avatar/hen.avif"
          height={100}
          width={100}
          alt="Biała Kura"
          className="mx-auto my-2 h-auto w-auto"
        />
      </section>
    </>
  );
}
