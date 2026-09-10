import Image from "next/image";
import { Calendar, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

interface BookingCtaSectionProps {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  ctaButton: string;
  phoneCta?: string;
  image1: string;
  image2: string;
}

export function BookingCtaSection({
  eyebrow,
  heading,
  paragraphs,
  ctaButton,
  phoneCta,
  image1,
  image2,
}: BookingCtaSectionProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Booking Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase block">
              {eyebrow}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight leading-[1.2]">
              {heading}
            </h2>

            <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.99] group"
              >
                <Calendar className="w-4 h-4 text-accent-light" />
                <span>{ctaButton}</span>
                <ArrowRight className="w-4 h-4 text-accent-light group-hover:translate-x-1 transition-transform" />
              </a>

              {phoneCta && (
                <a
                  href={`tel:${phoneCta.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-sm sm:text-base font-semibold border border-border transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>{phoneCta}</span>
                </a>
              )}
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-muted font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                Free 15-Minute Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                No Obligation
              </span>
            </div>
          </div>

          {/* Right Dual Arched Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[3/4] w-full arch-top overflow-hidden shadow-xl border-4 border-surface bg-secondary">
                <Image
                  src={image1}
                  alt="Therapy consultation setting"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[3/4] w-full arch-top overflow-hidden shadow-lg border-4 border-surface bg-secondary translate-y-6 sm:translate-y-8">
                <Image
                  src={image2}
                  alt="Tranquil natural environment"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
