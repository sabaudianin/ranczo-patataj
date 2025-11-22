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
    <div className="flex gap-2 justify-center md:gap-4">
      {SLIDES.map((slide, index) => {
        const isHiddenOnMobile = index >= 4 ? "hidden md:flex" : "flex";

        const tilt = index % 2 === 0 ? "-rotate-2" : "rotate-1";

        return (
          <figure
            key={slide.alt}
            className={[
              isHiddenOnMobile,
              "w-24 h-28 md:w-36 md:h-40",
              "bg-[#fdf3e1] border border-neutral-300 rounded-sm",
              "shadow-lg shadow-black/30 p-2",
              "flex flex-col items-center justify-between",
              "transform transition-transform duration-300",
              tilt,
              "hover:rotate-0 hover:-translate-y-1",
            ].join(" ")}
          >
            <div className="w-full h-full overflow-hidden bg-neutral-900/10">
              <Image
                src={slide.src}
                width={80}
                height={80}
                alt={slide.alt}
                className="w-full h-full object-cover block"
              />
            </div>
            <figcaption className="mt-1 text-[0.65rem] text-center leading-tight text-neutral-800">
              {slide.alt}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};
