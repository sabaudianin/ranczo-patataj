import { FaPhone } from "react-icons/fa";
import { CONTACT, PHONETO } from "@/config/contact/Contact";
import Link from "next/link";

export const Final = () => {
  return (
    <section className="">
      <article>
        <div className="flex flex-col gap-3 w-full items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/oferta"
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-emerald-500/70 hover:bg-emerald-500 border border-[var(--c-primary)] text-xs md:text-sm lg:text-base font-semibold text-white font-curier hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]"
            >
              Zobacz szczegółową ofertę
            </Link>

            <Link
              href="/ranczo"
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-white/90 hover:bg-white border border-[var(--c-primary)] text-xs md:text-sm lg:text-base font-semibold text-[var(--c-primary)] font-curier hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)]"
            >
              Poznaj nasze Ranczo
            </Link>
          </div>
          <div className="">
            <a
              href={PHONETO}
              className="inline-flex items-center justify-center gap-2 p-2 border rounded-xl border-[var(--c-primary)] bg-stone-800/70 text-[0.7rem] md:text-sm text-white/90 font-curier underline-offset-2 hover:underline"
              aria-label={`Zadzwoń pod numer ${CONTACT.phoneDisplay}, aby zarezerwować termin w Ranczo Patataj`}
              itemProp="telephone"
            >
              <FaPhone
                className="animate-pulse"
                aria-hidden="true"
              />
              <span>Zarezerwuj termin: {CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </article>
      <div className="md:hidden py-4">
        <p className="text-center font-special pb-1 font-semibold">
          🌍 Gdzie znajduję się nasze Ranczo ?
        </p>
        <iframe
          id="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.053794512001!2d20.75453567767068!3d51.67715837185244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471904e4c6dda33f%3A0x62b7aa2c83ef1bda!2sJastrz%C4%99bia%20Stara%209%2C%2005-640%20Jastrz%C4%99bia%20Stara!5e0!3m2!1spl!2spl!4v1763727884546!5m2!1spl!2spl"
          width="100%"
          height="200"
          loading="lazy"
          className="rounded"
          title="Mapa Dojazdu do Rancza Patataj"
        ></iframe>
      </div>

      <article className="max-w-hd mx-auto py-4">
        <div className="relative h-60 w-full bg-[url('/images/bele.avif')] bg-cover bg-center  flex items-center justify-center">
          <div className="absolute bg-black/40 w-full h-full"></div>
          <span className="absolute block font-special md:text-xl text-white font-bold text-center max-w-3xl  rounded p-2">
            Przyjedź do Rancza Patataj i znajdź chwilę dla siebie. <br />
            Wystarczy kilka godzin wśród zwierząt i zieleni, by poczuć, jak
            napięcie znika, a w głowie robi się lżej.
          </span>
        </div>
      </article>
    </section>
  );
};
