import React from "react";
import Image from "next/image";

export const Poster = () => {
  return (
    <section className="relative max-w-6xl mx-auto">
      <div
        className="bg-cover bg-center bg-no-repeat object-scale-down h-100 "
        aria-hidden="true"
      >
        <div className="">
          <Image
            src="/images/lamaClose.avif"
            fill
            alt="Pyszczek Lamy z Bliska"
            sizes="100vw"
            className="object-cover max-h-100"
          />
        </div>
        <div className=" relative w-full p-1  mx-auto font-special text-center font-bold bg-black/50 text-white md:text-2xl">
          <h2> Zapraszamy szkoły i przedszkola na Ranczo Patataj!</h2>
          <p className="">
            Idealna propozycja na wycieczkę edukacyjną, dzień integracji czy
            tematyczne warsztaty.
          </p>
        </div>
      </div>
      <p className=" text-center font-ultra bg-emerald-300/30 p-2">
        Atrakcyjne pakiety dla szkół !!!
      </p>
    </section>
  );
};
