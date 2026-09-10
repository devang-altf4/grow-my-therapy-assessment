import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

interface FooterProps {
  name: string;
  license?: string;
  address: string;
  phone: string;
  email: string;
  aboutText: string;
  serviceAreas?: string;
  officeHours?: string;
  disclaimer: string;
  navLinks: { label: string; href: string }[];
}

export function Footer({
  name,
  license,
  address,
  phone,
  email,
  aboutText,
  serviceAreas,
  officeHours,
  disclaimer,
  navLinks,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-border/80">
          {/* Col 1: Brand & Clinical Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground font-semibold tracking-tight">
                {name}
              </h2>
              {license && (
                <p className="text-xs uppercase tracking-widest text-accent font-semibold mt-1">
                  {license}
                </p>
              )}
            </div>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-md">
              {aboutText}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs text-foreground font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>HIPAA Compliant • Secure Telehealth in California</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground tracking-tight">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-muted">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Practice Space (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground tracking-tight">
              Practice Location & Inquiries
            </h3>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${phone.replace(/\D/g, "")}`} className="hover:text-primary transition-colors">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </div>
              {officeHours && (
                <div className="flex items-start gap-2.5 pt-1">
                  <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">{officeHours}</span>
                </div>
              )}
            </div>

            {serviceAreas && (
              <div className="pt-3 border-t border-border/60">
                <p className="text-xs text-muted/90 font-medium">Service Areas:</p>
                <p className="text-xs text-muted mt-0.5 leading-relaxed">{serviceAreas}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sub-Footer / Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p className="text-center md:text-left">
            © {currentYear} {name}. All rights reserved. Professional Psychological Services.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-muted/80">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Good Faith Estimate</span>
            <span>•</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>

        {/* Clinical Emergency Disclaimer */}
        <div className="mt-6 pt-4 border-t border-border/40 text-[11px] text-muted/75 text-center leading-relaxed max-w-4xl mx-auto">
          <p>{disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
