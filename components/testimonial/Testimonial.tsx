"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card } from "@/ui/card/Card";
import { SITE } from "@/lib/seo/site";
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
    font: "font-playwrite text-base ",
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
    font: "font-playwrite text-lg tracking-[.15em] font-bold",
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
      className="px-1 md:px-8 max-w-7xl mx-auto py-4"
    >
      <motion.h6
        id="opinions-heading"
        className="pb-2 text-center font-special  font-bold text-2xl md:text-3xl text-[var(--c-primary)]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Nasi goście o nas :{" "}
      </motion.h6>
      <motion.div
        className="text-center text-sm font-curier mx-auto mb-8 font-semibold md:text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      >
        <Card>
          Opinie rodzin, szkół i przyjaciół, którzy odwiedzili Ranczo Patataj -
          gospodarstwo edukacyjne z alpakami, końmi i innymi zwierzętami.
        </Card>
      </motion.div>

      {/* DESKTOP */}
      <div className="hidden md:grid gap-4  grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {OPINIONS.map((opinion, index) => (
          <motion.article
            key={opinion.name}
            className={`relative p-4 flex flex-col gap-3 border border-amber-900/40 rounded-md bg-[#f7f0dc] shadow-[0_12px_30px_rgba(0,0,0,0.45)] text-sm text-black ${opinion.font}`}
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
            <div
              itemProp="itemReviewed"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta
                itemProp="name"
                content={SITE.legalName}
              />
              <meta
                itemProp="url"
                content={`${SITE.url}/`}
              />
            </div>
            <div className="flex-1 relative">
              <div className="float-right ml-3 mb-2">
                <Image
                  src="/logorp.avif"
                  width={80}
                  height={80}
                  alt="Logo Ranczo Patataj"
                  className={`w-14 h-14sepia rounded-xl grayscale`}
                />
              </div>

              <div itemProp="reviewBody">
                <MagicText text={opinion.text} />
              </div>

              {/* czysci float*/}
              <div className="clear-both" />
            </div>

            <div
              className="mt-2 h-px bg-amber-900/40"
              aria-hidden="true"
            />

            <div className="flex items-center gap-4 pt-2">
              <span
                className={`h-7 w-7 rounded-full text-[0.7rem] te font-poppins font-bold flex items-center justify-center shadow-md shadow-black/40 ${opinion.color}`}
                aria-hidden="true"
              >
                {opinion.name[0]}
              </span>

              <span
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name">{opinion.name}</span>
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {/*Mobile*/}
      <div className="md:hidden gap-4 flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
        {OPINIONS.map((opinion) => (
          <article
            key={opinion.name}
            className={`snap-center min-w-[260px] max-w-[280px] flex-shrink-0 relative p-4 flex flex-col gap-3 border border-amber-900/40 rounded-md bg-[#f7f0dc] shadow-[0_12px_30px_rgba(0,0,0,0.45)] text-sm text-black ${opinion.font}`}
            itemScope
            itemType="https://schema.org/Review"
          >
            <div
              itemProp="itemReviewed"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta
                itemProp="name"
                content={SITE.legalName}
              />
              <meta
                itemProp="url"
                content={`${SITE.url}/`}
              />
            </div>
            <div className="flex-1 relative">
              <div className="float-right ml-3 mb-2">
                <Image
                  src="/logorp.avif"
                  width={80}
                  height={80}
                  alt="Logo Ranczo Patataj"
                  className={`w-14 h-14sepia rounded-xl grayscale`}
                />
              </div>

              <div itemProp="reviewBody">
                <MagicText text={opinion.text} />
              </div>

              {/* czysci float*/}
              <div className="clear-both" />
            </div>

            <div
              className="mt-2 h-px bg-amber-900/40"
              aria-hidden="true"
            />

            <div className="flex items-center gap-4 pt-2">
              <span
                className={`h-7 w-7 rounded-full text-[0.7rem] te font-poppins font-bold flex items-center justify-center shadow-md shadow-black/40 ${opinion.color}`}
                aria-hidden="true"
              >
                {opinion.name[0]}
              </span>

              <span
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="font-medium italic tracking-wide"
              >
                <span itemProp="name">{opinion.name}</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
