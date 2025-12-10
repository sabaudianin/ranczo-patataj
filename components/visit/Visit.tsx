"use client";
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
          <h2
            id="wizyta-title"
            className="text-[var(--c-primary)] font-ultra tracking-wide text-base md:text-2xl"
          >
            Jak wygląda wizyta na Ranczu Patataj?
          </h2>

          <p className="font-curier text-xs md:text-base mt-2 max-w-2xl mx-auto">
            Każda wizyta przebiega w spokojnym rytmie i jest dopasowana do Was,
            niezależnie od tego, czy przyjeżdżacie sami, z rodziną, znajomymi
            czy większą grupą.
          </p>
        </div>

        <div className="font-curier text-xs md:text-base space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Poznajecie naszą przestrzeń i zwierzęta w swoim tempie, z
              możliwością bliskiego kontaktu, rozmów i zdjęć.
            </li>

            <li>
              Bierzecie udział w wybranych aktywnościach, takich jak warsztaty,
              spotkania ze zwierzętami czy zajęcia tematyczne.
            </li>

            <li>
              Jest czas na odpoczynek, piknik, ognisko lub swobodną chwilę na
              świeżym powietrzu.
            </li>

            <li>
              A na koniec zostaje moment na to, co lubicie najbardziej czyli
              zabawę, relaks, poprzytulanie alpak albo po prostu bycie blisko
              natury.
            </li>
          </ul>

          <p className="text-center pt-4">
            Program każdej wizyty układamy tak, aby był przyjemny, spokojny i
            komfortowy, niezależnie od wieku i potrzeb odwiedzających.
          </p>
        </div>
      </Card>
    </section>
  );
};
