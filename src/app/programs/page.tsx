import type { Metadata } from "next";
import { Programs } from "@/components/sections/Programs";
import { Gallery } from "@/components/sections/Gallery";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Programs — ${SITE.name}`,
  description:
    "Beginner, Juniors Artistic and Senior Artistic skating programs at IARSA, Visakhapatnam.",
};

export default function ProgramsPage() {
  return (
    <main>
      <Programs />
      <Gallery />
    </main>
  );
}
