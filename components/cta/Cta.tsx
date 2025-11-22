import { FaPhone } from "react-icons/fa";
import { MiniGallery } from "@/ui/miniGallery/MiniGallery";
import { BgSlider } from "../bgSlider/BgSlider";

const SLIDES = [
  {
    src: "/images/car1.jpg",
    alt: "Ranczo o zachodzie słońca",
    label: "Tu celebrujemy najważniejsze chwile - rodzinnie i z sercem.",
  },
  {
    src: "/images/car2.jpg",
    alt: "Konie na sniegu",
    label: "Zabawa, która uczy. Edukacja, która inspiruje",
  },
  {
    src: "/images/car5.jpg",
    alt: "Impreza urodzinowa",
    label: "Warsztaty, zwierzęta, gry terenowe i imprezy pod gołym niebem",
  },
  {
    src: "/images/car10.jpg",
    alt: "Przygotowania do warsztatów ",
    label: "Dzieci odkrywają naturę — dorośli odkrywają spokój",
  },
];

export const Cta = () => {
  return (
    <section className="relative w-full max-w-hd mx-auto">
      <div className="relative h-64 md:h-120 w-full overflow-hidden rounded-xl aspect-ratio[16/9]">
        <BgSlider
          slides={SLIDES}
          className="absolute inset-0 w-full h-full "
        />

        <a
          href="tel:+48507526916"
          className="absolute right-1 top-4 z-20 font-poppins py-2 px-4 bg-[var(--c-primary)]/70 hover:scale-105 transition-all duration  rounded-xl text-xs md:text-xl font-semibold text-white"
          aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
        >
          Zarezerwuj termin
        </a>

        <div className="absolute -left-6 top-24 md:top-32 z-20 origin-top-left -rotate-45">
          <div
            className="flex items-center justify-center gap-2 px-8 py-1 bg-emerald-500/30 text-white/90 text-xs md:text-base shadow-md shadow-emerald-900/30 font-ultra"
            aria-label="Aktualnie dostępne wolne terminy"
          >
            <span>Wolne terminy</span>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-3 md:p-6 py-4  text-center max-w-6xl mx-auto">
        <h2
          id="cta-heading"
          className="text-lg md:text-2xl font-ultra tracking-wider text-[var(--c-primary)]"
        >
          Zarezerwuj termin na wizytę w Ranczu Patataj
        </h2>
        <div className="flex justify-center items-center p-4">
          <a
            href="tel:+48507526916"
            className="inline-flex items-center gap-2 shadow-md shadow-amber-600 rounded-xl hover:shadow-md  font-poppins font-black md:text-xl px-4 py-2 hover:text-emerald-400 hover:shadow-emerald-600 transition-all duration"
            aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
          >
            <FaPhone className="self-start animate-pulse" />
            <span>+48 507 526 916</span>
          </a>
        </div>

        <MiniGallery />
        <p className="text-xs md:text-sm max-w-md mx-auto font-semibold">
          Zadzwoń, aby umówić zajęcia edukacyjne, warsztaty, zarezerować ranczo
          na imprezę firmową, rodzinną lub wizytę grupową.
        </p>
      </div>
    </section>
  );
};

// Zabawa, która uczy. Edukacja, która inspiruje.

// Dzieci odkrywają naturę — dorośli odkrywają spokój

// Tu celebrujemy najważniejsze chwile — rodzinnie i z sercem.”

// Ranczo, które łączy edukację, naturę i prawdziwe wiejskie życie — idealne dla rodzin, szkół i miłośników zwierząt

// Warsztaty, zwierzęta, gry terenowe i imprezy pod gołym niebem — wszystko w jednej, magicznej przestrzeni.
