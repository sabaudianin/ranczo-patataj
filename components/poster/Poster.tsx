import { CONTACT, MAILTO } from "@/config/contact/Contact";

export const Poster = () => {
  return (
    <section
      className="relative max-w-6xl mx-auto py-4"
      aria-labelledby="schools-offer-heading"
    >
      <div>
        <h6
          className="text-center md:text-xl font-ultra"
          id="schools-offer-heading"
        >
          Nowa oferta dla szkół i przedszkoli w gospodarstwie edukacyjnym Ranczo
          Patataj
        </h6>

        <p className="text-center  max-w-4xl mx-auto mt-2 font-curier text-left px-2">
          Organizujemy wycieczki szkolne, wizyty przedszkoli, warsztaty
          edukacyjne oraz spotkania ze zwierzętami w Jastrzębi Starej koło
          Mogielnicy, w województwie mazowieckim. Napisz do nas, aby otrzymać
          szczegółową ofertę dopasowaną do wieku i potrzeb Waszej grupy.
        </p>

        <p className="text-center mt-3 font-special text-base md:text-xl">
          📧{" "}
          <a
            href={MAILTO}
            className="underline underline-offset-2 hover:text-[var(--c-primary)]"
            aria-label="Napisz wiadomość e-mail do Ranczo Patataj w sprawie oferty dla szkół i przedszkoli"
          >
            {CONTACT.email}
          </a>
        </p>
      </div>
    </section>
  );
};
