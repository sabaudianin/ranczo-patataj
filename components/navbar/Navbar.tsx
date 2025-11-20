"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { MAIN_NAV_LINKS } from "@/lib/navigation";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const isLinkActive = (href: string, pathname: string) => {
  if (!pathname) return false;
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}`);
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Przejdź do treści
      </a>

      <header className="fixed md:sticky w-full p-2 z-50 ">
        <div className="">
          <div className="w-full p-2 liquid-glass flex justify-between items-center max-w-hd mx-auto 2xl:px-72">
            <div className="w-full relative flex justify-between items-center">
              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <Image
                  src={"/logorp.avif"}
                  width={65}
                  height={65}
                  alt="Logo Ranczo Patataj"
                  className=" md:h-24 md:w-24"
                  priority
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2 rounded-2xl md:hidden  text-[var(--c-primary)] transition-all duration-300"
                aria-label={
                  isOpen ? "Zamknij Menu Navigacji" : "Otwórz Menu Navigacji"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
              >
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <HiOutlineX size={42} />
                  ) : (
                    <HiOutlineMenu size={42} />
                  )}
                </motion.div>
              </button>
            </div>

            <nav
              aria-label="Główna Nawigacja"
              className="hidden md:block w-full "
            >
              <div className="max-w-6xl mx-auto px-6 py-3">
                <ul className="flex gap-6 justify-around">
                  {MAIN_NAV_LINKS.map((link) => {
                    const active = isLinkActive(link.href, pathname);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={`relative pb-1 transition-colors hover:text-amber-300 font-ultra text-xl ${
                            active && "text-amber-600"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.nav
                aria-label="Główna nawigacja mobilna "
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -120 }}
                transition={{ duration: 0.3 }}
                className="w-full shadow-lg md:hidden backdrop-blur-xl rounded"
              >
                <ul className="flex justify-around ">
                  {MAIN_NAV_LINKS.map((link) => {
                    const active = isLinkActive(link.href, pathname);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={`block rounded-lg px-3 py-4 transition hover:bg-amber-50 transition-colors hover:text-amber-500 text-xs font-ultra ${
                            active && "text-amber-600"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};
