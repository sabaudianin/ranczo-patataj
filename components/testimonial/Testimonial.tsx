"use client";
import { MdFormatQuote } from "react-icons/md";
import { motion } from "motion/react";
import Image from "next/image";

import { MagicText } from "@/ui/magicText/MagicText";

type Opinion = {
  text: string;
  name: string;
  color: string;
  font?: string;
};

const OPINIONS: Opinion[] = [
  {
    text: "Ranczo Patataj to wspaniałe miejsce dla dzieciaków. Ogromny plus za dużą, otwartą przestrzeń, gdzie dzieciaki mogą się wybiegać. Zwierzęta są bardzo zadbane i lubią kontakt z ludźmi. Warsztaty kulinarne i artystyczne to strzał w dziesiątkę i widać było, że dzieciaki były zadowolone. Pan Właściciel to wspaniały człowiek, który stara się żeby każdy dobrze się tam czuł. Duża polecajka! Nasza klasa na pewno wróci ☺️",
    name: "Katarzyna K",
    color: "bg-red-700",
    font: "font-playwrite text-sm",
  },
  {
    text: "Rewelacyjne miejsce zarówno dla wycieczek szkolnych, jak i indywidualnych wypadów. Zwierzęta udomowione, gospodarze mili i życzliwie nastawieni do gości. Czas płynie szybko i aktywnie. Zajęcia dla dzieci - pełen profesjonalizm. Gorąco polecam. Rewelacja!!!",
    name: "Ewelina P",
    color: "bg-blue-700",
    font: "font-playwrite tracking-widest",
  },
  {
    text: "Gorąco polecam Ranczo Patataj!Super rodzinna atmosfera i przecudowny gospodarze ☺️Idealne miejsce na wypoczynek z rodziną. Dzieci bardzo zadowolone z możliwości karmienia i przytulania zwierzątek oraz warsztatów kulinarnych i manualnych ❤️Cisza, spokój, duża przestrzeń.Idealne miejsce na wycieczki szkolne i przedszkolne oraz imprezy okolicznościowe.Jeszcze raz bardzo dziękujemy za miło spędzony dzień i jeszcze nie raz wrócimy 🥰",
    name: "Kamila K",
    color: "bg-green-700",
    font: "font-amatic text-base tracking-wider font-extrabold",
  },
  {
    text: "SUPER miejsce.Wszystko nowe i czyste.Zajęcia edukacyjne kulinarne.Zabawy ze zwierzętami.Klimat z dala od miasta.Fantastyczni gospodarze.",
    name: "Marek J",
    color: "bg-yellow-700",
    font: "font-playwrite tracking-widest",
  },
  {
    text: "Urokliwe miejsce w zaciszu pól i lasów.Zwierzęta nauczone pracy z dziećmi, bardzo przyjaźnie nastawione(lama rozdaje buziaki).Warsztaty cieszyły się ogromnym zainteresowaniem zarówno dzieci jak i rodziców 😊Polecam to miejsce wszystkim. ",
    name: "Tomasz G",
    color: "bg-indigo-700",
    font: "font-amatic text-lg tracking-[.15em] font-bold",
  },
  {
    text: "Bardzo, fajne miejsce z potencjałem, brakowało czegoś takiego w okolicy. Szczerze polecam dla dzieci i dla dorosłych. można wynająć przestrzeń na imprezy, mają bazę noclegową.",
    name: "Jarek G",
    color: "bg-lime-700",
    font: "font-playwrite tracking-wider",
  },
];

