import { Programs } from "@/components/sections/Programs";
import { Gallery } from "@/components/sections/Gallery";

export const metadata = {
  title: "Programs — IARSA",
  description: "Roller skating programs for all ages and skill levels at IARSA Visakhapatnam.",
};

export default function ProgramsPage() {
  return (
    <>
      <div className="bg-[#0d0d0d] border-b border-white/[0.08] px-[5%] py-16 text-center">
        <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-3">
          What We Offer
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Our Programs
        </h1>
      </div>

      <Programs />
      <Gallery />
    </>
  );
}
