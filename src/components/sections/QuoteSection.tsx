import Image from "next/image";
import { Quote } from "lucide-react";

interface QuoteSectionProps {
  quote: string;
  image?: string;
}

export function QuoteSection({ quote, image }: QuoteSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-primary text-white relative overflow-hidden transition-colors">
      {/* Subtle organic background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex p-3 rounded-full bg-white/10 text-accent-light mx-auto">
          <Quote className="w-8 h-8 opacity-80" />
        </div>

        <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.3] tracking-tight max-w-4xl mx-auto text-white/95">
          “{quote}”
        </blockquote>

        <div className="h-0.5 w-16 bg-accent mx-auto" />
      </div>
    </section>
  );
}
