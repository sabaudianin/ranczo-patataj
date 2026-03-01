"use client";
import Image from "next/image";
import { Card } from "@/ui/card/Card";


const steps = [
  "Po przyjeździe poznajecie naszą przestrzeń i zwierzęta w swoim tempie. To idealny moment na pierwsze zdjęcia i karmienie alpak.",
  "Bierzecie udział w warsztatach lub zajęciach tematycznych. Program zawsze dopasowujemy do wieku grupy: od przedszkolaków po dorosłych.",
  "Czas na odpoczynek, piknik lub ognisko. To kluczowy moment integracji dla klas szkolnych i rodzin w sercu Mazowsza.",
  "Na koniec: relaks, przytulanie zwierząt i spokojne zakończenie dnia z dala od miejskiego zgiełku."
];

export const Visit = () => {
  return (
    <section
      id="jak-wyglada-wizyta"
      aria-labelledby="wizyta-title"
      className="max-w-5xl mx-auto py-8"
    >
      <Card className="border-none shadow-none bg-transparent">
        <div className="text-center mb-8">
          <h6
            id="wizyta-title"
            className="text-stone-900 dark:text-stone-50 font-ultra text-xl md:text-3xl leading-tight"
          >
            Jak wygląda wizyta na Ranczo Patataj?
          </h6>

          <p className="font-curier mt-4 max-w-2xl mx-auto text-sm md:text-base text-stone-600 dark:text-stone-400">
            Wizyta u nas to nie sztywny grafik, a czas spędzony w rytmie natury.
            Dopasowujemy się do potrzeb szkół, przedszkoli i rodzin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          <div className="space-y-6">
            <ul className="space-y-4 font-curier text-sm md:text-base text-stone-800 dark:text-stone-200">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-ultra text-amber-600 text-lg">{index + 1}.</span>
                  <p className="pt-0.5">{step}</p>
                </li>
              ))}
            </ul>

            <p className="font-special text-amber-700 dark:text-amber-500 font-bold text-center md:text-left pt-4 border-t border-stone-100 dark:border-stone-800">
              Program każdej wizyty układamy tak, aby był przyjemny i komfortowy dla każdego gościa.
            </p>
          </div>


          <div className="relative group">
            <div className="relative w-full aspect-video md:aspect-4/5 overflow-hidden rounded-2xl shadow-lg shadow-black/5">
              <Image
                src="/images/imprezy-integracyjne-mogielnica.avif"
                fill
                alt="Ranczo Patataj - widok na gospodarstwo"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <p className="mt-3 text-right font-playwrite text-xs">
              Nasza miejsce na piknik czeka na was ...
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};