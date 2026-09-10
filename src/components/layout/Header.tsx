"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, MapPin } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  links: { label: string; href: string }[];
  ctaText: string;
  phone?: string;
}

export function Header({
  title,
  subtitle,
  links,
  ctaText,
  phone,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface/95 backdrop-blur-md sticky top-[37px] z-40 border-b border-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Identity */}
          <Link
            href="/"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            <span className="font-serif text-2xl sm:text-3xl text-foreground font-semibold tracking-tight group-hover:text-primary transition-colors">
              {title}
            </span>
            {subtitle && (
              <span className="text-[11px] sm:text-xs text-muted font-sans tracking-wide uppercase mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent inline" />
                {subtitle}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-foreground/80"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            {phone && (
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="text-xs text-muted hover:text-foreground transition-colors flex items-center gap-1.5 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>{phone}</span>
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.99]"
            >
              <Calendar className="w-3.5 h-3.5 text-accent-light" />
              <span>{ctaText}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="sm:hidden px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold"
            >
              Consultation
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-border px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            {phone && (
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="text-sm text-muted flex items-center gap-2 px-3"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>{phone}</span>
              </a>
            )}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-primary text-white text-sm font-semibold tracking-wide"
            >
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
