import { CheckCircle } from "lucide-react";

interface ExpertiseSectionProps {
  heading: string;
  tags: string[];
}

export function ExpertiseSection({ heading, tags }: ExpertiseSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface-alt border-y border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground font-semibold tracking-tight mb-10">
          {heading}
        </h2>

        {/* Dynamic Tag Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {tags.map((tag) => (
            <div
              key={tag}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface border border-border/80 text-foreground/90 text-sm sm:text-base font-medium tracking-wide shadow-sm hover:border-accent hover:text-primary hover:shadow-md transition-all duration-200 cursor-default group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
