import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  subtext: string;
  primaryCta: string;
  image1: string;
  image2: string;
  secondaryCta?: string;
}

export function HeroSection({
  eyebrow,
  title,
  subtext,
  primaryCta,
  image1,
  image2,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-light text-foreground text-[11px] sm:text-xs font-semibold tracking-wider uppercase border border-accent/20">
              <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>{eyebrow}</span>
            </div>

            {/* H1 Primary Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground font-bold tracking-tight leading-[1.15]">
              {title}
            </h1>

            {/* Subtitle / Descriptive Body */}
            <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtext}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-semibold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.99] group"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-accent-light group-hover:translate-x-1 transition-transform" />
              </a>
              {secondaryCta && (
                <a
                  href="#specialties"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-sm sm:text-base font-semibold tracking-wide border border-border transition-colors"
                >
                  <span>{secondaryCta}</span>
                </a>
              )}
            </div>

            {/* Credibility reassurance micro-copy */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-muted font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Licensed PsyD Psychologist
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                Evidence-Based (EMDR & CBT)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                In-Person & CA Telehealth
              </span>
            </div>
          </div>

          {/* Right Dual Arched Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end max-w-md mx-auto lg:max-w-none">
              {/* Primary taller arched image */}
              <div className="relative aspect-[3/4] w-full arch-top overflow-hidden shadow-xl border-4 border-surface bg-secondary">
                <Image
                  src={image1}
                  alt="Mindful therapy environment"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Secondary offset arched image */}
              <div className="relative aspect-[3/4] w-full arch-top overflow-hidden shadow-lg border-4 border-surface bg-secondary translate-y-6 sm:translate-y-8">
                <Image
                  src={image2}
                  alt="Calming therapy space with natural light"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Subtle organic decorative backdrop glow */}
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl -z-10 blur-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
