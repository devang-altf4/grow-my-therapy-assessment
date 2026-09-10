import Image from "next/image";
import { WhoWeHelpItem } from "@/config/mayaContent";
import { Users } from "lucide-react";

interface WhoWeHelpSectionProps {
  heading: string;
  subheading?: string;
  items: WhoWeHelpItem[];
}

export function WhoWeHelpSection({
  heading,
  subheading,
  items,
}: WhoWeHelpSectionProps) {
  return (
    <section id="who-we-help" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow and Section Heading */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-border">
          <Users className="w-3.5 h-3.5 text-accent" />
          <span>Client Focus</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight">
          {heading}
        </h2>

        {subheading && (
          <p className="mt-3 text-muted text-base sm:text-lg max-w-2xl mx-auto">
            {subheading}
          </p>
        )}

        {/* 3 Column Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 text-left">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="group flex flex-col bg-secondary/40 rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              {/* Arched image container */}
              <div className="relative aspect-[4/3] w-full arch-top overflow-hidden shadow-sm bg-secondary border-2 border-surface mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Number tag */}
              <span className="text-[11px] font-mono tracking-widest text-accent font-semibold uppercase mb-2">
                Focus 0{idx + 1}
              </span>

              {/* H4 Title */}
              <h3 className="font-serif text-2xl text-foreground font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm sm:text-base leading-relaxed grow">
                {item.description}
              </p>

              <div className="mt-6 pt-4 border-t border-border/60">
                <a
                  href="#contact"
                  className="text-xs font-semibold tracking-wider text-primary hover:text-primary-hover uppercase inline-flex items-center gap-1 group/link"
                >
                  <span>Learn more</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
