"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Treść – obrazki, które mają się “kręcić”
const IMAGES = [
  "/images/g1.avif",
  "/images/g7.avif",
  "/images/g2.avif",
  "/images/g3.avif",
  "/images/g5.avif",
];

const SLOTS = [
  {
    // lewy
    wrapperClass:
      "relative overflow-hidden rounded md:block w-10 h-16 md:w-24 md:h-24",
    imageClass:
      "object-cover sepia-[0.4] contrast-125 brightness-90 saturate-75",
  },
  {
    // lewy środkowy
    wrapperClass: "relative overflow-hidden rounded w-20 h-32 md:w-32 md:h-32",
    imageClass:
      "object-cover sepia-[0.3] contrast-125 brightness-90 saturate-75",
  },
  {
    // środkowy
    wrapperClass: "relative overflow-hidden rounded w-20 h-40 md:w-40 md:h-40",
    imageClass:
      "object-cover sepia-[0.2] contrast-125 brightness-90 saturate-75 carousel-fade",
  },
  {
    // prawy środkowy
    wrapperClass: "relative overflow-hidden rounded w-20 h-32 md:w-32 md:h-32",
    imageClass:
      "object-cover sepia-[0.1] contrast-125 brightness-90 saturate-75",
  },
  {
    // prawy
    wrapperClass:
      "relative overflow-hidden rounded md:block w-10 h-16 md:w-24 md:h-24",
    imageClass:
      "object-cover sepia-[0.1] contrast-125 brightness-90 saturate-75",
  },
];

export const MiniCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setOffset((prev) => (prev + 1) % IMAGES.length),
      3000 // zmiana co 3 sek
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="pb-4 mb-4"
      aria-hidden="true"
    >
      {/* klucz powoduje ponowny mount -> animacja leci od nowa */}
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
              className={slot.wrapperClass}
            >
              <Image
                src={src}
                alt=""
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
