import React from "react";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="">
      <div className="max-w-3xl mx-auto rounded py-2 relative aspect-[16/12] rounded overflow-hidden ">
        <Image
          src="/images/wigilia.avif"
          fill
          alt="oferta wigilijna"
        />
      </div>
    </section>
  );
};
