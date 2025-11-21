import { BgSlider } from "../bgSlider/BgSlider";
import { SiOllama } from "react-icons/si";

const SLIDES = [
  { src: "/images/lamawest.jpg", alt: "Ranczo o zachodzie słońca" },
  { src: "/images/horsesSnow.jpg", alt: "Konie na sniegu" },
  { src: "/images/sala.jpg", alt: "Impreza urodzinowa" },
  { src: "/images/stol.jpg", alt: "Przygotowania do warsztatów " },
];

export const Hero = () => {
  return (
    <section className="relative w-full py-4">
      <div className="w-full flex justify-center items-center text-4xl gap-4">
        <SiOllama className="text-amber-700" />
        <SiOllama className="text-amber-500" />
        <SiOllama className="text-amber-600" />
      </div>
      <h2 className=" p-4 font-ultra text-[var(--c-primary)] uppercase text-center md:text-2xl">
        Twoje ulubione miejsce na rodzinny wypad poza miasto, tylko 45 minut od
        Warszawy.
      </h2>
    </section>
  );
};
