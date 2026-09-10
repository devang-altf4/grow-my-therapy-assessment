import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Award } from "lucide-react";

interface HowWeWorkSectionProps {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  buttonText: string;
  image: string;
  therapistName?: string;
  therapistTitle?: string;
}

export function HowWeWorkSection({
  eyebrow,
  heading,
  paragraphs,
  buttonText,
  image,
  therapistName,
  therapistTitle,
}: HowWeWorkSectionProps) {
  return (
    <section id="approach" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight leading-[1.2]">
              {heading}
            </h2>

            <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.99] group"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 text-accent-light group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Therapist Portrait Bio Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              {/* Arched Portrait Frame */}
              <div className="relative aspect-[4/5] w-full arch-top overflow-hidden shadow-2xl border-4 border-surface bg-secondary">
                <Image
                  src={image}
                  alt={therapistName || "Therapist Portrait"}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Credential Tag */}
                {therapistName && (
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/90 backdrop-blur-md border border-white/40 shadow-lg text-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 text-accent" />
                      <h4 className="font-serif text-lg font-bold text-foreground">
                        {therapistName}
                      </h4>
                    </div>
                    {therapistTitle && (
                      <p className="text-xs text-muted font-medium">
                        {therapistTitle}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Decorative accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 arch-top -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
