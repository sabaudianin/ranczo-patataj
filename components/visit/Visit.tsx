"use client";
import Image from "next/image";
import { Card } from "@/ui/card/Card";

export const Visit = () => {
  return (
    <section
      id="jak-wyglada-wizyta"
      aria-labelledby="wizyta-title"
      className="max-w-5xl mx-auto md:px-0 relative"
    >
      <Card>
        <div className="text-center mb-6">
          <h6
            id="wizyta-title"
            className="text-[var(--c-primary)] font-ultra tracking-wide text-base md:text-2xl"
          >
            Jak wygląda wizyta w gospodarstwie edukacyjnym Ranczo Patataj?
          </h6>

          <p className="font-curier text-xs md:text-base mt-2 max-w-2xl mx-auto">
            Wizyta na Ranczo Patataj w Jastrzębi Starej koło Mogielnicy w
            województwie mazowieckim jest zawsze dopasowana do Was niezależnie
            od tego, czy przyjeżdżacie jako wycieczka szkolna, grupa z
            przedszkola, rodzina czy zorganizowana grupa znajomych.
          </p>
        </div>

        <div className="font-curier text-xs md:text-base space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Po przyjeździe poznajecie naszą przestrzeń i zwierzęta w swoim
              tempie, z możliwością bliskiego kontaktu, rozmów, karmienia oraz
              robienia zdjęć. To idealny początek wycieczki szkolnej lub
              rodzinnej wizyty w gospodarstwie edukacyjnym.
            </li>

            <li>
              Bierzecie udział w wybranych aktywnościach, takich jak warsztaty,
              spotkania ze zwierzętami, zajęcia tematyczne czy elementy
              alpakoterapii. Program dopasowujemy do wieku i potrzeb grupy:
              dzieci, młodzieży, dorosłych.
            </li>

            <li>
              Jest czas na odpoczynek, piknik, ognisko lub swobodną chwilę na
              świeżym powietrzu. To ważny moment integracji dla klasy, grupy
              przedszkolnej, rodziny lub firmowego wyjazdu.
            </li>

            <li>
              Na koniec zostaje to, co wielu lubi najbardziej: zabawa, relaks,
              poprzytulanie alpak, bycie blisko natury i spokojne zakończenie
              dnia z dala od miejskiego hałasu.
            </li>
          </ul>

          <div className="relative w-full h-40 md:h-60 lg:h-96 text-center my-8">
            <Image
              src="/images/ranczoPalenisko.avif"
              fill
              alt="Ranczo widok z ulicy"
              className="mx-auto h-auto w-auto rounded-xl"
            />
          </div>
          <p className="text-center pt-4">
            Program każdej wizyty układamy tak, aby był przyjemny, spokojny i
            komfortowy, zarówno dla dzieci jak i dorosłych. To świetna
            propozycja na wycieczki szkolne, wizyty przedszkoli i rodzinne
            atrakcje dla osób z Warszawy, Grójca, Mogielnicy i całego Mazowsza.
          </p>
        </div>
      </Card>
    </section>
  );
};