export const Testimonial = () => {
  return (
    <section
      id="opinie"
      aria-labelledby="opinions-heading"
      className="px-1 md:px-8 max-w-7xl mx-auto py-12"
    >
      <motion.h2
        id="opinions-heading"
        className="text-center font-ultra text-2xl md:text-3xl pb-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Nasi goście o nas :{" "}
      </motion.h2>
      <motion.p
        className="text-center text-sm font-poppins mx-auto mb-8 font-semibold text-xs"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      >
        Opinie rodzin, szkół i przyjaciół, którzy odwiedzili Ranczo Patataj -
        gospodarstwo edukacyjne z alpakami, końmi i innymi zwierzętami.
      </motion.p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {OPINIONS.map((opinion, index) => (
          <motion.article
            key={opinion.name}
            className={` text-sm border rounded-xl ${opinion.font}  p-4 flex flex-col glow-amber`}
            itemScope
            itemType="https://schema.org/Review"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: 0.08 * index,
            }}
          >
            <div className={`flex-1  `}>
              <MagicText text={opinion.text} />
            </div>

            <div className="flex items-center gap-4 p-4">
              {" "}
              <span
                className={`${opinion.color} h-6 w-6 rounded-full font-poppins font-bold text-center `}
                aria-hidden="true"
              >
                {opinion.name[0]}
              </span>
              <span
                itemProp="author"
                className="text-xs font-medium "
              >
                {opinion.name}
              </span>
            </div>
          </motion.article>
        ))}

        {OPINIONS.map((opinion, index) => (
          <motion.article
            key={opinion.name}
            className={`
      relative text-sm text-black ${opinion.font}
      border border-amber-900/40 rounded-md
      bg-[#f7f0dc]
      shadow-[0_12px_30px_rgba(0,0,0,0.45)]
      p-4 flex flex-col gap-3
     
      
    `}
            itemScope
            itemType="https://schema.org/Review"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: 0.08 * index,
            }}
          >
            {/* Treść listu */}
            <div
              className="flex-1"
              itemProp="reviewBody text-black"
            >
              <MagicText text={opinion.text} />
            </div>

            {/* Linia jak na końcu listu */}
            <div
              className="mt-2 h-px w-24 bg-amber-900/40"
              aria-hidden="true"
            />

            {/* “Podpis” + inicjał jak pieczęć */}
            <div className="flex items-center gap-4 pt-2">
              {/* pieczęć / okrągły znaczek */}
              <span
                className={`h-7 w-7 rounded-full text-[0.7rem] te font-poppins font-bold flex items-center justify-center shadow-md shadow-black/40 ${opinion.color}`}
                aria-hidden="true"
              >
                {opinion.name[0]}
              </span>

              {/* kolorowy podpis – tu używamy opinion.color */}
              <span
                itemProp="author"
                className={`
          text-xs font-medium italic tracking-wide
          
        `}
              >
                {opinion.name}
              </span>
            </div>
          </motion.article>
        ))}

        {OPINIONS.map((opinion, index) => (
          <motion.article
            key={opinion.name}
            className={`
      relative text-sm ${opinion.font}
      border border-amber-900/40 rounded-md
      bg-[#f7f0dc]
      shadow-[0_12px_30px_rgba(0,0,0,0.45)]
      p-4 flex flex-col gap-3
      bg-[repeating-linear-gradient(
        to_bottom,
        rgba(0,0,0,0.06) 0px,
        rgba(0,0,0,0.06) 1px,
        transparent 1px,
        transparent 5px
      )]
      glow-amber
    `}
            itemScope
            itemType="https://schema.org/Review"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: 0.08 * index,
            }}
          >
            {/* TREŚĆ LISTU + ZNACZEK W ROGU */}
            <div className="flex-1 relative">
              {/* znaczek / postarzone logo w prawym górnym rogu */}
              <div className="float-right ml-3 mb-2">
                <Image
                  src="/logorp.avif" // wrzuć swoje logo do /public i podmień ścieżkę
                  width={80}
                  height={80}
                  alt="Logo Ranczo Patataj"
                  className="
            w-14 h-14
            opacity-60
            sepia-[0.4] contrast-110 brightness-95
            drop-shadow-sm
            -rotate-3
          "
                />
              </div>

              <div itemProp="reviewBody">
                <MagicText text={opinion.text} />
              </div>

              {/* czyścimy float, żeby podpis nie “wpływał” w logo */}
              <div className="clear-both" />
            </div>

            {/* LINIA JAK NA KOŃCU LISTU */}
            <div
              className="mt-2 h-px w-24 bg-amber-900/40"
              aria-hidden="true"
            />

            {/* PODPIS NA DOLE – JAK BYŁ */}
            <div className="flex items-center gap-4 pt-2">
              {/* pieczęć z inicjałem */}
              <span
                className="h-7 w-7 rounded-full bg-amber-900/70 text-[0.7rem] text-amber-50 font-poppins font-bold flex items-center justify-center shadow-md shadow-black/40"
                aria-hidden="true"
              >
                {opinion.name[0]}
              </span>

              {/* kolorowy podpis – opinion.color jako kolor tekstu */}
              <span
                itemProp="author"
                className={`
          text-xs font-medium italic tracking-wide
          ${opinion.color}
        `}
              >
                {opinion.name}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
