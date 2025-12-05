import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { CONTACT, PHONETO, MAILTO } from "@/config/contact/Contact";

export const Footer = () => {
  return (
    <footer
      className="bg-[var(--c-primary)]/10 py-4 border border-[var(--c-primary)] max-w-hd mx-auto"
      aria-label="Stopka strony Ranczo Patataj"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <p className="text-center font-special font-semibold md:text-2xl">
        {" "}
        Ranczo Patataj - Gospodarstwo Edukacyjne
      </p>

      <meta
        itemProp="url"
        content="https://twoja-domena.pl"
      />

      <div className="flex items-center justify-between md:justify-evenly items-center gap-4 p-6 py-8">
        <div className="">
          <a
            href={PHONETO}
            className="flex items-center gap-2 font-curier  hover:text-emerald-400  transition-all duration text-xs md:text-base justify-start font-curier py-2"
            aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
          >
            <FaPhone className="self-start animate-pulse text-emerald-500" />
            <span itemProp="telephone">{CONTACT.phoneDisplay}</span>
          </a>
          <a
            href={MAILTO}
            className="flex items-center gap-2  hover:text-[var(--c-primary)] text-xs md:text-base font-curier"
          >
            <MdAttachEmail className="self-end animate-pulse text-blue-500" />
            <span itemProp="email">{CONTACT.email}</span>
          </a>
        </div>

        <div className="flex justify-between">
          <a
            href="https://www.instagram.com/ranczopatataj"
            className="p-2"
            aria-label="Profil Ranczo Patataj na Instagramie"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="sameAs"
          >
            <p
              className="bg-[url('/icons/ig.avif')] w-8 h-8 md:h-12 md:w-12 bg-cover"
              aria-hidden="true"
            />{" "}
          </a>
          <a
            href="https://www.facebook.com/PatatajRanczo/"
            className="p-2"
            aria-label="Profil Ranczo Patataj na Facebooku"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="sameAs"
          >
            <p
              className="bg-[url('/icons/fb.avif')] w-8 h-8 md:h-12 md:w-12 bg-cover "
              aria-hidden="true"
            />{" "}
          </a>
        </div>
      </div>
      <iframe
        id="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.053794512001!2d20.75453567767068!3d51.67715837185244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11!3m3!1m2!1s0x471904e4c6dda33f%3A0x62b7aa2c83ef1bda!2sJastrz%C4%99bia%20Stara%209%2C%2005-640%20Jastrz%C4%99bia%20Stara!5e0!3m2!1spl!2spl!4v1763727884546!5m2!1spl!2spl"
        width="50%%"
        height="140"
        loading="lazy"
        className="rounded hidden md:block mx-auto"
        title="Mapa Dojazdu do Rancza Patataj"
      ></iframe>
      <Link href="/kontakt#mapa">
        <address
          className="text-xs text-center flex justify-center items-center gap-2 underline"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <FaLocationDot
            className="text-red-400"
            aria-hidden="true"
          />
          <p className="p-4">
            <span itemProp="streetAddress">Jastrzębia Stara 9</span>,{" "}
            <span itemProp="postalCode">05-640</span>{" "}
            <span itemProp="addressLocality">Mogielnica</span>,{" "}
            <span itemProp="addressCountry">Polska</span>
          </p>
        </address>
      </Link>

      <hr className="text-[var(--c-primary)] mx-4 my-1" />
      <p className="text-center text-xs">
        © {new Date().getFullYear()} Ranczo Patataj. All rights reserved.
      </p>
      <p className="text-[.5rem] text-center py-2">
        <a
          href="https://portfoliodev-hazel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Przejdź do portfolio twórcy strony – rafbob"
        >
          {" "}
          Design &amp; Develop rafbob
        </a>
      </p>
    </footer>
  );
};
