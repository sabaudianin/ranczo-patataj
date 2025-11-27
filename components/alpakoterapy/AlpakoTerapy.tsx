import React from "react";
import Image from "next/image";

export const AlpakoTerapy = () => {
  return (
    <article className="max-w-5xl mx-auto pt-4">
      <div className="text-center font-special p-2">
        <p className="text-[var(--c-primary)]">Czy znacie Alpakoterapię ?</p>
        <p className="text-[var(--c-primary)]">
          {" "}
          - Nie?? Nasze Alpaki są w tym najlepsze{" "}
        </p>
        <p className="font-curier text-xs py-2">
          <b>Alpakoterapia</b> - naturalna forma wsparcia emocjonalnego i
          wyciszenia dla dzieci i dorosłych, kontakt z alpakami pomaga redukować
          stres i poprawia samopoczucie.
          <br />
          Alpakoterapia to terapia oparta na bliskim kontakcie z alpakami,
          idealna dla osób potrzebujących spokoju, są to łagodne oraz bezpieczne
          zajęcia wspierające rozwój i relaks.{" "}
        </p>
      </div>
      <div className="relative h-100">
        <Image
          src="/images/lamastar.avif"
          fill
          alt="Ładna lama patrzy na Ciebie"
          sizes="100vw"
          className="md:object-contain max-h-100 rounded-xl  h-full"
        />
      </div>
    </article>
  );
};
