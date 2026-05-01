import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Team } from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <About />
      <Values />
      <Team />
    </>
  );
}
