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

        <main className="grid place-items-center min-h-screen max-w-7xl mx-auto">
          {children}
        </main>
        <footer className="bg-[var(--c-primary)]/20 py-4 border border-[var(--c-primary)]">
          <p className="text-center">
            {" "}
            Ranczo Patataj - Gospodarstwo Edukacyjne
          </p>
          <hr className="text-[var(--c-primary)] m-2" />
          <p className="text-center text-xs">
            © {new Date().getFullYear()} Ranczo Patataj. All rights reserved.
          </p>
          <p className="text-xs text-center py-2">
            Design And Develop rafbobbob@gmail.com
          </p>
        </footer>
      </body>
    </html>
  );
}
