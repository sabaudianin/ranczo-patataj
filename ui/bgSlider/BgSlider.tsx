"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type Slide = {
  src: string;
  alt: string;
  label: string;
};

type BgSliderProps = {
  slides: Slide[];
  interval?: number;
  className?: string;
  label?: string;
  ariaHidden?: boolean;
};

export const BgSlider: React.FC<BgSliderProps> = ({
  slides,
  interval = 3000,
  className = "",
  ariaHidden = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(id);
  }, [slides.length, interval]);

  if (slides.length === 0) return null;

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      aria-hidden={ariaHidden}
      role={ariaHidden ? "presentation" : "group"}
    >
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === activeIndex ? (
            <motion.div
              key={slide.src}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-cover filter sepia-[0.4] contrast-125 brightness-90 saturate-75"
                loading="lazy"
              />
              <motion.span
                className="w-full absolute z-50 text-center font-ultra bottom-2 text-shadow text-white md:text-xl"
                initial={{ opacity: 0, scale: 0.52 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                aria-hidden={ariaHidden}
              >
                {slide.label}
              </motion.span>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      <div
        className=" absolute inset-0 pointer-events-none mix-blend-multiply
    bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.35),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.3),transparent_60%),linear-gradient(to_bottom,rgba(255,244,214,0.55),rgba(214,176,112,0.55))]"
      ></div>
    </section>
  );
};
