"use client";
import { MiniCarousel } from "@/ui/miniCarousel/MiniCarousel";
import { Card } from "@/ui/card/Card";

const ATTRACTIONS = [
  {
    icon: "🌿",
    title: "Spotkania ze zwierzętami i alpakami",
    description:
      "Alpaki, lamy, konie, kucyki, kozy, owce, kury, pawie i wiele innych. Dzieci i dorośli mogą je karmić, głaskać i z bliska zobaczyć, jak wygląda codzienna opieka nad zwierzętami w gospodarstwie edukacyjnym. To idealna atrakcja dla szkół, przedszkoli i rodzin.",
    className: "bg-emerald-300/50 border border-emerald-500",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
  {
    icon: "🏡",
    title: "Rustykalna sala i przestrzeń na ranczu",
    description:
      "Do Waszej dyspozycji jest przytulna sala idealna na warsztaty i spotkania, przeszklona przestrzeń w stylu ogrodu zimowego oraz duży teren na zewnątrz. To świetne miejsce na wycieczki szkolne, integracje i rodzinne atrakcje w mazowieckim, niezależnie od pogody i pory roku.",
    className: "bg-indigo-300/50 border border-indigo-500",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
  {
    icon: "🎨",
    title: "Warsztaty kulinarne i manualne dla dzieci",
    description:
      "Proste przepisy, praca z naturalnymi składnikami, lepienie, tworzenie własnych pamiątek oraz eko-warsztaty. Dzieci uczą się przez działanie, jest dużo kreatywności i zero nudy, to idealne uzupełnienie wycieczki szkolnej lub wizyty przedszkola w gospodarstwie edukacyjnym.",
    className: "bg-red-300/50 border border-red-500",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
  {
    icon: "🔥",
    title: "Ognisko i piknik na świeżym powietrzu",
    description:
      "Przygotowujemy miejsce na ognisko i przestrzeń do pikniku. To idealne zwieńczenie wizyty, rodzinnego wyjazdu lub integracji dla klasy szkolnej. Wspólne pieczenie, rozmowy i zabawa na świeżym powietrzu w mazowieckim zostają w pamięci na długo.",
    className: "bg-orange-100/50 border border-orange-500 shadow-xl",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
  {
    icon: "🎉",
    title: "Urodziny i imprezy okolicznościowe na ranczu",
    description:
      "Organizujemy urodziny wśród zwierząt, rodzinne spotkania oraz kameralne imprezy firmowe. Możemy połączyć atrakcje ze zwierzętami, warsztaty i swobodną zabawę, tworząc scenariusz dopasowany do Waszej grupy. Idealna propozycja dla rodzin i grup z całego Mazowsza.",
    className: "bg-sky-300/50 border border-sky-500 md:col-span-2",
    tags: ["Dla dzieci", "Na zewnątrz"],
  },
];

export const Atrakcje = () => {
  return (
    <section
      id="atrakcje"
      aria-labelledby="atrakcje-title"
      className="max-w-5xl mx-auto "
    >
      <Card>
        <div className="text-center">
          <h2
            id="atrakcje-title"
            className="text-slate-900 dark:text-slate-50 font-ultra tracking-wide text-base md:text-2xl"
          >
            Atrakcje na Ranczo Patataj, czyli co u nas przeżyjesz?
          </h2>
          <p className="font-curier text-xs md:text-base mt-2 max-w-4xl mx-auto text-justify">
            Ranczo Patataj to gospodarstwo edukacyjne w Jastrzębi Starej koło
            Mogielnicy, w województwie mazowieckim. Podczas wycieczek szkolnych,
            wizyt przedszkoli, rodzin i grup zorganizowanych czekają na Was
            spotkania ze zwierzętami, warsztaty, ogniska oraz czas na swobodną
            zabawę na świeżym powietrzu.
          </p>
        </div>

        <MiniCarousel />
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <p className="font-special md:text-base ">
            Nieważne, czy przyjeżdżacie jako rodzina, paczka znajomych, klasa
            szkolna czy grupa firmowa, możecie wpaść tylko na chwilę albo zostać
            na cały dzień. Wybierzcie to, co najbardziej pasuje do Was, a my
            wraz z naszymi zwierzętami zajmiemy się resztą.
          </p>
        </div>
      </Card>

      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory my-8">
        {ATTRACTIONS.map((item) => (
          <article
            key={item.title}
            className={` snap-center min-w-[260px] max-w-[280px] flex-shrink-0
              group relative flex gap-3 p-3 md:p-4 rounded-2xl
              shadow-[0_10px_30px_rgba(15,23,42,0.08)]
              backdrop-blur-sm
              transition-all duration-300 ${item.className}`}
          >
            <div className="pointer-events-none absolute inset-x-4 bottom-0 h-1 bg-gradient-to-r from-black/10 via-black/0 to-black/10 opacity-0  blur-xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xl md:text-2xl shadow-sm mb-2">
                <span>{item.icon}</span>
              </div>

              <h3 className="font-ultra py-1 md:py-2 text-sm md:text-lg">
                {item.title}
              </h3>

              <p className="text-xs line- md:line-clamp-none font-curier">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Wersja desktop*/}

      <div className="hidden md:grid md:grid-cols-2 gap-4 md:gap-6">
        {ATTRACTIONS.map((item) => (
          <article
            key={item.title}
            className={`
              group relative flex gap-3 p-3 md:p-4 rounded-2xl
              shadow-[0_10px_30px_rgba(15,23,42,0.08)]
              backdrop-blur-sm
              transition-all duration-300
              hover:scale-101 
              ${item.className}
            `}
          >
            {/* akcent pod kartą */}
            <div className="pointer-events-none absolute inset-x-4 bottom-0 h-1 bg-gradient-to-r from-black/10 via-black/0 to-black/10 opacity-0 group-hover:opacity-100 blur-xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xl md:text-2xl shadow-sm mb-2">
                <span>{item.icon}</span>
              </div>

              <h3 className="font-ultra py-1 md:py-2 text-sm md:text-lg">
                {item.title}
              </h3>

              <p className="text-[11px] md:text-[15px] leading-relaxed line-clamp-4 md:line-clamp-none">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
