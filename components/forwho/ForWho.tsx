import React from "react";

export const ForWho = () => {
  return (
    <section className=" max-w-5xl mx-auto">
      <div className=""></div>

      <div className="w-full ">
        <p className="text-xl font-ultra text-center p-2">
          Dla kogo jest Ranczo Patataj???
        </p>
        <ul className="list-inside space-y-2">
          <li className="font-special border  border-blue-300 rounded-xl p-4 text-center m-2">
            <h2 className="font-semibold text-center  p-2 text-[var(--c-primary)] text-xl">
              Dla szkół i przedszkoli
            </h2>{" "}
            Idealna wycieczka edukacyjna, zielona szkoła albo dzień integracji.
            Łączymy kontakt ze zwierzętami, zajęcia edukacyjne i swobodną
            zabawę.
          </li>

          <li className="font-curier border border-fuchsia-300 rounded-xl p-4 text-center m-2">
            <h2 className="font-semibold  text-center  p-2 text-[var(--c-primary)] text-xl">
              Dla rodzin
            </h2>
            Weekendowy wypad za miasto, spacer z alpakami, przyjęcie rodzinne,
            dużo przestrzeni dla dzieci i spokój dla dorosłych.
          </li>

          <li className="font-special border border-emerald-300 rounded-xl p-4 text-center m-2">
            <h2 className="font-semibold text-center p-2 text-[var(--c-primary)] text-xl">
              Dla grup zorganizowanych
            </h2>
            Imprezy firmowe, spotkania integracyjne, wyjazdy tematyczne.
          </li>
        </ul>
      </div>
    </section>
  );
};
