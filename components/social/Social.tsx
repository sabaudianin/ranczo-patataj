import React from "react";

export const Social = () => {
  return (
    <section>
      <div className="py-4">
        <p className="px-1 text-center font-ultra ">
          Aktualna oferta i promocje - sprawdź nasze social media:
        </p>
        <nav
          className="flex items-center justify-center gap-8"
          aria-label="Media społecznościowe Ranczo Patataj"
        >
          <a
            href="https://www.instagram.com/ranczopatataj"
            className="p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] rounded-full"
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
            className="p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] rounded-full"
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
          Zapraszamy rodziny, szkoły i grupy na warsztaty kulinarne i manualne,
          spotkania ze zwierzętami, gry terenowe, ogniska, imprezy firmowe i
          okolicznościowe.
        </p>
      </div>
    </section>
  );
};
