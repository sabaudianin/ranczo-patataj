import React from "react";

export const ForWho = () => {
  return (
    <section className="relative max-w-5xl mx-auto">
      <div
        className="pointer-events-none absolute -top-20 -right-20
           h-72 w-72 rounded-full opacity-70 blur-3xl
           bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
           from-fuchsia-500 via-purple-500 to-transparent"
      ></div>
      <div className="w-full ">
        <p className="text-xl font-ultra text-center p-2">
          Dla kogo jest Ranczo Patataj?
        </p>
        <ul className="list-inside space-y-2">
          <li className="font-special border rounded-xl p-4 text-center m-2">
            <h2 className="font-semibold text-center  p-2 text-[var(--c-primary)]">
              Dla szkół i przedszkoli
            </h2>{" "}
            Idealna wycieczka edukacyjna, zielona szkoła albo dzień integracji.
            Łączymy kontakt ze zwierzętami, zajęcia edukacyjne i swobodną
            zabawę.
          </li>
          <li className=""></li>
          <li
            className="font-curier border rounded-xl p-4 text-center m-2 
          "
          >
            <h2 className="font-semibold text-center  p-2 text-[var(--c-primary)]">
              Dla rodzin
            </h2>
            Weekendowy wypad za miasto, spacer z alpakami, ognisko, dużo
            przestrzeni dla dzieci i spokój dla dorosłych.
          </li>
          <li className="font-special border rounded-xl p-4 text-center m-2">
            <h2 className="font-semibold text-center p-2 text-[var(--c-primary)]">
              Dla grup zorganizowanych
            </h2>
            Imprezy firmowe, spotkania integracyjne, wyjazdy tematyczne.
          </li>
        </ul>
      </div>
    </section>
  );
};
