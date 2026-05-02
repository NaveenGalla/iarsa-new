import { Suspense } from "react";
import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Contact — IARSA",
  description: "Get in touch with IARSA. Enrol your child or ask about our skating programs in Visakhapatnam.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#0d0d0d] border-b border-white/[0.08] px-[5%] py-16 text-center">
        <div className="text-[#00b4a6] text-xs font-semibold uppercase tracking-widest mb-3">
          Get in Touch
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Contact Us
        </h1>
      </div>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}
