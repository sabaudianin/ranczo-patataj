import { PolaroidCard } from "@/ui/polaroid/Polaroid";

export const Final = () => {
  return (
    <section className="pb-4">
      <div className="flex justify-center items-center">
        <PolaroidCard
          src="/images/lamawest.jpg"
          alt="Zachód słońca na Ranczo Patataj"
          caption="Czekamy na Ciebie 🤩🤗😍"
        />
      </div>
    </section>
  );
};
