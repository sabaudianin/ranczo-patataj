import React from "react";
import { FaPhone } from "react-icons/fa";

export const Banner: React.FC = () => {
  return (
    <section
      className=""
      aria-labelledby="promo-heading"
      role="banner"
    >
      <article className="max-w-hd mx-auto ">
        <div
          className="bg-[url('/images/polewies.avif')] bg-cover bg-center bg-no-repeat object-scale-down h-100 "
          aria-hidden="true"
        >
          <div className="relative bg-black/50 px-2 py-4">
            <h1
              id="promo-heading"
              className=" font-ultra text-center text-[var(--c-primary)] text-xl md:text-2xl xl:text-3xl mx-auto "
            >
              <span className="block ">
                Ranczo Patataj - gospodarstwo edukacyjne
              </span>
              <span className="block text-sm md:text-base xl:text-lg  text-white pt-1">
                dla szkół, rodzin i grup zorganizowanych
              </span>
            </h1>

            <a
              href="tel:+48507526916"
              className="absolute right-2 -bottom-14 z-20  py-2 px-4 bg-[var(--c-primary)]/50 hover:scale-105 transition-all duration border border-[var(--c-primary)] rounded-xl text-xs md:text-xl font-semibold text-white font-curier"
              aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
            >
              <div className="flex justify-center items-center">
                <FaPhone
                  className="self-start animate-pulse"
                  aria-hidden="true"
                />
                <span className="ml-1">Zarezerwuj termin</span>
              </div>
            </a>
          </div>
        </div>

        <div className="">
          <p className="px-1 py-2 text-center font-ultra bg-amber-300/30">
            Aktualne promocje - sprawdź nasze social media:
          </p>
          <nav
            className="flex items-center justify-center gap-8"
            aria-label="Media społecznościowe Ranczo Patataj"
          >
            <a
              href="https://www.instagram.com/ranczopatataj"
              className="p-4"
              aria-label="Profil Ranczo Patataj na Instagramie"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <span
                className="block bg-[url('/icons/ig.avif')] w-8 h-8 md:w-10 md:h-10 bg-cover hover:scale-105 duration-200 transition"
                aria-hidden="true"
              />{" "}
            </a>
            <a
              href="https://www.facebook.com/PatatajRanczo/"
              className="p-4"
              aria-label="Profil Ranczo Patataj na Facebooku"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
            >
              <span
                className="block bg-[url('/icons/fb.avif')] w-8 h-8 md:w-10 md:h-10 bg-cover hover:scale-105 duration-200 transition"
                aria-hidden="true"
              />{" "}
            </a>
          </nav>
        </div>
        <div className="">
          <p className=" md:text-xl max-w-5xl mx-auto text-xs font-special tracking-wide text-center font-semibold">
            Zapraszamy rodziny, szkoły i grupy na warsztaty kulinarne i
            manualne, spotkania ze zwierzętami, gry terenowe, ogniska, imprezy
            firmowe i okolicznościowe.
          </p>
        </div>
      </article>
    </section>
  );
};
