"use client";
import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";
import Link from "next/link";
import { Card } from "@/ui/card/Card";
import { motion } from "motion/react";

export const Final = () => {
  return (
    <section className="py-8 space-y-12">
      <Card className="w-full max-w-6xl mx-auto text-center  border-stone-200 shadow-sm bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm">
        <header className="space-y-4 mb-8">
          <span className="font-ultra text-amber-600 text-xs md:text-sm uppercase tracking-[3px]">
            Zarezerwuj wizytę
          </span>
          <h6 className="text-xl md:text-3xl font-ultra text-stone-900 dark:text-stone-50">
            Gotowi na spotkanie z naszym Ranczem?
          </h6>
          <p className="font-curier text-sm md:text-base text-stone-500 max-w-2xl mx-auto">
            Wybierz, co chcesz zrobić jako pierwsze - poznać naszą pełną ofertę,
            zobaczyć galerię, czy po prostu zadzwonić i zapytać o wolny termin.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/oferta"
            className="w-full md:w-auto px-8 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-ultra text-xs md:text-sm transition-all duration-200 shadow-lg shadow-emerald-900/10"
          >
            PEŁNA OFERTA
          </Link>

          <Link
            href="/ranczo"
            className="w-full md:w-auto px-8 py-4 rounded-2xl bg-white border-2 border-amber-200 hover:border-amber-400 text-stone-900 font-ultra text-xs md:text-sm transition-all duration-200"
          >
            POZNAJ MIEJSCE
          </Link>

          <a
            href={PHONETO}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-stone-700 text-white font-curier font-bold text-sm md:text-base hover:bg-black transition-all"
            aria-label={`Zadzwoń: ${CONTACT.phoneDisplay}`}
          >
            <FaPhone className="animate-pulse text-amber-400" />
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </Card>


      <div className="md:hidden space-y-4">
        <p className="text-center font-ultra text-sm uppercase tracking-tighter">
          📍 Tu nas znajdziesz
        </p>
        <div className="rounded-3xl overflow-hidden shadow-xl border-4 ">
          <iframe
            id="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4107.315447447933!2d20.754535677556266!3d51.677161698286454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719059202a4e90f%3A0x6a1b2963fc94970!2sRanczo%20Patataj%20-%20Gospodarstwo%20Edukacyjne!5e1!3m2!1spl!2sde!4v1772370358166!5m2!1spl!2sde"
            width="100%"
            height="250"
            loading="lazy"
            className=""
            title="Mapa Dojazdu do Rancza Patataj"
          ></iframe>
        </div>
      </div>


      <article className="max-w-6xl mx-auto overflow-hidden rounded-2xl relative">
        <div className="relative h-[400px] md:h-[500px] w-full group">
          <div
            className="absolute inset-0 bg-[url('/images/ranczo-mogielnica-kolo-warszawy.avif')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            role="img"
            aria-label="Widok na Ranczo Patataj z perpektywy kozy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-playwrite text-amber-400 text-xl md:text-3xl mb-4"
            >
              Przyjedź do nas i znajdź chwilę dla siebie.
            </motion.p>
            <p className="font-curier text-white/90 text-xs md:text-sm max-w-2xl leading-relaxed">
              Wystarczy chwila wśród zwierząt i zieleni, by poczuć jak napięcie
              znika, a w głowie robi się lżej. Czekamy na Ciebie w Jastrzębi Starej.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};