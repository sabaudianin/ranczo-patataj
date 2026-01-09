import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="px-2 pt-24 md:pt-0 pb-4 dark:bg-black bg-[var(--background)] max-w-4xl mx-auto text-center">
      <div className="flex flex-col gap-2 py-12 md:py-24 px-8">
        <p className="md:text-xl">404 - Nie znaleziono strony</p>
        <div className="relative w-full h-40 md:h-60 lg:h-96 text-center my-8 ">
          <Image
            src="/images/car2.avif"
            fill
            alt="Ranczo widok z ulicy"
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </div>

        <p className="md:text-xl py-4">
          Wygląda na to, że ta ścieżka nie istnieje.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 border border-emerald-700/90 shadow-md hover:scale-101 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--c-primary)] text-sm lg:text-md text-white font-curier font-semibold"
        >
          Powrót na stronę główną
        </Link>
      </div>
    </section>
  );
}
