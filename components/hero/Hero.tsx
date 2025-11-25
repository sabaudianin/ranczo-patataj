import { SiOllama } from "react-icons/si";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full py-4 max-w-hd mx-auto">
      <div className="bg-[url('/images/pole.avif')] bg-cover bg-center bg-no-repeat object-scale-down h-100 ">
        <div className=" relative w-full p-1  mx-auto font-special text-center font-bold bg-black/50 text-white md:text-2xl">
          <h2> Zapraszamy szkoły i przedszkola na Ranczo Patataj!</h2>
          <p className="">
            Idealna propozycja na wycieczkę edukacyjną, dzień integracji czy
            tematyczne warsztaty.
          </p>
        </div>
      </div>
      <p className=" text-center font-ultra bg-emerald-300/30">
        Atrakcyjne pakiety dla szkół !!!
      </p>

      <h3 className=" p-4 font-ultra text-[var(--c-primary)] uppercase text-center md:text-2xl">
        Twoje ulubione miejsce na rodzinny wypad poza miasto, tylko 55 minut od
        Warszawy.
      </h3>
      <div className="flex items-center justify-center gap-1 ">
        <SiOllama className="text-xl text-[var(--c-primary)]" />
        <SiOllama className="text-3xl text-[var(--c-primary)]" />
        <SiOllama className="text-5xl text-[var(--c-primary)]" />
        <Image
          src="/images/g1.avif"
          alt=""
          width={100}
          height={100}
          className="object-cover rounded hidden md:block"
        />
        <Image
          src="/images/g7.avif"
          alt=""
          width={100}
          height={100}
          className="object-cover rounded"
        />
        <Image
          src="/images/g2.avif"
          alt=""
          width={100}
          height={100}
          className="object-cover rounded "
        />
        <Image
          src="/images/g3.avif"
          alt="a"
          width={100}
          height={100}
          className="object-cover rounded "
        />
        <Image
          src="/images/g5.avif"
          alt=""
          width={100}
          height={100}
          className="object-cover rounded hidden md:block"
        />
        <SiOllama className="text-5xl text-[var(--c-primary)]" />
        <SiOllama className="text-3xl text-[var(--c-primary)]" />
        <SiOllama className="text-xl text-[var(--c-primary)]" />
      </div>
    </section>
  );
};
