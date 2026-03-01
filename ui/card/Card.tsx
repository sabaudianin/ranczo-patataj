"use client";
import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

// Definicja typów dla karty
export interface RanczoCardProps extends HTMLMotionProps<"article"> {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({
  children,
  className = "",
  eyebrow,
  title,
  description,
  ...props
}: RanczoCardProps) => {
  return (
    <motion.article
      // Animacja wejścia (Intersection Observer wbudowany w motion)
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className={`
        relative flex flex-col gap-3
        rounded-3xl bg-stone-50/80 dark:bg-stone-900/90
        backdrop-blur-md border border-stone-200/50 dark:border-stone-700/50
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
        px-2 py-6 md:px-8 md:py-7
        transition-all duration-500 ease-out
        hover:shadow-[0_20px_40px_rgba(217,119,6,0.1)]
        ${className}
      `}
      {...props}
    >
      {/* Dekoracyjne akcenty kolorystyczne (Amber & Emerald) */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {eyebrow && (
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700 dark:text-emerald-400/90">
          {eyebrow}
        </span>
      )}

      {title && (
        <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
          {description}
        </p>
      )}

      <div className="relative z-10">{children}</div>
    </motion.article>
  );
};