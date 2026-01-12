"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  "/images/alpaki-spacer-dzieci-mazowieckie.avif",
  "/images/imprezy-integracyjne-ranczo-patataj.avif",
  "/images/szkoly-przedszkola-spotkania-ze-zwierzetami.avif",
  "/images/lamy-ranczo-patataj-jastrzebia-stara.avif",
  "/images/zajecia-ze-zwierzetami-mazowieckie.avif",
  "/images/sala-zabaw-ranczo-patataj-mogielnica.avif",
  "/images/alpaki-dla-dzieci-mazowieckie.jpg",
];

const SLOTS = [
  {
    // lewy
    wrapperClass: "hidden",
    imageClass: "hidden",
  },
  {
    // lewy
    wrapperClass: "hidden",
    imageClass: "hidden",
  },
  {
    // lewy
    wrapperClass:
      "relative overflow-hidden rounded md:block w-10 h-16 md:w-24 md:h-32",
    imageClass: "object-cover",
  },
  {
    // lewy środkowy
    wrapperClass: "relative overflow-hidden rounded w-20 h-32 md:w-32 md:h-48",
    imageClass: "object-cover",
  },
  {
    // środkowy
    wrapperClass: "relative overflow-hidden rounded w-20 h-40 md:w-40 md:h-60",
    imageClass: "object-cover  carousel-fade",
  },
  {
    // prawy środkowy
    wrapperClass: "relative overflow-hidden rounded w-20 h-32 md:w-32 md:h-48",
    imageClass: "object-cover ",
  },
  {
    // prawy
    wrapperClass:
      "relative overflow-hidden rounded md:block w-10 h-16 md:w-24 md:h-32",
    imageClass: "object-cover ",
  },
];

export const MiniCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setOffset((prev) => (prev + 1) % IMAGES.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className=" mb-4"
      aria-hidden="true"
    >
      {/* klucz powoduje ponowny mount ,animacja leci od nowa */}
      <div
        key={offset}
        className="flex items-center justify-center gap-1"
      >
        {SLOTS.map((slot, index) => {
          const imgIndex = (offset + index) % IMAGES.length;
          const src = IMAGES[imgIndex];

          return (
            <div
              key={slot.wrapperClass + src}
              className={`${slot.wrapperClass} relative shadow-md shadow-white/10`}
            >
              <Image
                src={src}
                alt="Galeria obrazków z rancza Patataj w mazowieckim niedaleko Warszawy,alpaki,ognisko,lama,plac zabaw, lamy, konie"
                fill
                sizes="80px"
                className={slot.imageClass}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
