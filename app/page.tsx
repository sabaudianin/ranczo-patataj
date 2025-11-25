import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { Features } from "@/components/featurs/Features";
import { Cta } from "@/components/cta/Cta";
import { Banner } from "@/components/banner/Banner";
import { Final } from "@/components/final/Final";
import { MiniGallery } from "@/ui/miniGallery/MiniGallery";

export default function Home() {
  return (
    <section className="relative px-2 pt-24 md:pt-0 dark:bg-black bg-[var(--c-accent)] mx-auto">
      <Banner />
      <Cta />
      <MiniGallery />
      <Hero />

      <Features />
      <Testimonial />
      <Final />
    </section>
  );
}
