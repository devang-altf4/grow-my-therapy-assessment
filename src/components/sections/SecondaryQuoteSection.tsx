import Image from "next/image";

interface SecondaryQuoteSectionProps {
  quote: string;
  image?: string;
}

export function SecondaryQuoteSection({ quote, image }: SecondaryQuoteSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-secondary/60 relative overflow-hidden transition-colors border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-semibold tracking-widest text-accent uppercase">
          A Gentle Reminder
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight leading-[1.25] max-w-3xl mx-auto">
          {quote}
        </h2>
        <div className="h-1 w-12 bg-primary rounded-full mx-auto" />
      </div>
    </section>
  );
}
