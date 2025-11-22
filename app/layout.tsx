import type { Metadata } from "next";
import {
  poppins,
  ultra,
  moonrock,
  playwrite,
  asset,
  amatic,
} from "@/lib/fonts";
import "../styles/globals.css";
import { orgJsonLd } from "@/lib/seo/schema";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Ranczo Patataj",
  description: "Gospodarstwo edukacyjne",
  //opengraph , icons...
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
        className={` ${poppins.variable} ${ultra.variable} ${asset.variable} ${moonrock.variable} ${playwrite.variable} ${amatic.variable} antialiased`}
      >
        <Navbar />

        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
