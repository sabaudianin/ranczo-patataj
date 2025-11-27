import { SiOllama } from "react-icons/si";
import { CONTACT, PHONETO, MAILTO } from "@/config/contact/Contact";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="relative w-full py-4 max-w-hd mx-auto"
      aria-labelledby="schools-offer-heading"
      role="region"
    >
      <h3 className=" p-4 font-ultra text-[var(--c-primary)] uppercase text-center md:text-2xl">
        Twoje ulubione miejsce na rodzinny wypad poza miasto, tylko godzinę od
        Warszawy.
      </h3>
      <div
        className="flex items-center justify-center gap-1 "
        aria-hidden="true"
      >
        <SiOllama className="text-xl text-[var(--c-primary)]" />
        <SiOllama className="text-3xl text-[var(--c-primary)]" />
        <SiOllama className="text-5xl text-[var(--c-primary)]" />
        <Image
          src="/images/g1.avif"
          alt=""
          width={100}
          height={100}
          className="hidden md:block w-20 md:w-40 h-auto object-cover rounded"
        />
        <Image
          src="/images/g7.avif"
          alt=""
          width={100}
          height={100}
          className="w-20 md:w-40 h-auto object-cover rounded oject-cover"
        />
        <Image
          src="/images/g2.avif"
          alt=""
          width={100}
          height={100}
          className="w-20 md:w-40 h-auto object-cover rounded "
        />
        <Image
          src="/images/g3.avif"
          alt="a"
          width={100}
          height={100}
          className="w-20 md:w-40 h-auto object-cover rounded"
        />
        <Image
          src="/images/g5.avif"
          alt=""
          width={100}
          height={100}
          className="hidden md:block w-20 md:w-40 h-auto object-cover rounded"
        />
        <SiOllama className="text-5xl text-[var(--c-primary)]" />
        <SiOllama className="text-3xl text-[var(--c-primary)]" />
        <SiOllama className="text-xl text-[var(--c-primary)]" />
      </div>
      <div className="pt-10">
        <h2
          className="text-center  md:text-xl font-ultra pb-6  "
          id="schools-offer-heading"
        >
          Zapytaj o naszą nową ofertę dla szkół i przedszkoli: <br />
          <span className="font-special  text-base md:text-xl">
            📧{" "}
            <a
              href={MAILTO}
              className="underline underline-offset-2 hover:text-[var(--c-primary)]"
            >
              {CONTACT.email}
            </a>
          </span>
        </h2>
      </div>
    </section>
  );
};
