import React from "react";

export const RelaxText = () => {
  return (
    <section className="max-w-hd">
      <div className="relative h-50 w-full bg-[url('/images/bele.avif')] bg-cover bg-center aspect-[16/9] flex items-center justify-center">
        <div className="absolute bg-black/40 w-full h-full"></div>
        <span className="absolute block font-special md:text-xl text-white font-bold text-center max-w-3xl  rounded p-2">
          Przyjedź do Rancza Patataj i znajdź chwilę dla siebie. <br />
          Wystarczy kilka godzin wśród zwierząt i zieleni, by poczuć, jak
          napięcie znika, a w głowie robi się lżej.
        </span>
      </div>
    </section>
  );
};
