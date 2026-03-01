"use client";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { CONTACT, PHONETO, MAILTO } from "@/config/contact/Contact";

export const Footer = () => {
  return (
    <footer
      className="relative bg-ranczo-texture mt-12 py-10 border-t border-stone-200 dark:border-stone-600"
      aria-label="Stopka strony Ranczo Patataj"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta

        itemProp="url"

        content="https://ranczopatataj.pl"

      />
      <div className="max-w-6xl mx-auto px-4">


        <div className="text-center ">
          <p className="font-ultra text-xl md:text-3xl text-stone-900 dark:text-stone-50">
            Ranczo Patataj
          </p>
          <p className="font-ultra text-emerald-700 dark:text-emerald-500 text-sm md:text-base">
            Gospodarstwo Edukacyjne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start border-y border-stone-200/50 dark:border-stone-800/50 py-10">


          <div className="flex flex-col items-center md:items-start space-y-4 ">
            <h3 className="font-ultra text-xs uppercase tracking-widest text-stone-400">Kontakt</h3>
            <a
              href={PHONETO}
              className="group flex items-center gap-3 font-curier text-stone-700 dark:text-stone-300 hover:text-emerald-600 transition-colors"
            >
              <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600">
                <FaPhone size={14} className="group-hover:animate-bounce" />
              </div>
              <span itemProp="telephone">{CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={MAILTO}
              className="group flex items-center gap-3 font-curier text-stone-700 dark:text-stone-300 hover:text-emerald-600 transition-colors"
            >
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500">
                <MdAttachEmail size={14} />
              </div>
              <span itemProp="email">{CONTACT.email}</span>
            </a>
          </div>


          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-ultra text-xs uppercase tracking-widest text-stone-400">Lokalizacja</h3>
            <Link href="/kontakt#mapa" className="group text-center">
              <address
                className="not-italic font-curier text-stone-700 dark:text-stone-300 group-hover:text-amber-600 transition-colors"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaLocationDot className="text-amber-500" />
                  <span itemProp="streetAddress">Jastrzębia Stara 9</span>
                </div>
                <p>
                  <span itemProp="postalCode">05-640</span>{" "}
                  <span itemProp="addressLocality">Mogielnica</span>
                </p>
              </address>
            </Link>
            <iframe
              id="mapa-footer"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9896.215259306677!2d20.757111!3d51.677158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719059202a4e90f%3A0x6a1b2963fc94970!2sRanczo%20Patataj%20-%20Gospodarstwo%20Edukacyjne!5e0!3m2!1spl!2spl!4v1769445863524!5m2!1spl!2spl"
              width="100%"
              height="100"
              loading="lazy"
              className="rounded-xl hidden md:block"
              title="Mapa dojazdu do Rancza Patataj"
            ></iframe>
          </div>


          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-ultra text-xs uppercase tracking-widest text-stone-400">Social Media</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ranczopatataj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <div className="bg-[url('/icons/ig.avif')] w-10 h-10 bg-cover rounded-lg shadow-sm" />
              </a>
              <a
                href="https://www.facebook.com/PatatajRanczo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <div className="bg-[url('/icons/fb.avif')] w-10 h-10 bg-cover rounded-lg shadow-sm" />
              </a>
            </div>
          </div>
        </div>


        <div className="pt-8 flex flex-col items-center space-y-4 text-[10px] font-curier text-stone-400 uppercase tracking-widest border-t-1 border-emerald-600">
          <div className="flex gap-6">
            <Link href="/polityka" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              Polityka prywatności
            </Link>
            <span>© {new Date().getFullYear()} Ranczo Patataj</span>
          </div>

          <a
            href="https://portfoliodev-hazel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors "
          >
            Design & Develop rafbob
          </a>
        </div>
      </div>
    </footer>
  );
};