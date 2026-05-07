import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Reveal from "@/components/common/Reveal";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO (no reveal — should load instantly) */}
      <Hero />

      {/* PRODUCTS */}
      <Reveal>
        <Products />
      </Reveal>

      {/* WHY CHOOSE US */}
      <Reveal>
        <WhyChooseUs />
      </Reveal>

      {/* CTA */}
      <Reveal>
        <CTA />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
