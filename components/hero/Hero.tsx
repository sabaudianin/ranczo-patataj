import { BgSlider } from "../bgSlider/BgSlider";

const SLIDES = [
  { src: "/images/lamawest.jpg", alt: "Ranczo o zachodzie słońca" },
  { src: "/images/horsesSnow.jpg", alt: "Konie na sniegu" },
  { src: "/images/sala.jpg", alt: "Impreza urodzinowa" },
  { src: "/images/stol.jpg", alt: "Przygotowania do warsztatów " },
];

export const Hero = () => {
  return (
    <section className="relative w-full py-6 ">
      <BgSlider
        slides={SLIDES}
        className="absolute inset-0 h-52 md:h-190  mx-auto rounded-xl"
      />
    </section>
  );
};
