import React from "react";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="">
      <div className="w-full rounded py-2">
        <Image
          src="/images/wigilia.avif"
          width={400}
          height={300}
          alt="oferta wigilijna"
        />
      </div>
    </section>
  );
};
