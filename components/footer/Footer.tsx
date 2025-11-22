import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[var(--c-primary)]/10 py-4 border border-[var(--c-primary)] font-poppins">
      <p className="text-center font-amatic font-semibold">
        {" "}
        Ranczo Patataj - Gospodarstwo Edukacyjne
      </p>
      <div className="flex justify-center items-center gap-4 p-2">
        <a
          href="tel:+48507526916"
          className="inline-flex items-center gap-2 font-poppins  hover:text-emerald-400 0 transition-all duration text-xs justify-start"
          aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
        >
          <FaPhone className="self-start animate-pulse text-emerald-500" />
          <span>+48 507 526 916</span>
        </a>
        <a
          href="https://www.instagram.com/ranczopatataj"
          className="p-2"
        >
          <p className="bg-[url('/icons/ig.avif')] w-6 h-6 bg-cover" />{" "}
        </a>
        <a
          href="https://www.facebook.com/PatatajRanczo/"
          className="p-2"
        >
          <p className="bg-[url('/icons/fb.avif')] w-6 h-6 bg-cover " />{" "}
        </a>
      </div>
      <div className="text-xs text-center flex justify-center items-center gap-2">
        <FaLocationDot className="text-red-400" />{" "}
        <p>Jastrzębia Stara 9, 05-640 Mogielnica, Polska</p>
      </div>
      <hr className="text-[var(--c-primary)] mx-4 my-1" />
      <p className="text-center text-xs">
        © {new Date().getFullYear()} Ranczo Patataj. All rights reserved.
      </p>
      <p className="text-[.5rem] text-center py-2">
        <a href="https://portfoliodev-hazel.vercel.app/">
          {" "}
          Design And Develop rafbob
        </a>
      </p>
    </footer>
  );
};
