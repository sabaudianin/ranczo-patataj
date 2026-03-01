"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const IMAGES = [
  "/images/alpaki-spacer-dzieci-mazowieckie.avif",
  "/images/imprezy-integracyjne-ranczo-patataj.avif",
  "/images/szkoly-przedszkola-spotkania-ze-zwierzetami.avif",
  "/images/lamy-ranczo-patataj-jastrzebia-stara.avif",
  "/images/zajecia-ze-zwierzetami-mazowieckie.avif",
  "/images/sala-zabaw-ranczo-patataj-mogielnica.avif",
  "/images/alpaki-dla-dzieci-mazowieckie.jpg",
];

export const MiniCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((index + i + IMAGES.length) % IMAGES.length);
    }
    return indices;
  };

  return (
    <div className="relative h-64 md:h-80 w-full flex items-center justify-center overflow-hidden py-10" aria-hidden="true">
      <div className="flex items-center justify-center gap-2 md:gap-6">
        <AnimatePresence mode="popLayout">
          {getVisibleIndices().map((imgIdx, position) => {

            const isCenter = position === 2;
            const isInner = position === 1 || position === 3;

            return (
              <motion.div
                key={IMAGES[imgIdx]}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isInner ? 0.7 : isCenter ? 1 : 0.3,
                  scale: isCenter ? 1.1 : isInner ? 0.9 : 0.7,
                  zIndex: isCenter ? 30 : 10,
                  rotate: isCenter ? 0 : position < 2 ? -5 : 5
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className={`
                  relative shadow-2xl rounded-xl border-4
                  ${isCenter ? "w-40 h-56 md:w-56 md:h-72" : isInner ? "w-28 h-40 md:w-36 md:h-52" : "hidden md:block w-20 h-28"}
                `}
              >
                <Image
                  src={IMAGES[imgIdx]}
                  alt="Atrakcje Ranczo Patataj"
                  fill
                  className="object-cover rounded-sm"
                  sizes="(max-width: 768px) 150px, 300px"
                />
                {/*stare zdjęcia -sloty- */}
                {!isCenter && <div className="absolute inset-0 bg-stone-900/20 backdrop-sepia-[0.3]" />}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};