import type { Metadata } from "next";
import { ultra, special, playwrite, curier } from "@/lib/fonts";
import "../styles/globals.css";
import { orgJsonLd } from "@/lib/seo/schema";
import { SITE } from "@/lib/seo/site";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.defaultTitle,
    template: "%s | Ranczo Patataj",
  },

  description: SITE.defaultDescription,

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.legalName,
    locale: SITE.locale,
    images: [{ url: SITE.og.defaultImage, width: 1200, height: 630 }],
  },

  twitter: {
    card: "summary_large_image",
    images: [SITE.og.defaultImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          // globalny Organization JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body
        className={` ${ultra.variable} ${curier.variable} ${special.variable} ${playwrite.variable} antialiased`}
      >
        <Navbar />

        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
