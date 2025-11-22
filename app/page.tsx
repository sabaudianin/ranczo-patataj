import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { Features } from "@/components/featurs/Features";
import { Cta } from "@/components/cta/Cta";
import { Banner } from "@/components/banner/Banner";
import { Eventy } from "@/components/eventy/Eventy";

export default function Home() {
  return (
    <section className="relative px-1  py-24 md:py-0 dark:bg-black bg-[var(--c-accent)] mx-auto">
      <Cta />
      <Hero />
      <Banner />
      <Features />
      <Testimonial />
      <Eventy />
    </section>
  );
}
