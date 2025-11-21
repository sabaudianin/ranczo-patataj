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
        <a
          href="tel:+48507526916"
          className="absolute right-0 z-50 top-4 font-lime py-2 px-4 
               bg-[var(--c-primary)]/70 shadow-lg shadow-amber-400/30 rounded-xl hover:shadow-amber-400/50 shiny-btn 
               text-xs font-semibold"
          aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
        >
          Zarezerwuj termin
        </a>
      </div>
      <BgSlider
        slides={SLIDES}
        className="absolute inset-0 h-64 md:h-100 mx-auto w-full  "
      />
      <div className="relative z-10 flex flex-col gap-3 p-4 md:p-6 font-poppins text-center">
        <h2
          id="cta-heading"
          className="text-lg md:text-2xl font-semibold "
        >
          Zarezerwuj termin na wizytę w Ranczu Patataj
        </h2>
        <p className="text-xs md:text-sm max-w-md">
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
