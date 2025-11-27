import { SiOllama } from "react-icons/si";
import { PolaroidCard } from "@/ui/polaroid/Polaroid";

export const Final = () => {
  return (
    <section className="pb-4">
      <div className="md:hidden pb-4">
        <p className="text-center font-special pb-1 font-semibold">
          🌍 Gdzie znajduję się nasze Ranczo ?
        </p>
        <iframe
          id="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.053794512001!2d20.75453567767068!3d51.67715837185244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471904e4c6dda33f%3A0x62b7aa2c83ef1bda!2sJastrz%C4%99bia%20Stara%209%2C%2005-640%20Jastrz%C4%99bia%20Stara!5e0!3m2!1spl!2spl!4v1763727884546!5m2!1spl!2spl"
          width="100%"
          height="200"
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>

      <div className="flex justify-center items-center gap-4">
        <SiOllama className=" text-[var(--c-primary)]" />
        <SiOllama className="text-xl text-[var(--c-primary)]" />
        <SiOllama className="text-3xl text-[var(--c-primary)]" />
        <SiOllama className="text-5xl text-[var(--c-primary)]" />
        <PolaroidCard
          src="/images/lamawest.jpg"
          alt="Zachód słońca na Ranczo Patataj"
          caption="Czekamy na Ciebie🤗😍"
        />
        <SiOllama className="text-5xl text-[var(--c-primary)]" />
        <SiOllama className="text-3xl text-[var(--c-primary)]" />
        <SiOllama className="text-xl text-[var(--c-primary)]" />
        <SiOllama className=" text-[var(--c-primary)]" />
      </div>
    </section>
  );
};
