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
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Ranczo Patataj",
  description: "Gospodarstwo edukacyjne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${ultra.variable} ${asset.variable} ${moonrock.variable} ${playwrite.variable} ${amatic.variable} antialiased`}
      >
        <Navbar />

        <main className="grid place-items-center min-h-screen max-w-hd mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
