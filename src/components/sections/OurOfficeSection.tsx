import Image from "next/image";
import { MapPin, ShieldCheck, Sun, Sparkles, CheckCircle2 } from "lucide-react";

interface OfficeImage {
  src: string;
  alt: string;
  caption?: string;
}

interface OfficeFeature {
  title: string;
  description: string;
}

interface OurOfficeSectionProps {
  badge: string;
  heading: string;
  subheading: string;
  description: string;
  addressNotice: string;
  features: OfficeFeature[];
  images: OfficeImage[];
}

export function OurOfficeSection({
  badge,
  heading,
  subheading,
  description,
  addressNotice,
  features,
  images,
}: OurOfficeSectionProps) {
  return (
    <section id="our-office" className="py-20 sm:py-32 bg-secondary/50 transition-colors border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-semibold text-accent uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>{badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight leading-[1.2]">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Visual Office Gallery: 2 Authentic Images from Dr. Maya Reynolds' Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-surface rounded-2xl p-4 sm:p-5 border border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full arch-card overflow-hidden bg-secondary border border-border/60">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
              {img.caption && (
                <div className="pt-3 px-2 flex items-center justify-between text-xs text-muted font-medium">
                  <span>{img.caption}</span>
                  <span className="text-accent font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Practice Space
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Copy & Details Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Description (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl text-foreground font-semibold tracking-tight">
              An Intentional Setting for Clarity & Ease
            </h3>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {description}
            </p>
            <div className="p-4 rounded-xl bg-surface border border-border flex items-start gap-3 text-sm text-muted">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground block font-semibold">
                  Physical Practice Address:
                </strong>
                <span>{addressNotice}</span>
              </div>
            </div>
          </div>

          {/* Practice Features (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface border border-border/80 flex items-start gap-4 hover:border-accent/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-secondary text-primary shrink-0">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Sun className="w-5 h-5" />}
                  {idx === 2 && <MapPin className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
