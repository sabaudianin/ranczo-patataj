"use client";
import { motion } from "motion/react";
import { Card } from "@/ui/card/Card";
import { MiniCarousel } from "@/ui/miniCarousel/MiniCarousel";

// const ATTRACTIONS = [
//   {
//     icon: "🌿",
//     title: "Spotkania ze zwierzętami i alpakami",
//     description:
//       "Alpaki, lamy, konie, kucyki, kozy, owce, kury, pawie i wiele innych. Dzieci i dorośli mogą je karmić, głaskać i z bliska zobaczyć, jak wygląda codzienna opieka nad zwierzętami w gospodarstwie edukacyjnym. To idealna atrakcja dla szkół, przedszkoli i rodzin.",
//     className: "bg-emerald-300/50 border border-emerald-500 ",
//     tags: ["Dla dzieci", "Na zewnątrz"],
//   },
//   {
//     icon: "🏡",
//     title: "Rustykalna sala i przestrzeń na ranczu",
//     description:
//       "Do Waszej dyspozycji jest przytulna sala idealna na warsztaty i spotkania, przeszklona przestrzeń w stylu ogrodu zimowego oraz duży teren na zewnątrz. To świetne miejsce na wycieczki szkolne, integracje i rodzinne atrakcje w mazowieckim, niezależnie od pogody i pory roku.",
//     className: "bg-indigo-300/50 border border-indigo-500",
//     tags: ["Dla dzieci", "Na zewnątrz"],
//   },
//   {
//     icon: "🎨",
//     title: "Warsztaty kulinarne i manualne dla dzieci",
//     description:
//       "Proste przepisy, praca z naturalnymi składnikami, lepienie, tworzenie własnych pamiątek oraz eko-warsztaty. Dzieci uczą się przez działanie, jest dużo kreatywności i zero nudy, to idealne uzupełnienie wycieczki szkolnej lub wizyty przedszkola w gospodarstwie edukacyjnym.",
//     className: "bg-red-300/50 border border-red-500",
//     tags: ["Dla dzieci", "Na zewnątrz"],
//   },
//   {
//     icon: "🔥",
//     title: "Ognisko i piknik na świeżym powietrzu",
//     description:
//       "Przygotowujemy miejsce na ognisko i przestrzeń do pikniku. To idealne zwieńczenie wizyty, rodzinnego wyjazdu lub integracji dla klasy szkolnej. Wspólne pieczenie, rozmowy i zabawa na świeżym powietrzu w mazowieckim zostają w pamięci na długo.",
//     className: "bg-orange-100/50 border border-orange-500 shadow-xl",
//     tags: ["Dla dzieci", "Na zewnątrz"],
//   },
//   {
//     icon: "🎉",
//     title: "Urodziny i imprezy okolicznościowe na ranczu",
//     description:
//       "Organizujemy urodziny wśród zwierząt, rodzinne spotkania oraz kameralne imprezy firmowe. Możemy połączyć atrakcje ze zwierzętami, warsztaty i swobodną zabawę, tworząc scenariusz dopasowany do Waszej grupy. Idealna propozycja dla rodzin i grup z całego Mazowsza.",
//     className: "bg-sky-300/50 border border-sky-500 md:col-span-4",
//     tags: ["Dla dzieci", "Na zewnątrz"],
//   },
// ];


const ATTRACTIONS = [
  {
    icon: "🌿",
    title: "Spotkania z alpakami",
    description: "Alpaki, lamy, konie i kucyki. Idealna atrakcja dla szkół i rodzin.",
    className: "lg:col-span-2 lg:row-span-2 bg-emerald-300/50 border border-emerald-500",
    font: "font-ultra"
  },
  {
    icon: "🎨",
    title: "Warsztaty",
    description: "Kulinarne i manualne. Edukacja przez zabawę.",
    className: "bg-red-300/50 border border-red-500",
    font: "font-special"
  },
  {
    icon: "🔥",
    title: "Ogniska",
    description: "Wspólne pieczenie i integracja na powietrzu.",
    className: "bg-orange-100/50 border border-orange-500",
    font: "font-curier"
  },
  {
    icon: "🎉",
    title: "Każdego rodzaju przyjęcia.",
    description: "Imprezy szyte na miarę Twoich potrzeb.",
    className: "lg:col-span-2 bg-sky-300/50 border border-sky-500",
    font: "font-curier"
  }
];

export const Atrakcje = () => {
  return (
    <section
      id="atrakcje"
      className="max-w-7xl mx-auto py-12"
      aria-labelledby="atrakcje-title"
    >
      {/* Nagłówek sekcji z tłem papieru */}
      <Card className="mb-12 border-none bg-amber-50/50 dark:bg-stone-900/50 shadow-sm overflow-hidden">
        <div className="relative z-10 text-center space-y-4">
          <h2 id="atrakcje-title" className="font-ultra text-3xl md:text-5xl text-stone-800 dark:text-stone-100">
            Co u nas <span className="text-amber-600 italic">przeżyjesz?</span>
          </h2>
          <p className="font-curier text-lg max-w-3xl mx-auto leading-relaxed">
            Ranczo Patataj to nie tylko miejsce, to Twoja przestrzeń na oddech,
            naukę i zabawę wśród zwierząt w samym sercu Mazowsza.
          </p>
        </div>

      </Card>

      <MiniCarousel />

      {/* Bento Grid Desktop */}
      <div className="hidden md:grid grid-cols-4 lg:grid-rows-2 gap-6 mt-12">
        {ATTRACTIONS.map((item, idx) => (
          <motion.article
            key={item.title}
            whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
            className={`
              p-4 rounded-2xl shadow-xl shadow-black/5 
              flex flex-col justify-between border border-stone-200/50
              ${item.className}`}
          >
            <div>
              <span className="text-4xl block mb-4">{item.icon}</span>
              <h3 className={` text-xl mb-3   font-ultra`}>
                {item.title}
              </h3>
              <p className="font-curier text-sm ">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 no-scrollbar">
        {ATTRACTIONS.map((item) => (
          <div key={item.title} className={`${item.className} snap-center min-w-[85vw] p-6 rounded-3xl  border border-stone-200 shadow-lg`}>
            <span className="text-3xl">{item.icon}</span>
            <h3 className={`${item.font} text-lg my-2`}>{item.title}</h3>
            <p className="font-curier text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};