import Image from "next/image";

type PolaroidCardProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export const PolaroidCard = ({
  src,
  alt,
  caption,
  className = "",
}: PolaroidCardProps) => {
  return (
    <figure
      className={`max-w-2xl p-3 pb-6 bg-slate-100 shadow-lg shadow-black/20 rounded border border-neutral-200   transform hover:-translate-y-1 hover:rotate-1 transition-transform duration-300
        ${className}
      `}
    >
      <div className="relative aspect-[4/3] w-full  overflow-hidden bg-neutral-200 ">
        <Image
          src={src}
          alt={alt}
          fill
          className="h-full w-full object-cover rounded"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-bold font-special text-black md:text-xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
