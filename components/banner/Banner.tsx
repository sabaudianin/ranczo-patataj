import React from "react";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="md:pt-8">
      <div className="max-w-3xl mx-auto ">
        <h1 className="font-ultra text-center text-[var(--c-primary)] md:text-2xl ">
          Gospodarstwo edukacyjne dla szkół, rodzin i grup zorganizowanych.
        </h1>
        <p className="text-xs font-special tracking-wide text-center py-2  md:text-xl">
          Zapraszamy rodziny, szkoły i grupy na warsztaty kulinarne i manualne,
          spotkania ze zwierzętami, gry terenowe, ogniska i imprezy
          okolicznościowe.
        </p>
      </div>
    </section>
  );
};
