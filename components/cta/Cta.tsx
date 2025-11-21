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
      <div>
        <button
          type="button"
          role="button"
          className="absolute right-0 z-50 top-4 font-lime  py-2 px-4 bg-[var(--c-primary)]/70 shadow-lg shadow-amber-400/30 rounded-xl  hover:shadow-amber-400/50 shiny-btn text-xs font-semibold "
        >
          Zarezerwuj Termin
        </button>
      </div>
      <BgSlider
        slides={SLIDES}
        className="absolute inset-0 h-64 md:h-100 mx-auto w-full  "
      />
    </section>
  );
};

// Zabawa, która uczy. Edukacja, która inspiruje.

// Dzieci odkrywają naturę — dorośli odkrywają spokój

// Tu celebrujemy najważniejsze chwile — rodzinnie i z sercem.”

// Ranczo, które łączy edukację, naturę i prawdziwe wiejskie życie — idealne dla rodzin, szkół i miłośników zwierząt

// Warsztaty, zwierzęta, gry terenowe i imprezy pod gołym niebem — wszystko w jednej, magicznej przestrzeni.
