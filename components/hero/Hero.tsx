import { CONTACT, MAILTO } from "@/config/contact/Contact";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="relative w-full py-4 max-w-hd mx-auto"
      aria-labelledby="schools-offer-heading"
      role="region"
    >
      <div
        className="flex items-center justify-center gap-1 "
        aria-hidden="true"
      >
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
      </div>
      <section className="relative max-w-6xl mx-auto py-8">
        <div
          className="relative bg-cover bg-center bg-no-repeat object-scale-down h-100 "
          aria-hidden="true"
        >
          <Image
            src="/images/lamaClose.avif"
            fill
            alt="Pyszczek Lamy z Bliska"
            sizes="100vw"
            className="object-cover max-h-100"
          />

          <div className=" relative w-full p-1  mx-auto font-special text-center font-bold bg-black/50 text-white md:text-2xl">
            <h2> Zapraszamy szkoły i przedszkola na Ranczo Patataj!</h2>
            <p className="">
              Idealna propozycja na wycieczkę edukacyjną, dzień integracji czy
              tematyczne warsztaty.
            </p>
          </div>
        </div>
        <p className=" text-center font-ultra bg-emerald-300/30 p-2">
          Atrakcyjne pakiety dla szkół !!!
        </p>
      </section>
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
              aria-label="Napisz wiadomość e-mail do Ranczo Patataj"
            >
              {CONTACT.email}
            </a>
          </span>
        </h2>
      </div>
    </section>
  );
};
