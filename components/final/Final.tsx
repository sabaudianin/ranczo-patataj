import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";
import Link from "next/link";
import { Card } from "@/ui/card/Card";

export const Final = () => {
  return (
    <section className="py-4">
      <Card className="w-full max-w-6xl mx-auto text-center">
        <div className="flex flex-col gap-6 w-full items-center text-center md:text-left py-8 md:py-10 px-4 md:px-6">
          <div className="space-y-2 max-w-xl font-curier">
            <p className="text-xs font-semibold uppercase tracking-[2px]">
              Zarezerwuj wizytę
            </p>
            <h2 className="md:text-lg font-semibold tracking-tight ">
              Gotowi na spotkanie z naszym Ranczem?
            </h2>
            <p className="text-sm md:text-base text-stone-500">
              Wybierz, co chcesz zrobić jako pierwsze - zobaczyć ofertę, poznać
              miejsce albo od razu zadzwonić i zarezerwować termin.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto items-stretch md:items-center justify-center md:justify-start">
            <Link
              href="/oferta"
              className="inline-flex w-full md:w-auto items-center justify-center px-5 py-2.5 rounded-xl
                bg-emerald-900/90 hover:bg-emerald-700
                 border border-emerald-800
                 text-xs md:text-sm lg:text-base font-semibold text-white font-curier
                 hover:scale-[1.02] active:scale-[0.99]
                 transition-all duration-150
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600"
            >
              Zobacz szczegółową ofertę
            </Link>

            <Link
              href="/ranczo"
              className="inline-flex w-full md:w-auto items-center justify-center px-5 py-2.5 rounded-xl
                 bg-white/90 hover:bg-white
                 border border-[var(--c-primary)]
                 shadow-sm
                 text-xs md:text-sm lg:text-base font-semibold font-curier text-stone-900
                 hover:scale-[1.02] active:scale-[0.99]
                 transition-all duration-150
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]"
            >
              Poznaj nasze Ranczo
            </Link>

            <a
              href={PHONETO}
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                 border border-[var(--c-primary)]
                 bg-stone-900/90 text-xs md:text-sm text-white/90 font-curier
                 hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.99]
                 transition-all duration-150
                 underline-offset-2
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]"
              aria-label={`Zadzwoń pod numer ${CONTACT.phoneDisplay}, aby zarezerwować termin w Ranczo Patataj`}
              itemProp="telephone"
            >
              <FaPhone
                className="animate-pulse"
                aria-hidden="true"
              />
              <span>Zadzwoń teraz: {CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </Card>

      <div className="md:hidden py-4">
        <p className="text-center font-special pb-4 font-semibold">
          🌍 Gdzie znajduje się nasze Ranczo ?
        </p>
        <iframe
          id="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.053794512001!2d20.75453567767068!3d51.67715837185244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471904e4c6dda33f%3A0x62b7aa2c83ef1bda!2sJastrz%C4%99bia%20Stara%209%2C%2005-640%20Jastrz%C4%99bia%20Stara!5e0!3m2!1spl!2spl!4v1763727884546!5m2!1spl!2spl"
          width="100%"
          height="200"
          loading="lazy"
          className="rounded shadow-xl"
          title="Mapa Dojazdu do Rancza Patataj"
        ></iframe>
      </div>

      <article className="max-w-hd mx-auto pb-4">
        <p className=" font-special md:text-xl text-white font-bold  max-w-3xl rounded p-2 text-center">
          Przyjedź do nas i znajdź chwilę dla siebie.
        </p>
        <div className="relative h-60 w-full bg-[url('/images/koza.avif')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute bg-black/40 w-full h-full"></div>
          <span className="absolute bottom-0 block font-special md:text-xl text-white font-bold text-center max-w-3xl  rounded p-2">
            Wystarczy chwila wśród zwierząt i zieleni, by poczuć jak napięcie
            znika, a w głowie robi się lżej.
          </span>
        </div>
      </article>
    </section>
  );
};
