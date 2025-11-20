"use client";

import { MdFormatQuote } from "react-icons/md";
import { motion } from "motion/react";

export const MagicText = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <p
      className="flex-1 text-xs leading-relaxed"
      itemProp="reviewBody"
    >
      <span className="inline-block align-top pr-1 text-lg text-amber-500">
        <MdFormatQuote aria-hidden="true" />
      </span>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
            delay: 0.02 * index, //  każde słowo minimalnie później
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
      <span className="inline-block align-bottom pl-1 text-lg text-amber-500">
        <MdFormatQuote aria-hidden="true" />
      </span>
    </p>
  );
};
