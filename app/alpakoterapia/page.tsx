import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO, MAILTO } from "@/config/contact/Contact";
import { Card } from "@/ui/card/Card";

export const metadata = {
  title: "Alpakoterapia  spotkania z alpakami w Ranczo Patataj (Mazowieckie)",
  description:
    "Alpakoterapia i spotkania z alpakami w gospodarstwie edukacyjnym Ranczo Patataj w Jastrzębi Starej koło Mogielnicy. Zajęcia dla szkół, przedszkoli, rodzin i grup z Mazowsza.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czym jest alpakoterapia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alpakoterapia to forma zajęć wspierających dobrostan emocjonalny i rozwój społeczny w oparciu o kontakt z alpakami. Łagodne zwierzęta pomagają się wyciszyć, redukują stres, wspierają budowanie odwagi i poczucia bezpieczeństwa.",
      },
    },
    {
      "@type": "Question",
      name: "Dla kogo jest alpakoterapia w Ranczo Patataj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alpakoterapia w Ranczo Patataj jest przeznaczona dla dzieci, młodzieży i dorosłych, a szczególnie dla osób wrażliwych, nieśmiałych, przebodźcowanych, a także grup szkolnych i przedszkolnych, które potrzebują wyjazdu pełnego spokoju i natury.",
      },
    },
    {
      "@type": "Question",
      name: "Jak wygląda spotkanie z alpakami na Ranczo Patataj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spotkanie zwykle obejmuje powitanie i krótkie wprowadzenie, zasady bezpiecznego kontaktu, karmienie i głaskanie alpak, spokojne ćwiczenia przy zwierzętach, spacer oraz czas na zdjęcia i swobodną obecność wśród zwierząt.",
      },
    },
    {
      "@type": "Question",
      name: "Czy alpakoterapia jest bezpieczna dla dzieci?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, nasze alpaki są przyzwyczajone do kontaktu z dziećmi i grupami. Zajęcia odbywają się pod opieką doświadczonych opiekunów, a program dostosowujemy do wieku i potrzeb uczestników.",
      },
    },
  ],
};

