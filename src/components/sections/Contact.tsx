"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/data/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Contact() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState(() => searchParams.get("program") ?? "");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const programLine = program ? `\nProgram interest: ${program}` : "";
    const text = encodeURIComponent(
      `Hi! I'm ${name} (${phone}).${programLine}\n\n${message}`
    );
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full bg-[#161616] border border-white/[0.10] text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#006fe6]/60 transition-colors";

  return (
    <section className="bg-[#030303] px-[5%] py-20 md:py-28">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatedSection direction="left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Send a Message</h2>
          <p className="text-white/45 text-sm mb-8 leading-relaxed">
            Fill in the form — we&apos;ll open WhatsApp with your message pre-filled so you can send it directly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="text-white/50 text-xs uppercase tracking-widest block mb-2">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Reddy"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="text-white/50 text-xs uppercase tracking-widest block mb-2">
                Phone Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-program" className="text-white/50 text-xs uppercase tracking-widest block mb-2">
                Program Interest
              </label>
              <input
                id="contact-program"
                type="text"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                placeholder="e.g. Beginners, Juniors Artistic, Senior Artistic"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-white/50 text-xs uppercase tracking-widest block mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="I'd like to know more about the beginner program for my 7-year-old..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#006fe6] hover:bg-[#0059c2] text-white py-3.5 rounded-xl text-[15px] font-medium transition-all hover:shadow-[0_8px_24px_rgba(0,111,230,0.38)]"
            >
              Send via WhatsApp →
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15}>
          <div className="bg-[#161616] border border-white/[0.08] rounded-2xl p-8 h-full">
            <h3 className="text-white font-bold text-lg mb-7">Visit Us</h3>

            <ul className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: "Address", value: SITE.address },
                { icon: Phone, label: "Phone", value: `${SITE.phone}\n${SITE.phone2}` },
                { icon: Mail, label: "Email", value: SITE.email },
                {
                  icon: Clock,
                  label: "Hours",
                  value:
                    "Beginners: Tue/Wed/Fri/Sat/Sun 5–6:30 AM & 5–6:30 PM\nJuniors: Weekdays 4–5:30 PM · Weekends 5–8:30 AM & 4–5:30 PM\nSenior: Weekdays 6–8:30 PM · Weekends 5–8:30 AM & 6–8:30 PM",
                },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#006fe6]/10 border border-[#006fe6]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#006fe6]" />
                  </div>
                  <div>
                    <div className="text-white/35 text-[10px] uppercase tracking-widest mb-1">{label}</div>
                    <div className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{value}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl overflow-hidden border border-white/[0.08] aspect-video">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IARSA location map"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
