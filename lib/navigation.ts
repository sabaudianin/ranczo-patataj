export type NavLink = {
  href: string;
  label: string;
};

export const MAIN_NAV_LINKS: NavLink[] = [
  { href: "/", label: "Strona Główna" },
  { href: "/ranczo", label: "Ranczo" },
  { href: "/oferta", label: "Oferta" },
  // { href: "/galeria", label: "Galeria" },
  { href: "/kontakt", label: "Kontakt" },
];
