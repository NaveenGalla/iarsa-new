import Link from "next/link";
import { SITE } from "@/data/site";

const FOOTER_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#team", label: "Team" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/[0.08] px-[5%] py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-white font-bold text-lg tracking-tight mb-1">{SITE.name}</div>
            <div className="text-white/40 text-sm mb-4">{SITE.fullName}</div>
            <p className="text-white/40 text-sm leading-relaxed">{SITE.address}</p>
          </div>
          <div>
            <div className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/45 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Contact
            </div>
            <ul className="space-y-2.5 text-sm text-white/45">
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone2}`} className="hover:text-white transition-colors">
                  {SITE.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00b4a6] hover:text-[#00c4b4] transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex gap-4 pt-1">
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={SITE.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-white/25 text-xs">
          <span>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</span>
          <span>Est. {SITE.established} · {SITE.city}</span>
        </div>
      </div>
    </footer>
  );
}
