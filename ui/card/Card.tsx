type RanczoCardProps = {
  eyebrow?: string; // mały tekst nad tytułem, np. "Dla szkół"
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: RanczoCardProps) => {
  return (
    <article
      className={`my-4
        relative flex flex-col gap-3
        rounded-2xl bg-stone-0/90 dark:bg-stone-900/80
        shadow-[3px_3px_10px_0_rgba(0,0,0,0.2)]
        dark:shadow-[0_3px_10px_0_rgba(255,255,255,0.2)]
        backdrop-blur-sm
        px-4 py-4 md:px-6 md:py-5
        transition-all duration-300
        hover:scale-101
        hover:shadow-[0_22px_10px_rgba(15,23,42,0.12)]
        hover:border-emerald-200 dark:hover:border-emerald-400 
        ${className}`}
    >
      {/* delikatny pasek / poświata na górze */}
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-emerald-300/0 via-emerald-300/80 to-amber-300/0" />
      <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-emerald-300/0 via-emerald-300/80 to-amber-300/0" />

      {children}
    </article>
  );
};
