"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Card } from "@/ui/card/Card";

const ANIMAL_FEATURES = [
  {
    src: "/images/tbrown.avif",
    alt: "Brązowa alpaka stojąca na wybiegu w Ranczo Patataj, gospodarstwie edukacyjnym w mazowieckim",
    label: "Zakochaj się w alpakach 😍",
    fact: "Alpaki koją napięcie i działają jak naturalna terapia wyciszająca szczególnie dla dzieci i dorosłych, którzy potrzebują chwili oddechu od miejskiego zgiełku.",
  },
  {
    src: "/images/tlam.avif",
    alt: "Lama spacerująca po zagrodzie w Ranczo Patataj w otoczeniu natury",
    label: "Zachwyć się lamami 🤗",
    fact: "Lamy uczą cierpliwości i uważności. Podczas wizyty w naszym gospodarstwie edukacyjnym wspierają pracę z emocjami w łagodny i bezpieczny sposób.",
  },
  {
    src: "/images/tduo.avif",
    alt: "Dwa konie na padoku w gospodarstwie edukacyjnym Ranczo Patataj",
    label: "Zaprzyjaźnij się z końmi 💛",
    fact: "Kontakt z końmi poprawia pewność siebie i pomaga redukować stres, jest to świetny element programu wycieczki szkolnej lub wizyty przedszkola.",
  },
  {
    src: "/images/tblack.avif",
    alt: "Ciemna alpaka patrząca w obiektyw podczas zajęć alpakoterapii na Ranczo Patataj",
    label: "Poznaj alpakoterapię 🥰",
    fact: "Alpakoterapia wspiera wyciszenie, pomaga przy napięciu emocjonalnym i buduje poczucie bezpieczeństwa, szczególnie u dzieci, młodzieży i osób wrażliwych.",
  },
  {
    src: "/images/trio.avif",
    alt: "Grupa zwierząt gospodarskich razem na wybiegu w Ranczo Patataj w Jastrzębi Starej koło Mogielnicy",
    label: "Odnajdź równowagę w obecności zwierząt ⚖️",
    fact: "Obcowanie ze zwierzętami obniża poziom kortyzolu i poprawia samopoczucie. Na Ranczo Patataj w mazowieckim łączymy relaks z edukacją dla szkół, przedszkoli, rodzin i grup zorganizowanych.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="mx-auto max-w-7xl px-4 py-8 "
      role="region"
    >
      <motion.h6
        id="features-heading"
        className="text-center font-ultra text-2xl md:text-3xl text-[var(--c-primary)] mb-8"
        initial={{ opacity: 0, x: -100, scale: 0.2 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Alpaki, konie, lamy… u nas zwierzęta mówią &bdquo;Dzień Dobry&rdquo;
        jako pierwsze.
      </motion.h6>
      <motion.div
        className="text-center mx-auto font-special text-sm "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      >
        <Card className="md:text-base mb-12 break-words leading-relaxed  text-left md:text-justify hyphens-auto">
          Gospodarstwo edukacyjne blisko Warszawy, w którym dzieci i dorośli
          poznają zwierzęta z bliska - alpaki, lamy, konie, kozy, kury, pawie i
          wiele więcej. Wszystko to podczas wycieczek szkolnych, wizyt
          przedszkoli, rodzinnych odwiedzin i spotkań grup zorganizowanych.
        </Card>
      </motion.div>

      <ul
        className="grid grid-cols-1 md:grid-cols-2 md:gap-6
    md:[&>*:last-child:nth-child(odd)]:col-span-2
    md:[&>*:last-child:nth-child(odd)]:justify-self-center
    md:[&>*:last-child:nth-child(odd)]:max-w-100
    "
      >
        {ANIMAL_FEATURES.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <li key={item.label}>
              <motion.div
                key={item.label}
                className={[
                  "relative my-2 flex items-center gap-3 md:justify-center ",
                  isEven
                    ? "flex-row md:flex-col"
                    : "flex-row-reverse md:flex-col",
                  "md:text-center",
                ].join(" ")}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.95,
                  ease: "easeOut",
                  delay: 0.1 * index,
                }}
              >
                {/* POLAROID – postarzone zdjęcie */}
                <div
                  className={[
                    "relative bg-[#fdf3e1] rounded-sm",
                    "shadow-lg shadow-black/40 p-2 pb-4",
                    "transform transition-transform duration-300",
                    isEven ? "-rotate-2 md:-rotate-3" : "rotate-2 md:rotate-3",
                    "hover:rotate-0 hover:-translate-y-1 hover:scale-[0.97]",
                  ].join(" ")}
                >
                  <div className="relative overflow-hidden bg-neutral-900/70 w-40 md:w-full max-h-100">
                    <Image
                      src={item.src}
                      width={256}
                      height={192}
                      alt={item.alt}
                      loading="lazy"
                      className=" w-full object-contain hover:scale-105 transition-transform duration-500"
                    />

                    {/* lekko brudne / przydymione brzegi */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.25)_0,_transparent_60%)] mix-blend-multiply" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_40%,_rgba(0,0,0,0.6))] mix-blend-multiply" />
                    {/* drobne ziarno */}
                    <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light " />
                  </div>

                  {/* podpis e */}
                  <p className="mt-2 text-center font-bold tracking-[0.25em] uppercase text-black/90 font-special">
                    {item.label}
                  </p>
                </div>

                {/*  SIDE TEXT*/}
                <motion.span
                  className="p-1 py-8 bg-[#f5ebd5] text-neutral-800 rounded shadow-sm shadow-black/20 font-curier text-sm"
                  initial={{ opacity: 0, y: 100, scale: 0.5 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.95,
                    ease: "easeOut",
                    delay: 0.2 * index,
                  }}
                >
                  {item.fact}
                </motion.span>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
