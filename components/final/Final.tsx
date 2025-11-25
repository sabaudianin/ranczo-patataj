import { SiOllama } from "react-icons/si";
import { PolaroidCard } from "@/ui/polaroid/Polaroid";

export const Final = () => {
  return (
    <section className="pb-4">
      <div className="flex justify-center items-center gap-4">
        <SiOllama className=" text-[var(--c-primary)]" />
        <SiOllama className="text-xl text-[var(--c-primary)]" />
        <SiOllama className="text-3xl text-[var(--c-primary)]" />
        <SiOllama className="text-5xl text-[var(--c-primary)]" />
        <PolaroidCard
          src="/images/lamawest.jpg"
          alt="Zachód słońca na Ranczo Patataj"
          caption="Czekamy na Ciebie 🤩🤗😍"
        />
        <SiOllama className="text-5xl text-[var(--c-primary)]" />
        <SiOllama className="text-3xl text-[var(--c-primary)]" />
        <SiOllama className="text-xl text-[var(--c-primary)]" />
        <SiOllama className=" text-[var(--c-primary)]" />
      </div>
    </section>
  );
};
