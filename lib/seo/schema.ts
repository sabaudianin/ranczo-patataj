import { CONTACT, PHONETO, MAILTO } from "@/config/contact/Contact";

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ranczo Patataj - Gospodarstwo Edukacyjne",
  url: "https://twojadomena.pl",
  logo: "https://twojadomena.pl/logo.png",
};

type PostalAddress = {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
};

type OpeningHoursSpecification = {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

type LocalBusinessData = {
  name: string;
  url: string;
  telephone?: string;
  address?: PostalAddress;
  openingHoursSpecification?: OpeningHoursSpecification[];
};

export const createLocalBusinessJsonLd = (data: LocalBusinessData) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  ...data,
});

//  helper dla ContactPage
type ContactPageData = {
  name: string;
  url: string;
};

export const createContactPageJsonLd = (data: ContactPageData) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  ...data,
});

//oferta
type ServiceItem = {
  name: string;
  description?: string;
};

export const createServicesItemListJsonLd = (items: ServiceItem[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      ...item,
    },
  })),
});

// Gallery
export const createGalleryPageJsonLd = (data: {
  name: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  ...data,
});

// O nas
export const createAboutPageJsonLd = (data: { name: string; url: string }) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  ...data,
});

type WebPageData = {
  name: string;
  url: string;
  description?: string;
};

export const createWebPageJsonLd = (data: WebPageData) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  ...data,
});
