import { BgSlider } from "../bgSlider/BgSlider";

const SLIDES = [
  { src: "/images/car1.jpg", alt: "Ranczo o zachodzie słońca" },
  { src: "/images/car2.jpg", alt: "Konie na sniegu" },
  { src: "/images/car5.jpg", alt: "Impreza urodzinowa" },
  { src: "/images/car10.jpg", alt: "Przygotowania do warsztatów " },
];

export const Cta = () => {
  return (
    <section className=" w-full max-w-hd mx-auto">
      <BgSlider
        slides={SLIDES}
        className="absolute inset-0 h-64 md:h-100 mx-auto w-full  "
      />
    </section>
  );
};
