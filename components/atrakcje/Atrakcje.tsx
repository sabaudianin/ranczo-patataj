"use client";
import { motion } from "motion/react";
import { Card } from "@/ui/card/Card";
import { MiniCarousel } from "@/ui/miniCarousel/MiniCarousel";

const ATTRACTIONS = [
  {
    icon: "🌿",
    title: "Spotkania z alpakami",
    description: "Alpaki, lamy, konie i kucyki. Idealna atrakcja dla szkół i rodzin.",
    className: "lg:col-span-2 lg:row-span-2 bg-emerald-50 dark:bg-emerald-950/20",
    font: "font-ultra"
  },
  {
    icon: "🎨",
    title: "Warsztaty",
    description: "Kulinarne i manualne. Edukacja przez zabawę.",
    className: "bg-red-50 dark:bg-red-950/20",
    font: "font-special"
  },
  {
    icon: "🔥",
    title: "Ogniska",
    description: "Wspólne pieczenie i integracja na powietrzu.",
    className: "bg-orange-50 dark:bg-orange-950/20",
    font: "font-curier"
  },
  {
    icon: "🎉",
    title: "Urodziny",
    description: "Imprezy szyte na miarę Twoich marzeń.",
    className: "lg:col-span-2 bg-sky-50 dark:bg-sky-950/20",
    font: "font-playwrite"
  }
];

export const Atrakcje = () => {
  return (
    <section
      id="atrakcje"
      className="max-w-7xl mx-auto py-12 px-2"
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
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-6 mt-12">
        {ATTRACTIONS.map((item, idx) => (
          <motion.article
            key={item.title}
            whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
            className={`
              p-8 rounded-[2.5rem] shadow-xl shadow-black/5 
              flex flex-col justify-between border border-stone-200/50
              ${item.className}
            `}
          >
            <div>
              <span className="text-4xl block mb-4">{item.icon}</span>
              <h3 className={`${item.font} text-xl mb-3 text-stone-900 dark:text-white`}>
                {item.title}
              </h3>
              <p className="font-curier text-sm text-stone-600 dark:text-stone-400">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 no-scrollbar">
        {ATTRACTIONS.map((item) => (
          <div key={item.title} className="snap-center min-w-[85vw] p-6 rounded-3xl  dark:bg-stone-900 border border-stone-200 shadow-lg">
            <span className="text-3xl">{item.icon}</span>
            <h3 className={`${item.font} text-lg my-2`}>{item.title}</h3>
            <p className="font-curier text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};