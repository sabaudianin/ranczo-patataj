export const SocialBar = () => {
  return (
    <section
      className="flex items-center justify-center gap-10 pt-4"
      aria-label="Media społecznościowe Ranczo Patataj"
    >
      {[
        {
          href: "https://www.instagram.com/ranczopatataj",
          label: "Instagram",
          iconClass: "bg-[url('/icons/ig.avif')]"
        },
        {
          href: "https://www.facebook.com/PatatajRanczo/",
          label: "Facebook",
          iconClass: "bg-[url('/icons/fb.avif')]"
        }
      ].map((social) => (
        <a
          key={social.label}

          href={social.href}
          className="group flex flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-2"
          aria-label={`Profil Ranczo Patataj na ${social.label}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`${social.iconClass} w-12 h-12 md:w-14 md:h-14 bg-cover shadow-lg rounded-2xl group-hover:shadow-emerald-200/50 transition-shadow`}
            aria-hidden="true"
          />
          <span className="font-ultra text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-stone-600 transition-colors">
            {social.label}
          </span>
        </a>
      ))}
    </section>
  );
};
