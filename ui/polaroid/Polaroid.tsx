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
      className={`bg-slate-100 te shadow-lg shadow-black/20 rounded border border-neutral-200 p-3 pb-6 transform hover:-translate-y-1 hover:rotate-1 transition-transform duration-300
        ${className}
      `}
    >
      <div className="aspect-[3/4] w-48 overflow-hidden bg-neutral-200 ">
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="h-full w-full object-cover rounded"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-bold font-amatic text-black">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
