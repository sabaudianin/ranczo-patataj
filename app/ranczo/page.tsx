import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { createAboutPageJsonLd } from "@/lib/seo/schema";
import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO, MAILTO } from "@/config/contact/Contact";
import { Card } from "@/ui/card/Card";
import { SITE } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "O nas - Ranczo Patataj gospodarstwo edukacyjne (Mazowieckie)",
  description:
    "Poznaj historię i misję Rancza Patataj - kameralnego gospodarstwa edukacyjnego w Jastrzębi Starej koło Mogielnicy (Mazowieckie). Bliskość natury, alpaki, konie i atrakcje dla szkół, przedszkoli, rodzin oraz firm.",
  alternates: { canonical: "/ranczo" },
  openGraph: {
    url: "/ranczo",
    title: "O nas | Ranczo Patataj",
    description:
      "Historia i misja Rancza Patataj - alpaki, natura i edukacja w mazowieckim, blisko Warszawy.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ranczo Patataj - o nas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

export default function Ranczo() {
  const aboutJsonLd = createAboutPageJsonLd({
    name: "O nas - Ranczo Patataj - Gospodarstwo Edukacyjne",
    url: `${SITE.url}/ranczo`,
  });

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <section className="pt-24 md:py-12 max-w-7xl mx-auto px-4">
        <h1
          id="ranczo-heading"
          className="font-ultra text-2xl md:text-3xl text-center mb-4"
        >
          Ranczo Patataj - gospodarstwo edukacyjne w Jastrzębi Starej koło
          Mogielnicy
        </h1>
        <Card className="font-special text-center max-w-3xl mx-auto text-sm md:text-base">
          Ranczo Patataj to kameralne, rodzinne gospodarstwo edukacyjne w
          Jastrzębi Starej koło Mogielnicy, w województwie mazowieckim. Łączymy
          bliskość natury, kontakt ze zwierzętami i spokojną, sielską atmosferę.
          To przestrzeń stworzona do odpoczynku, zabawy oraz mądrego poznawania
          świata przez dzieci i dorosłych. Mniej niż godzinę drogi od Warszawy.
        </Card>
        <div className="relative w-full h-40 md:h-60 lg:h-96 text-center pt-4">
          <Image
            src="/images/domBokNew.avif"
            fill
            alt="Ranczo widok z ulicy"
            className="rounded-xl object-cover"
            sizes="(min-width: 1024px) 80vw, 100vw"
          />
        </div>
        {/* MISJA  */}
        <article
          className="grid gap-8 md:grid-cols-2 items-start mb-12 pt-8"
          aria-label="Misja i wartości Rancza"
        >
          <div>
            <h2 className="mb-3 font-ultra text-xl text-center">Nasza misja</h2>

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
              <li>
                uczyć dzieci szacunku do przyrody i żywych istot podczas zajęć
                edukacyjnych.
              </li>
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
                sprawia, że każdy wyjazd szkolny, rodzinny czy firmowy, staje
                się niezapomnianą przygodą.
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
                Zajrzyj do{" "}
                <Link
                  href="/oferta#szkola"
                  className="underline underline-offset-2 hover:text-[var(--c-primary)]"
                >
                  oferty dla szkół i przedszkoli
                </Link>
                , aby sprawdzić przykładowe programy.
              </p>
            </div>
            <div className="rounded-3xl border border-pink-300/60 p-4 h-full bg-pink-300/10">
              <h3 className="font-ultra text-base mb-2">Dla rodzin i dzieci</h3>
              <p>
                Weekendowy wypad, rodzinny spacer z alpakami, urodziny wśród
                zwierzaków, to wszystko tworzy wyjątkowe wspomnienia i zacieśnia
                relacje najbliższych. Sprawdź{" "}
                <Link
                  href="/oferta#urodziny"
                  className="underline underline-offset-2 hover:text-[var(--c-primary)]"
                >
                  urodziny wśród zwierząt i ofertę rodzinną
                </Link>
                .
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-300/60 p-4 h-full bg-emerald-300/10">
              <h3 className="font-ultra text-base mb-2">
                Dla firm i dorosłych
              </h3>
              <p>
                Kameralne eventy, integracje w stylu takim jak lubicie,
                spotkania z dala od biura. Przy ognisku, w rustykalnej sali lub
                w ogrodzie, tak rodzą się dobre pomysły i lepsza atmosfera w
                zespole. Zobacz{" "}
                <Link
                  href="/oferta#firma"
                  className="underline underline-offset-2 hover:text-[var(--c-primary)]"
                >
                  ofertę dla firm
                </Link>
                .
              </p>
            </div>
          </div>
        </article>

        <div className="relative w-full h-40 md:h-80 lg:h-96 text-center my-8">
          <Image
            src="/images/ranczoPalenisko.avif"
            fill
            alt="Ranczo widok z ulicy"
            className="mx-auto h-auto w-auto rounded-xl"
          />
        </div>

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
              spokój Mazowsza.
            </li>
            <li>
              Zwierzęta, które znają ludzi i są przyzwyczajone do kontaktu z
              dziećmi.
            </li>
            <li>
              Możliwość połączenia wypoczynku, edukacji i terapii przez kontakt
              ze zwierzętami (w tym elementy alpakoterapii).
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
          <Card className="font-special text-center text-sm md:text-base mb-4 max-w-2xl mx-auto">
            Napisz lub zadzwoń, opowiedz nam o swojej grupie, a my pomożemy
            zaplanować idealną wizytę na Ranczo Patataj, niezależnie, czy
            szukasz wycieczki szkolnej, urodzin wśród zwierząt, czy kameralnego
            spotkania w naturze w mazowieckim.
          </Card>

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
