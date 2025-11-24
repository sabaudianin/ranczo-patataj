import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer
      className="bg-[var(--c-primary)]/10 py-4 border border-[var(--c-primary)] font-poppins"
      aria-label="Stopka strony Ranczo Patataj"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <p className="text-center font-amatic font-semibold">
        {" "}
        Ranczo Patataj - Gospodarstwo Edukacyjne
      </p>

      <meta
        itemProp="url"
        content="https://twoja-domena.pl"
      />

      <div className="flex justify-center items-center gap-4 p-2">
        <a
          href="tel:+48507526916"
          className="inline-flex items-center gap-2 font-poppins  hover:text-emerald-400 0 transition-all duration text-xs justify-start font-curier"
          aria-label="Zadzwoń, aby zarezerwować termin w Ranczo Patataj"
        >
          <FaPhone className="self-start animate-pulse text-emerald-500" />
          <span itemProp="telephone">+48 507 526 916</span>
        </a>
        <a
          href="https://www.instagram.com/ranczopatataj"
          className="p-2"
          aria-label="Profil Ranczo Patataj na Instagramie"
          target="_blank"
          rel="noopener noreferrer"
          itemProp="sameAs"
        >
          <p
            className="bg-[url('/icons/ig.avif')] w-6 h-6 bg-cover"
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
            className="bg-[url('/icons/fb.avif')] w-6 h-6 bg-cover "
            aria-hidden="true"
          />{" "}
        </a>
      </div>
      <address
        className="text-xs text-center flex justify-center items-center gap-2 not-italic"
        itemScope
        itemType="https://schema.org/PostalAddress"
      >
        <FaLocationDot
          className="text-red-400"
          aria-hidden="true"
        />
        <p>
          <span itemProp="streetAddress">Jastrzębia Stara 9</span>,{" "}
          <span itemProp="postalCode">05-640</span>{" "}
          <span itemProp="addressLocality">Mogielnica</span>,{" "}
          <span itemProp="addressCountry">Polska</span>
        </p>
      </address>

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
