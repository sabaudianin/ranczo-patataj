import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ranczopatataj.pl";

  const routes = [
    "",
    "/oferta",
    "/ranczo",
    "/kontakt",
    "/alpakoterapia",
    "/polityka",
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
