import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";
import { BgSlider } from "@/ui/bgSlider/BgSlider";

const SLIDES = [
  {
    src: "/images/car1.jpg",
    alt: "Ranczo o zachodzie słońca",
    label: "Zabawa, która uczy. Edukacja, która inspiruje",
  },
  {
    src: "/images/car5.jpg",
    alt: "Impreza urodzinowa",
    label: "W sercu wiejskiej przygody.",
  },
  {
    src: "/images/car10.jpg",
    alt: "Przygotowania do warsztatów ",
    label: "Tworzymy wspomnienia.",
  },
  {
    src: "/images/car2.jpg",
    alt: "Konie na sniegu",
    label: "Poczuj bliskośc zwierząt.",
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
          Zarezerwuj termin na wizytę w Ranczu Patataj
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
          Zadzwoń, aby umówić zajęcia edukacyjne, warsztaty, zarezerwować ranczo
          na imprezę firmową, rodzinną lub wizytę grupową.
        </p>
      </div>
      <div
        className="relative h-64 md:h-120 w-full overflow-hidden  aspect-[16/9] mt-4"
        aria-hidden="true"
      >
        <BgSlider
          slides={SLIDES}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </section>
  );
};
