"use client";
import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";
import { BgSlider } from "@/ui/bgSlider/BgSlider";
import { motion } from "motion/react";

const SLIDES = [
  {
    src: "/images/lama-karmienie-mogielnica.avif",
    alt: "Dzieci karmią lamę na Ranczo Patataj",
    label: "Zabawa, która uczy. Edukacja, która inspiruje.",
  },
  {
    src: "/images/imprezy-urodzinowe-mogielnica-kolo-grojca.avif",
    alt: "Impreza urodzinowa na Ranczo Patataj",
    label: "W sercu wiejskiej przygody.",
  },
  {
    src: "/images/lamy-konie-ranczo-patataj.avif",
    alt: "Zwierzęta na padoku Ranczo Patataj",
    label: "Tworzymy wspomnienia.",
  },
  {
    src: "/images/alpaki-mogielnica-mazowieckie.avif",
    alt: "Lama z bliska",
    label: "Poczuj bliskość zwierząt.",
  },
];

export const Cta = () => {
  return (
    <section
      className="relative w-full max-w-6xl mx-auto py-4"
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col text-center space-y-6 mb-8">

        <h6
          id="cta-heading"
          className="text-xl md:text-3xl font-ultra text-stone-900 dark:text-stone-50 leading-tight"
        >
          Zarezerwuj termin wizyty <br className="hidden md:block" />
          <span className="text-amber-600 italic font-playwrite text-lg md:text-2xl">na naszym ranczu</span>
        </h6>


        <div className="flex justify-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={PHONETO}
            className="group relative inline-flex items-center gap-4 bg-emerald-600/90 hover:bg-emerald-700 text-white/90 px-8 py-5 rounded-2xl shadow-xl shadow-emerald-200 dark:shadow-none transition-all duration-300"
            aria-label="Zadzwoń do Ranczo Patataj"
          >
            <div className="bg-emerald-500 group-hover:bg-white/20 p-2 rounded-lg transition-colors">
              <FaPhone className="text-xl animate-[bounce_2s_infinite]" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs uppercase tracking-widest font-ultra  mb-1">Zadzwoń teraz</span>
              <span className="font-curier text-xl md:text-2xl font-bold tracking-tighter">
                {CONTACT.phoneDisplay}
              </span>
            </div>
          </motion.a>
        </div>


        <p className="max-w-3xl mx-auto font-curier text-sm md:text-base text-stone-600 dark:text-stone-400 text-center leading-relaxed">
          U nas zorganizujesz wycieczkę szkolną, alpakoterapię, urodziny lub event firmowy.
          Zapraszamy gości z Warszawy, Grójca i całego Mazowsza.
        </p>
      </div>


      <div
        className="relative h-64 md:h-96 w-full overflow-hidden rounded-3xl border border-stone-100 dark:border-stone-800"
        aria-hidden="true"
      >
        <BgSlider
          slides={SLIDES}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
};