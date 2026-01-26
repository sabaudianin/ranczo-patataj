export const SocialBar = () => {
  return (
    <div className="flex justify-center items-center gap-12 pb-3">
      {" "}
      <a
        href="https://www.instagram.com/ranczopatataj"
        className=" focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] rounded-full"
        aria-label="Profil Ranczo Patataj na Instagramie"
        target="_blank"
        rel="noopener noreferrer"
        itemProp="sameAs"
      >
        <span
          className="block bg-[url('/icons/ig.avif')] w-8 h-8 md:w-10 md:h-10 bg-cover hover:scale-105 duration-200 transition"
          aria-hidden="true"
        />{" "}
      </a>
      <a
        href="https://www.facebook.com/PatatajRanczo/"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] rounded-full"
        aria-label="Profil Ranczo Patataj na Facebooku"
        target="_blank"
        rel="noopener noreferrer"
        itemProp="sameAs"
      >
        <span
          className="block bg-[url('/icons/fb.avif')] w-8 h-8 md:w-10 md:h-10 bg-cover hover:scale-105 duration-200 transition"
          aria-hidden="true"
        />{" "}
      </a>
    </div>
  );
};
