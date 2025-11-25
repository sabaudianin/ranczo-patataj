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
  interval = 5000,
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
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
    </section>
  );
};
