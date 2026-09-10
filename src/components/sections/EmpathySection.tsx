import Image from "next/image";
import { HeartHandshake } from "lucide-react";

interface EmpathySectionProps {
  heading: string;
  paragraphs: string[];
  image: string;
}

export function EmpathySection({
  heading,
  paragraphs,
  image,
}: EmpathySectionProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image with architectural arch (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto arch-top overflow-hidden shadow-xl border-4 border-surface bg-surface">
              <Image
                src={image}
                alt="Compassionate connection and grounded reflection"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-accent uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-accent" />
              <span>Compassionate Support</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight leading-[1.2]">
              {heading}
            </h2>

            <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-border/80 flex items-center gap-4">
              <a
                href="#contact"
                className="text-primary font-semibold text-sm sm:text-base hover:text-primary-hover inline-flex items-center gap-1.5 underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                <span>Take the first step today</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
