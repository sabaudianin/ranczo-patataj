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
      <div className="relative h-64 md:h-100 w-full overflow-hidden rounded-xl">
        <BgSlider
          slides={SLIDES}
          className="absolute inset-0 w-full h-full"
        />

        <a
          href="tel:+48507526916"
          className="absolute right-1 top-4 z-20 font-poppins py-2 px-4 bg-[var(--c-primary)]/90 hover:scale-105 transition-all duration  rounded-xl text-xs md:text-xl font-semibold text-white"
          aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
        >
          Zarezerwuj termin
        </a>

        <div className="absolute -left-6 top-20 md:top-24 z-20 origin-top-left -rotate-45">
          <div
            className="flex items-center justify-center gap-2 px-8 py-1 bg-emerald-500/80 text-white text-xs md:text-base font-semibold shadow-md shadow-emerald-900/30"
            aria-label="Aktualnie dostępne wolne terminy"
          >
            <span>Wolne terminy</span>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-3 md:p-6 py-4 font-poppins text-center max-w-6xl mx-auto">
        <h2
          id="cta-heading"
          className="text-lg md:text-2xl font-ultra tracking-wider text-[var(--c-primary)]"
        >
          Zarezerwuj termin na wizytę w Ranczu Patataj
        </h2>
        <div className="flex items-center justify-center pb-2">
          <a
            href="tel:+48507526916"
            className=" px-4 shadow-lg shadow-emerald-400/30 rounded-xl hover:shadow-emerald-400/50 shiny-btn  font-poppins font-black md:text-xl text-emerald-500 tracking-widest"
            aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
          >
            <FaPhone className="inline" /> +48 507 526 916
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