export default function Alpakoterapia() {
  return (
    <>
      <Script
        id="faq-alpakoterapia-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="pt-24 md:py-12 max-w-7xl mx-auto px-4 pb-10">
        <article
          className="grid gap-8 md:grid-cols-2 items-center mb-10"
          aria-labelledby="alpakoterapia-heading"
        >
          <div>
            <h1
              id="alpakoterapia-heading"
              className="font-ultra text-2xl md:text-3xl mb-3 text-center md:text-left"
            >
              Alpakoterapia w Ranczo Patataj - spotkania z alpakami w
              mazowieckim
            </h1>
            <Card className="font-special text-sm md:text-base mb-4">
              Alpakoterapia w Ranczo Patataj w Jastrzębi Starej koło Mogielnicy
              to zajęcia, podczas których dzieci i dorośli spędzają spokojny
              czas z łagodnymi alpakami. Kontakt ze zwierzętami pomaga się
              wyciszyć, obniża napięcie, poprawia nastrój i buduje poczucie
              bezpieczeństwa - szczególnie u osób wrażliwych, nieśmiałych albo
              przebodźcowanych codziennym tempem życia.
            </Card>
            <p className="font-special text-xs md:text-sm ">
              Zapraszamy grupy z Warszawy, Grójca, Mogielnicy i całego Mazowsza
              - w kameralnej, rodzinnej atmosferze gospodarstwa edukacyjnego.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:items-center">
              <a
                href={PHONETO}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-900/90 hover:bg-emerald-700 text-white font-special text-sm md:text-base transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-700"
                aria-label={`Zadzwoń pod numer ${CONTACT.phoneDisplay}, aby umówić alpakoterapię w Ranczo Patataj`}
              >
                <FaPhone
                  className="animate-pulse"
                  aria-hidden="true"
                />
                <span>Zadzwoń: {CONTACT.phoneDisplay}</span>
              </a>
              <a
                href={MAILTO}
                className="text-xs md:text-sm underline underline-offset-2 hover:text-[var(--c-primary)] font-curier"
              >
                lub napisz: {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="relative w-full h-56 md:h-80 lg:h-96">
            <Image
              src="/images/trioAlpak.avif"
              fill
              alt="Alpaki na wybiegu podczas zajęć alpakoterapii w Ranczo Patataj"
              className="rounded-2xl object-cover shadow-xl"
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        </article>

        {/* CO DAJE ALPAKOTERAPIA */}
        <article
          className="mb-10"
          aria-label="Korzyści z alpakoterapii"
        >
          <h2 className="font-ultra text-xl mb-3 text-center">
            Co daje alpakoterapia?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 font-special text-sm md:text-base">
            <Card>
              <p className="mb-2">
                Alpakoterapia to łagodna forma wsparcia emocjonalnego, która
                bazuje na naturalnej ciekawości i spokoju alpak. Zwierzęta te
                reagują na obecność człowieka w delikatny sposób, nie narzucają
                się, ale zachęcają do kontaktu.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>pomaga redukować stres i napięcie,</li>
                <li>obniża poziom lęku i wycisza,</li>
                <li>wspiera budowanie odwagi i pewności siebie,</li>
                <li>
                  wzmacnia poczucie sprawczości i sprawia, że dzieci łatwiej się
                  otwierają,
                </li>
                <li>
                  uczy uważności, cierpliwości i delikatności w kontakcie z inną
                  istotą.
                </li>
              </ul>
            </Card>

            <Card>
              <p className="mb-2">
                Zajęcia z udziałem alpak sprawdzają się szczególnie dobrze u:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>dzieci wrażliwych, nieśmiałych lub przebodźcowanych,</li>
                <li>
                  grup, które potrzebują lepszej integracji i spokojnego czasu
                  razem,
                </li>
                <li>osób, które szukają kontaktu z naturą i zwierzętami,</li>
                <li>dzieci i dorosłych żyjących w ciągłym pośpiechu,</li>
                <li>
                  osób, które chcą po prostu odpocząć „głową” i odetchnąć od
                  miasta.
                </li>
              </ul>
            </Card>
          </div>
        </article>

        <div className="relative w-full h-56 md:h-80 lg:h-96">
          <Image
            src="/images/lamawest.jpg"
            fill
            alt="Alpaki na wybiegu podczas zajęć alpakoterapii w Ranczo Patataj"
            className="rounded-2xl object-cover shadow-xl"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>

        {/* JAK WYGLĄDA SPOTKANIE */}
        <article
          className="my-10"
          aria-label="Jak wygląda spotkanie z alpakami?"
        >
          <h2 className="font-ultra text-xl mb-3 text-center">
            Jak wygląda spotkanie z alpakami na Ranczo Patataj?
          </h2>
          <div className="grid gap-4 md:grid-cols-4 font-special text-xs md:text-sm">
            <div className="rounded-3xl border border-emerald-200  p-4 h-full">
              <h3 className="font-ultra text-sm mb-1">1. Powitanie i zasady</h3>
              <p>
                Na początku witamy się z grupą, opowiadamy o alpakach i
                wyjaśniamy zasady spokojnego, bezpiecznego kontaktu ze
                zwierzętami.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/10 p-4 h-full">
              <h3 className="font-ultra text-sm mb-1">
                2. Pierwszy kontakt i karmienie
              </h3>
              <p>
                Uczestnicy podchodzą do alpak, mogą je głaskać, karmić z ręki
                specjalnie przygotowanym pokarmem i obserwować ich zachowanie.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/20 p-4 h-full">
              <h3 className="font-ultra text-sm mb-1">
                3. Ćwiczenia przy alpakach
              </h3>
              <p>
                Proponujemy proste ćwiczenia wyciszające, elementy zabaw
                ruchowych lub spokojnego spaceru, tempo i forma zależą od wieku
                oraz potrzeb grupy.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/30 p-4 h-full">
              <h3 className="font-ultra text-sm mb-1">
                4. Czas na zdjęcia i swobodną obecność
              </h3>
              <p>
                Na koniec jest czas na zdjęcia, przytulanie (jeśli alpaki mają
                na to ochotę) i spokojne bycie w ich towarzystwie oraz w
                przestrzeni rancza.
              </p>
            </div>
          </div>
        </article>
        <div className="flex justfiy-center">
          <div className="relative w-full h-56 md:h-80  rounded-2xl">
            <Image
              src="/images/tbrown.avif"
              fill
              alt="Alpaki na wybiegu podczas zajęć alpakoterapii w Ranczo Patataj"
              className="rounded-2xl object-contain shadow-xl"
            />
          </div>
          <div className="relative w-full h-56 md:h-80">
            <Image
              src="/images/tblack.avif"
              fill
              alt="Alpaki na wybiegu podczas zajęć alpakoterapii w Ranczo Patataj"
              className="rounded-2xl object-contain shadow-xl"
            />
          </div>
        </div>

        {/* DLA KOGO / DLA SZKÓŁ */}
        <article
          className="my-10"
          aria-label="Dla kogo jest alpakoterapia w Ranczo Patataj?"
        >
          <h2 className="font-ultra text-xl mb-3 text-center">
            Dla kogo jest alpakoterapia w Ranczo Patataj?
          </h2>
          <div className="grid gap-6 md:grid-cols-3 font-special text-sm md:text-base">
            <Card>
              <h3 className="font-ultra text-base mb-1 text-center">
                Dla szkół i przedszkoli
              </h3>
              <p>
                Alpakoterapia może być częścią{" "}
                <Link
                  href="/oferta"
                  className="underline underline-offset-2 hover:text-[var(--c-primary)]"
                >
                  wycieczki edukacyjnej
                </Link>{" "}
                na Ranczo Patataj. To spokojny punkt programu, który pomaga
                wyciszyć grupę i daje dzieciom czas na bliski kontakt ze
                zwierzętami.
              </p>
            </Card>

            <Card>
              <h3 className="font-ultra text-base mb-1 text-center">
                Dla rodzin i małych grup
              </h3>
              <p>
                Możecie przyjechać na kameralne spotkanie z alpakami dla dzieci,
                rodziców, dziadków, przyjaciół. To dobry pomysł na weekend,
                urodziny w spokojniejszej formie czy prezent pełen natury.
              </p>
            </Card>

            <Card>
              <h3 className="font-ultra text-base mb-1 text-center">
                Dla dorosłych i zespołów
              </h3>
              <p>
                Element alpakoterapii świetnie sprawdza się podczas{" "}
                <Link
                  href="/oferta"
                  className="underline underline-offset-2 hover:text-[var(--c-primary)]"
                >
                  kameralnych integracji
                </Link>{" "}
                i wyjazdów firmowych jako chwila wyciszenia po szkoleniu lub
                spotkaniu.
              </p>
            </Card>
          </div>
        </article>

        <div className="relative w-full h-56 md:h-80">
          <Image
            src="/images/lamaClose.avif"
            fill
            alt="Alpaki na wybiegu podczas zajęć alpakoterapii w Ranczo Patataj"
            className="rounded-2xl object-cover shadow-xl"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>

        {/* FAQ */}
        <article
          className="my-10"
          aria-label="Najczęstsze pytania o alpakoterapię"
        >
          <h2 className="font-ultra text-xl mb-3 text-center">
            Najczęstsze pytania o alpakoterapię
          </h2>
          <div className="grid gap-4 md:grid-cols-2 font-special text-sm md:text-base">
            <Card>
              <h3 className="font-ultra text-base mb-1">
                Czy trzeba mieć specjalne przygotowanie?
              </h3>
              <p>
                Nie, nie trzeba mieć żadnego doświadczenia ze zwierzętami.
                Wszystko spokojnie tłumaczymy na miejscu krok po kroku, w
                przyjaznej atmosferze.
              </p>
            </Card>
            <Card>
              <h3 className="font-ultra text-base mb-1">
                Ile trwa spotkanie z alpakami?
              </h3>
              <p>
                Standardowe spotkanie trwa zwykle od 45 do 90 minut, w
                zależności od wieku uczestników i programu wizyty. Przy
                wycieczkach szkolnych alpakoterapia jest jednym z elementów dnia
                na ranczu.
              </p>
            </Card>
            <Card>
              <h3 className="font-ultra text-base mb-1">
                Jak przygotować grupę na alpakoterapię?
              </h3>
              <p>
                Warto zabrać wygodne ubrania i buty dostosowane do pogody. Przed
                przyjazdem możemy przesłać krótką listę wskazówek dla rodziców
                lub opiekunów.
              </p>
            </Card>
            <Card>
              <h3 className="font-ultra text-base mb-1">
                Czy możemy połączyć alpakoterapię z innymi atrakcjami?
              </h3>
              <p>
                Tak, alpakoterapia często łączy się ze spotkaniami z innymi
                zwierzętami, warsztatami, ogniskiem czy grami terenowymi.
                Zajrzyj do{" "}
                <Link
                  href="/oferta"
                  className="underline underline-offset-2 hover:text-[var(--c-primary)]"
                >
                  zakładki „Oferta”
                </Link>{" "}
                lub zadzwoń, aby ustalić szczegóły.
              </p>
            </Card>
          </div>
        </article>

        {/* CTA KOŃCOWE */}
        <article
          className="mt-6"
          aria-label="Rezerwacja alpakoterapii w Ranczo Patataj"
        >
          <h2 className="font-ultra text-xl mb-2 text-center">
            Chcesz umówić alpakoterapię lub spotkanie z alpakami?
          </h2>
          <Card className="font-special text-center text-sm md:text-base mb-4 max-w-2xl mx-auto">
            Napisz lub zadzwoń, opowiedz nam o swojej grupie, a my zaproponujemy
            przebieg spotkania z alpakami dopasowany do wieku, potrzeb i
            możliwości uczestników dla szkół, przedszkoli, rodzin, grup
            przyjaciół i zespołów firmowych.
          </Card>

          <div className="flex flex-col justify-center items-center gap-2">
            <a
              href={PHONETO}
              className="inline-flex items-center gap-2 hover:shadow-md font-special font-black md:text-xl px-4 py-2 hover:text-emerald-200 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]"
              aria-label={`Zadzwoń do Ranczo Patataj pod numer ${CONTACT.phoneDisplay}, aby zarezerwować termin alpakoterapii`}
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
              aria-label="Napisz wiadomość e-mail do Ranczo Patataj w sprawie alpakoterapii"
            >
              {CONTACT.email}
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
