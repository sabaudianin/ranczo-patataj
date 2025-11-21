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
