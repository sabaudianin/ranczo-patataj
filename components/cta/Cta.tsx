import { FaPhone } from "react-icons/fa";

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
    <section
      className="relative w-full max-w-hd mx-auto py-4"
      aria-labelledby="cta-heading"
      role="region"
    >
      <div
        className="relative h-64 md:h-120 w-full overflow-hidden  aspect-[16/9]"
        aria-hidden="true"
      >
        <BgSlider
          slides={SLIDES}
          className="absolute inset-0 w-full h-full "
        />
      </div>
      <div className="relative z-10 flex flex-col  md:p-6 py-4  text-center max-w-6xl mx-auto">
        <h2
          id="cta-heading"
          className="text-lg md:text-2xl font-ultra tracking-wider text-[var(--c-primary)]"
        >
          Zarezerwuj termin na wizytę w Ranczu Patataj
        </h2>
        <div className="flex justify-center items-center p-2">
          <a
            href="tel:+48507526916"
            className="inline-flex items-center gap-2 hover:shadow-md font-special font-black md:text-xl px-4 py-2 hover:text-emerald-200  transition-all duration focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] "
            aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
            itemProp="telephone"
          >
            <FaPhone
              className="self-start animate-pulse"
              aria-hidden="true"
              focusable="false"
            />
            <span>+48 507 526 916</span>
          </a>
        </div>

        <p className="text-xs md:text-sm max-w-md mx-auto font-semibold font-curier">
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
