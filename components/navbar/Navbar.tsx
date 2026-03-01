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
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}`);
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:outline-none"
      >
        Przejdź do treści
      </a>


      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-neutral-600/50 backdrop-blur-md border-b border-amber-500 dark:border-neutral-400 shadow-lg">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-between items-center h-20 md:h-24">
            <Link href="/" className="relative z-50 group">
              <div className="relative h-14 w-14 md:h-20 md:w-20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logorp.avif"
                  alt="Logo Ranczo Patataj"
                  fill
                  priority
                  sizes="(min-width: 768px) 80px, 56px"
                  className="rounded-full shadow-md object-cover border-2 border-white dark:border-stone-800"
                />
              </div>
            </Link>

            {/* Desktop */}
            <nav aria-label="Główna Nawigacja" className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MAIN_NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href, pathname);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`relative font-ultra text-sm lg:text-xl tracking-tight transition-colors hover:text-emerald-100 ${active ? "text-emerald-400" : "text-stone-900 dark:text-stone-100"
                          }`}
                      >
                        {link.label}
                        {active && (
                          <motion.div
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 rounded-full"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden text-stone-900 dark:text-stone-50 z-50"
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  {isOpen ? <HiOutlineX size={32} /> : <HiOutlineMenu size={32} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/30 dark:bg-neutral-600/70 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 overflow-hidden"
            >
              <ul className="px-4 py-8 space-y-4">
                {MAIN_NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href, pathname);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block font-ultra text-2xl py-2 ${active ? "text-emerald-500" : "text-color-background"
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
      </header>

      {/* Spacer, treść nie chowaa sie pod fixed headerem */}
      <div className="h-20 md:h-24" />
    </>
  );
};