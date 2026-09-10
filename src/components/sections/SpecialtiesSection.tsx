import Image from "next/image";
import { ServiceItem } from "@/config/mayaContent";
import { ArrowRight, Check } from "lucide-react";

interface SpecialtiesSectionProps {
  heading: string;
  subheading?: string;
  services: ServiceItem[];
}

export function SpecialtiesSection({
  heading,
  subheading,
  services,
}: SpecialtiesSectionProps) {
  const isThreeColumns = services.length === 3;

  return (
    <section id="specialties" className="py-20 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">
            Clinical Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight mt-2">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-3 text-muted text-base sm:text-lg leading-relaxed">
              {subheading}
            </p>
          )}
        </div>

        {/* Responsive Grid */}
        <div
          className={`grid grid-cols-1 ${
            isThreeColumns
              ? "md:grid-cols-3 gap-8 lg:gap-10"
              : "md:grid-cols-2 lg:grid-cols-4 gap-6"
          }`}
        >
          {services.map((service, idx) => (
            <article
              key={service.id || service.title}
              className="group flex flex-col bg-secondary/40 rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-accent/40 transition-all duration-300"
            >
              {/* Arched image block */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-[11px] font-semibold text-accent uppercase tracking-wider shadow-sm">
                    {service.badge || `Specialty 0${idx + 1}`}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col grow">
                <h3 className="font-serif text-2xl text-foreground font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted text-sm sm:text-base leading-relaxed grow">
                  {service.shortDesc}
                </p>

                {service.fullDesc && (
                  <p className="mt-3 text-xs sm:text-sm text-muted/80 leading-relaxed pt-3 border-t border-border/60">
                    {service.fullDesc}
                  </p>
                )}

                <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover group/link tracking-wide uppercase"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
