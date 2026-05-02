import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Programs } from "@/components/sections/Programs";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { EnrolmentCta } from "@/components/sections/EnrolmentCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <About />
      <Values />
      <Programs />
      <Gallery />
      <Team />
      <Stats />
      <Testimonials />
      <Faq />
      <EnrolmentCta />
    </>
  );
}
