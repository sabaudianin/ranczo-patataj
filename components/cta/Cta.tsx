import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";
import { BgSlider } from "@/ui/bgSlider/BgSlider";

const SLIDES = [
  {
    src: "/images/car1.avif",
    alt: "Dzieci karmią lamę na Ranczo Patataj podczas zajęć edukacyjnych ze zwierzętami",
    label: "Zabawa, która uczy. Edukacja, która inspiruje.",
  },
  {
    src: "/images/car5.avif",
    alt: "Impreza urodzinowa wśród zwierząt na Ranczo Patataj",
    label: "W sercu wiejskiej przygody.",
  },
  {
    src: "/images/lamaHorse.avif",
    alt: "Koń i lama na padoku w gospodarstwie edukacyjnym Ranczo Patataj",
    label: "Tworzymy wspomnienia.",
  },
  {
    src: "/images/car2.avif",
    alt: "Lama z bliska podczas wizyty na Ranczo Patataj",
    label: "Poczuj bliskość zwierząt.",
  },
  {
    src: "/images/niceBok.avif",
    alt: "Ranczo Patataj widok gospodarstwa edukacyjnego z boku",
    label: "Zrelaksuj się.",
  },
  {
    src: "/images/salaGit.avif",
    alt: "Ogród zimowy i sala warsztatowa na Ranczo Patataj w mazowieckim",
    label: "Klimat, którego długo nie zapomnicie.",
  },
];

export const Cta = () => {
  return (
    <section
      className="relative w-full max-w-hd mx-auto py-4"
      aria-labelledby="cta-heading"
      role="region"
    >
      <div className="relative z-10 flex flex-col md:p-6 text-center max-w-6xl mx-auto">
        <h2
          id="cta-heading"
          className="text-lg md:text-2xl font-ultra tracking-wider text-[var(--c-primary)]"
        >
          Zarezerwuj termin wizyty w gospodarstwie edukacyjnym Ranczo Patataj
        </h2>
        <div className="flex justify-center items-center p-2">
          <a
            href={PHONETO}
            className="inline-flex items-center gap-2  font-black md:text-xl px-4 py-2 hover:text-emerald-500  transition-all duration focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] font-special"
            aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
            itemProp="telephone"
          >
            <FaPhone
              className="self-start animate-pulse"
              aria-hidden="true"
              focusable="false"
            />
            <span>{CONTACT.phoneDisplay}</span>
          </a>
        </div>

        <p className="text-xs md:text-sm max-w-md mx-auto font-semibold font-curier">
          Zadzwoń, aby umówić wycieczkę szkolną, wizytę przedszkola, zajęcia
          edukacyjne ze zwierzętami, alpakoterapię albo zarezerwować ranczo na
          imprezę firmową, rodzinną lub wizytę grupową. Przyjmujemy grupy z
          Warszawy, Grójca, Mogielnicy i całego Mazowsza.
        </p>
      </div>
      <div
        className="relative h-64 md:h-120 w-full overflow-hidden  aspect-[16/9] mt-4"
        aria-hidden="true"
      >
        <BgSlider
          slides={SLIDES}
          className="absolute inset-0 w-full h-full shadow-xl"
        />
      </div>
    </section>
  );
};
