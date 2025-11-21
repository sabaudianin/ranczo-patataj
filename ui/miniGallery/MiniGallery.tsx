import Image from "next/image";

const SLIDES = [
  {
    src: "/images/stol.jpg",
    alt: "Stół na ranczu",
  },
  {
    src: "/images/ognisko.avif",
    alt: "Ognisko na dworze",
  },
  {
    src: "/images/work.avif",
    alt: "Warszaty Kulinarne",
  },
  {
    src: "/images/pierogi.avif",
    alt: "Warszaty z dziecmi",
  },
  {
    src: "/images/lilo.avif",
    alt: "Impreza urodzinowa",
  },
  {
    src: "/images/sala.jpg",
    alt: "Sala na warsztaty",
  },
  {
    src: "/images/woz.avif",
    alt: "Przejażdzka bryczką",
  },
];

export const MiniGallery = () => {
  return (
    <div className="flex  gap-1 justify-center md:gap-4">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.alt}
          className={
            index >= 4
              ? "hidden md:block w-22 h-22 md:w-32 md:h-32"
              : "w-22 h-22 md:w-32 md:h-32"
          }
        >
          <Image
            src={slide.src}
            width={80}
            height={80}
            alt={slide.alt}
            className="w-full h-full object-cover block rounded-md"
          />
        </div>
      ))}
    </div>
  );
};
